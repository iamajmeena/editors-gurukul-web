#!/usr/bin/env python3
"""
Discovers new GitHub repos in the video-editing / AI-creative-tools niche that
aren't already listed on the site, generates structured content for each via
the Gemini API, and appends them to src/data/trending-repos.ts in the same
format as the existing entries.

Requires GEMINI_API_KEY in the environment (loaded from .env when run locally).
Daily volume is capped by DAILY_REPO_LIMIT (default 15) to keep content quality
controllable and stay well inside Gemini's free tier.
"""
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_FILE = os.path.join(ROOT_DIR, "src", "data", "trending-repos.ts")
ENV_FILE = os.path.join(ROOT_DIR, ".env")

DAILY_REPO_LIMIT = int(os.environ.get("DAILY_REPO_LIMIT", "15"))
MIN_STARS = int(os.environ.get("MIN_STARS", "1000"))
GEMINI_MODEL = "gemini-flash-lite-latest"

SEARCH_TOPICS = [
    "video-editing", "video-editor", "ffmpeg", "color-grading", "vfx",
    "stable-diffusion", "text-to-speech", "voice-cloning", "text-to-video",
    "background-removal", "image-upscaling", "audio-processing",
    "speech-to-text", "photogrammetry", "motion-graphics", "subtitle-generator",
    "video-generation", "image-to-video", "lip-sync", "noise-reduction",
]

VALID_CATEGORIES = ["ai-video", "video-editor", "color-vfx", "audio-music", "utilities"]
VALID_USECASES = ["downloader", "subtitles", "stems", "compressor", "vfx-3d", "animation", "editor"]


def load_env_file():
    if "GEMINI_API_KEY" in os.environ:
        return
    if not os.path.exists(ENV_FILE):
        return
    with open(ENV_FILE) as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            os.environ.setdefault(k.strip(), v.strip())


def http_get_json(url, headers=None):
    req = urllib.request.Request(url, headers=headers or {})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.load(resp)


def get_existing_pairs():
    with open(DATA_FILE) as f:
        content = f.read()
    pairs = set()
    for m in re.finditer(r'repoOwner:\s*"([^"]+)",\s*\n\s*repoName:\s*"([^"]+)"', content):
        pairs.add((m.group(1).lower(), m.group(2).lower()))
    return pairs, content


def discover_candidates(existing_pairs, needed):
    headers = {"Accept": "application/vnd.github+json", "User-Agent": "editorsgurukul-discovery-bot"}
    seen = set()
    candidates = []
    for topic in SEARCH_TOPICS:
        if len(candidates) >= needed * 3:
            break
        url = f"https://api.github.com/search/repositories?q=topic:{topic}&sort=stars&order=desc&per_page=15"
        try:
            data = http_get_json(url, headers)
        except urllib.error.HTTPError as e:
            print(f"  search failed for topic={topic}: {e}", file=sys.stderr)
            time.sleep(2)
            continue
        for item in data.get("items", []):
            owner = item["owner"]["login"]
            name = item["name"]
            key = (owner.lower(), name.lower())
            if key in existing_pairs or key in seen:
                continue
            if item.get("stargazers_count", 0) < MIN_STARS:
                continue
            if item.get("archived") or item.get("disabled"):
                continue
            seen.add(key)
            candidates.append(item)
        time.sleep(1)
    candidates.sort(key=lambda x: x["stargazers_count"], reverse=True)
    return candidates[:needed]


def slugify(owner, name):
    base = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")
    return base or re.sub(r"[^a-z0-9]+", "-", owner.lower()).strip("-")


PROMPT_TEMPLATE = """You are writing an honest, experienced-editor review entry for a video-editing/AI-tools resource site (editorsgurukul.com), aimed at Indian creators and video editors, many of whom are beginners.

Repo: {owner}/{name}
GitHub description: {description}
Primary language: {language}
Stars: {stars}
Topics: {topics}

Write a JSON object with EXACTLY these fields (no extra fields, no markdown, valid JSON only):

{{
  "name": "Human-friendly display name (not necessarily the raw repo name)",
  "category": "one of: ai-video, video-editor, color-vfx, audio-music, utilities",
  "categoryLabel": "short 2-4 word label with one emoji, e.g. '🤖 AI Video Generator'",
  "alternativeTo": "Free Alternative to <well-known paid tool>",
  "skillLevel": "gui or cli",
  "skillLevelLabel": "e.g. '🖱️ Browser WebUI' or '💻 Python / Terminal'",
  "useCase": "one of: downloader, subtitles, stems, compressor, vfx-3d, animation, editor",
  "useCaseLabel": "short label with emoji",
  "description": "One factual sentence: what this tool literally does.",
  "summaryHindi": "One sentence in ENGLISH (not actual Hindi script) written for an Indian audience explaining the value clearly — this is a stylistic 'summary' field, plain English is fine.",
  "features": ["4 short factual feature bullets"],
  "strengths": ["3 honest strengths, specific not generic, written like a practitioner who actually used it"],
  "limitations": ["3 honest limitations or caveats, specific not generic — include real friction points a beginner would hit"],
  "safetyNote": "1-2 sentences: is the tool itself safe to install, and any genuine safety/ethics/legal caveat (e.g. voice cloning consent, copyright, model file sources). Be specific, not boilerplate. If there's nothing notable, say plainly that it's safe with no special caveats.",
  "requirements": "One line: hardware/software requirements, e.g. 'Nvidia GPU 6GB+ VRAM, Python 3.10+.' or 'Any modern CPU, no GPU needed.'",
  "usageSteps": [
    {{"stepNumber": 1, "title": "...", "instruction": "...", "commandOrSetting": "optional CLI command or setting, omit key if not applicable"}},
    {{"stepNumber": 2, "title": "...", "instruction": "..."}},
    {{"stepNumber": 3, "title": "...", "instruction": "..."}},
    {{"stepNumber": 4, "title": "...", "instruction": "..."}}
  ],
  "installCommand": "primary install command (pip/git clone/npm), or empty string if there isn't a simple one"
}}

Rules:
- Be honest and specific, never generic filler like "easy to use" or "powerful tool" without saying why.
- If the tool has real ethical/safety concerns (voice cloning, deepfakes, face swap, copyright-risk downloading), say so plainly in safetyNote — don't hide it and don't be alarmist either.
- Do not invent a paid competitor if none genuinely fits; use the closest real comparison.
- usageSteps must reflect how this specific tool is actually run, not a generic template.
- Output ONLY the JSON object, nothing else."""


def call_gemini(api_key, prompt):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{GEMINI_MODEL}:generateContent?key={api_key}"
    body = json.dumps({
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"responseMimeType": "application/json", "temperature": 0.6},
    }).encode()
    req = urllib.request.Request(url, data=body, headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=60) as resp:
        data = json.load(resp)
    return data["candidates"][0]["content"]["parts"][0]["text"]


def generate_content(api_key, repo):
    owner = repo["owner"]["login"]
    name = repo["name"]
    prompt = PROMPT_TEMPLATE.format(
        owner=owner,
        name=name,
        description=repo.get("description") or "(no description provided)",
        language=repo.get("language") or "Unknown",
        stars=repo["stargazers_count"],
        topics=", ".join(repo.get("topics", [])[:8]),
    )
    raw = call_gemini(api_key, prompt)
    fields = json.loads(raw)

    if fields.get("category") not in VALID_CATEGORIES:
        fields["category"] = "utilities"
    if fields.get("useCase") not in VALID_USECASES:
        fields["useCase"] = "editor"
    if fields.get("skillLevel") not in ("gui", "cli"):
        fields["skillLevel"] = "cli"

    stars = repo["stargazers_count"]
    stars_display = f"{stars/1000:.1f}k" if stars >= 1000 else str(stars)

    entry = {
        "id": slugify(owner, name),
        "name": fields["name"],
        "repoOwner": owner,
        "repoName": name,
        "stars": stars_display,
        "numericStars": stars,
        "language": repo.get("language") or "Unknown",
        "category": fields["category"],
        "categoryLabel": fields["categoryLabel"],
        "alternativeTo": fields["alternativeTo"],
        "skillLevel": fields["skillLevel"],
        "skillLevelLabel": fields["skillLevelLabel"],
        "timeframe": "month",
        "timeframeLabel": "📅 This Month",
        "useCase": fields["useCase"],
        "useCaseLabel": fields["useCaseLabel"],
        "installCommand": fields.get("installCommand") or "",
        "description": fields["description"],
        "summaryHindi": fields["summaryHindi"],
        "features": fields["features"],
        "strengths": fields["strengths"],
        "limitations": fields["limitations"],
        "safetyNote": fields["safetyNote"],
        "requirements": fields["requirements"],
        "usageSteps": fields["usageSteps"],
        "githubUrl": repo["html_url"],
    }
    return entry


def ts_string(s):
    return json.dumps(s, ensure_ascii=False)


def entry_to_ts(e):
    lines = ["  {"]
    lines.append(f'    id: {ts_string(e["id"])},')
    lines.append(f'    name: {ts_string(e["name"])},')
    lines.append(f'    repoOwner: {ts_string(e["repoOwner"])},')
    lines.append(f'    repoName: {ts_string(e["repoName"])},')
    lines.append(f'    stars: {ts_string(e["stars"])},')
    lines.append(f'    numericStars: {e["numericStars"]},')
    lines.append(f'    language: {ts_string(e["language"])},')
    lines.append(f'    category: {ts_string(e["category"])},')
    lines.append(f'    categoryLabel: {ts_string(e["categoryLabel"])},')
    lines.append(f'    alternativeTo: {ts_string(e["alternativeTo"])},')
    lines.append(f'    skillLevel: {ts_string(e["skillLevel"])},')
    lines.append(f'    skillLevelLabel: {ts_string(e["skillLevelLabel"])},')
    lines.append(f'    timeframe: {ts_string(e["timeframe"])},')
    lines.append(f'    timeframeLabel: {ts_string(e["timeframeLabel"])},')
    lines.append(f'    useCase: {ts_string(e["useCase"])},')
    lines.append(f'    useCaseLabel: {ts_string(e["useCaseLabel"])},')
    if e["installCommand"]:
        lines.append(f'    installCommand: {ts_string(e["installCommand"])},')
    lines.append(f'    description: {ts_string(e["description"])},')
    lines.append(f'    summaryHindi: {ts_string(e["summaryHindi"])},')
    lines.append(f'    features: [{", ".join(ts_string(x) for x in e["features"])}],')
    lines.append(f'    strengths: [{", ".join(ts_string(x) for x in e["strengths"])}],')
    lines.append(f'    limitations: [{", ".join(ts_string(x) for x in e["limitations"])}],')
    lines.append(f'    safetyNote: {ts_string(e["safetyNote"])},')
    lines.append(f'    requirements: {ts_string(e["requirements"])},')
    lines.append('    usageSteps: [')
    for step in e["usageSteps"]:
        parts = [f'stepNumber: {step["stepNumber"]}', f'title: {ts_string(step["title"])}', f'instruction: {ts_string(step["instruction"])}']
        if step.get("commandOrSetting"):
            parts.append(f'commandOrSetting: {ts_string(step["commandOrSetting"])}')
        lines.append(f'      {{ {", ".join(parts)} }},')
    lines.append('    ],')
    lines.append(f'    githubUrl: {ts_string(e["githubUrl"])},')
    lines.append("  },")
    return "\n".join(lines)


def main():
    load_env_file()
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("GEMINI_API_KEY not set (checked env and .env) — skipping repo discovery for today.", file=sys.stderr)
        return

    existing_pairs, content = get_existing_pairs()
    print(f"Existing repos on site: {len(existing_pairs)}")

    candidates = discover_candidates(existing_pairs, DAILY_REPO_LIMIT)
    print(f"Found {len(candidates)} new candidates (min {MIN_STARS} stars, not already listed)")

    if not candidates:
        print("Nothing new to add today.")
        return

    new_entries_ts = []
    added = []
    for repo in candidates:
        owner, name = repo["owner"]["login"], repo["name"]
        try:
            entry = generate_content(api_key, repo)
            new_entries_ts.append(entry_to_ts(entry))
            added.append(f"{owner}/{name} ({entry['stars']} stars) -> id={entry['id']}")
            print(f"  generated: {owner}/{name}")
        except Exception as e:
            print(f"  SKIPPED {owner}/{name}: {e}", file=sys.stderr)
        time.sleep(2)

    if not new_entries_ts:
        print("No entries generated successfully.")
        return

    insertion = "\n" + "\n".join(new_entries_ts)
    array_start = content.find("export const trendingRepos")
    if array_start == -1:
        print("ERROR: could not find trendingRepos array in trending-repos.ts", file=sys.stderr)
        sys.exit(1)
    idx = content.find("\n];", array_start)
    if idx == -1:
        print("ERROR: could not find closing marker for trendingRepos array", file=sys.stderr)
        sys.exit(1)
    before = content[:idx]
    if not before.rstrip().endswith(","):
        before = before.rstrip() + ","
    new_content = before + insertion + content[idx:]

    with open(DATA_FILE, "w") as f:
        f.write(new_content)

    print(f"\nAdded {len(added)} new repos:")
    for line in added:
        print(f"  - {line}")


if __name__ == "__main__":
    main()
