#!/usr/bin/env python3
"""
One-off: generate content for a manually-researched, human-reviewed batch of
candidate repos (found via WebSearch + broad GitHub keyword search, reviewed
with the user before this ran) and append them to trending-repos.ts.

Reuses generate_content/entry_to_ts from discover_and_add_repos.py but skips
the GitHub topic-search discovery step since candidates are already fixed.
"""
import sys
import time
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from discover_and_add_repos import (
    load_env_file, get_existing_pairs, generate_content, entry_to_ts, DATA_FILE
)

CANDIDATES = [
    # (owner, name, stars, language, description)
    ("RVC-Boss", "GPT-SoVITS", 60481, "Python", "1 min voice data can also be used to train a good TTS model! (few shot voice cloning)"),
    ("CorentinJ", "Real-Time-Voice-Cloning", 60074, "Python", "Clone a voice in 5 seconds to generate arbitrary speech in real-time"),
    ("jamiepine", "voicebox", 49288, "TypeScript", "The open-source AI voice studio. Clone, dictate, create."),
    ("myshell-ai", "OpenVoice", 37094, "Python", "Instant voice cloning by MIT and MyShell. Audio foundation model."),
    ("index-tts", "index-tts", 22426, "Python", "An Industrial-Level Controllable and Efficient Zero-Shot Text-To-Speech System"),
    ("hacksider", "Deep-Live-Cam", 95672, "Python", "real time face swap and one-click video deepfake with only a single image"),
    ("iperov", "DeepFaceLive", 31012, "Python", "Real-time face swap for PC streaming or video calls"),
    ("Rudrabha", "Wav2Lip", 13144, "Python", "A Lip Sync Expert Is All You Need for Speech to Lip Generation"),
    ("olive-editor", "olive", 9111, "C++", "Free open-source non-linear video editor"),
    ("OpenShot", "openshot-qt", 6132, "Python", "OpenShot Video Editor is an award-winning free and open-source video editor"),
    ("palmier-io", "palmier-pro", 13090, "Swift", "macOS video editor built for AI"),
    ("zai-org", "CogVideo", 12936, "Python", "text and image to video generation: CogVideoX (2024) and CogVideo (ICLR 2023)"),
    ("duixcom", "Duix-Avatar", 14345, "Python", "Truly open-source AI avatar (digital human) toolkit for offline video generation"),
    ("wulkano", "Kap", 19311, "JavaScript", "An open-source screen recorder built with web technology"),
    ("alyssaxuu", "screenity", 18464, "JavaScript", "The free and privacy-friendly screen recorder with no limits"),
    ("freemocap", "freemocap", 9942, "Python", "Free Motion Capture for Everyone"),
    ("VAST-AI-Research", "TripoSR", 6812, "Python", "TripoSR: Fast 3D Object Reconstruction from a Single Image"),
    ("gyroflow", "gyroflow", 9269, "Rust", "Video stabilization using gyroscope data"),
    ("imgly", "background-removal-js", 7249, "TypeScript", "Remove backgrounds from images directly in the browser environment"),
    ("buxuku", "SmartSub", 4463, "TypeScript", "One-stop desktop tool: video-to-subtitle, subtitle translation, AI dubbing & voice cloning"),
]


def main():
    load_env_file()
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("ERROR: GEMINI_API_KEY not set", file=sys.stderr)
        sys.exit(1)

    existing_pairs, content = get_existing_pairs()
    new_entries_ts = []
    added = []
    skipped = []

    for owner, name, stars, language, desc in CANDIDATES:
        key = (owner.lower(), name.lower())
        if key in existing_pairs:
            print(f"  SKIP (already listed): {owner}/{name}")
            continue
        fake_repo = {
            "owner": {"login": owner},
            "name": name,
            "description": desc,
            "language": language,
            "stargazers_count": stars,
            "topics": [],
            "html_url": f"https://github.com/{owner}/{name}",
        }
        try:
            entry = generate_content(api_key, fake_repo)
            new_entries_ts.append(entry_to_ts(entry))
            added.append(f"{owner}/{name} ({entry['stars']} stars) -> id={entry['id']}")
            print(f"  generated: {owner}/{name}")
        except Exception as e:
            skipped.append(f"{owner}/{name}: {e}")
            print(f"  FAILED {owner}/{name}: {e}", file=sys.stderr)
        time.sleep(2)

    if not new_entries_ts:
        print("Nothing generated.")
        return

    insertion = "\n" + "\n".join(new_entries_ts)
    array_start = content.find("export const trendingRepos")
    idx = content.find("\n];", array_start)
    before = content[:idx]
    if not before.rstrip().endswith(","):
        before = before.rstrip() + ","
    new_content = before + insertion + content[idx:]

    with open(DATA_FILE, "w") as f:
        f.write(new_content)

    print(f"\nAdded {len(added)} repos:")
    for line in added:
        print(f"  - {line}")
    if skipped:
        print(f"\nFailed {len(skipped)}:")
        for line in skipped:
            print(f"  - {line}")


if __name__ == "__main__":
    main()
