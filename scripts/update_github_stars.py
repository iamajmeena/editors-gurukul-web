import urllib.request
import json
import re
import os

print("Starting daily GitHub star count update...")

repos_file = "src/data/trending-repos.ts"
if not os.path.exists(repos_file):
    print("Error: src/data/trending-repos.ts not found!")
    exit(1)

with open(repos_file, "r", encoding="utf-8") as f:
    content = f.read()

# Pattern to find repoOwner and repoName entries
matches = re.findall(r'repoOwner:\s*"([^"]+)",\s*repoName:\s*"([^"]+)"', content)

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'
}

for owner, repo in matches:
    url = f"https://api.github.com/repos/{owner}/{repo}"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as response:
            if response.status == 200:
                data = json.loads(response.read().decode())
                stargazers = data.get("stargazers_count", 0)
                
                # Format star count (e.g., 88.4k or 1.2k)
                if stargazers >= 1000:
                    formatted_stars = f"{stargazers / 1000:.1f}k"
                else:
                    formatted_stars = str(stargazers)
                
                print(f"Updated {owner}/{repo}: {stargazers} stars ({formatted_stars})")
                
                # Regex replace stars in content for this repo
                repo_block_pattern = rf'(repoOwner:\s*"{owner}",\s*repoName:\s*"{repo}",\s*stars:\s*")[^"]+(")'
                content = re.sub(repo_block_pattern, rf'\g<1>{formatted_stars}\g<2>', content)

                num_stars_pattern = rf'(repoOwner:\s*"{owner}",\s*repoName:\s*"{repo}",\s*stars:[^,]+,\s*numericStars:\s*)\d+'
                content = re.sub(num_stars_pattern, rf'\g<1>{stargazers}', content)

    except Exception as e:
        print(f"Could not update {owner}/{repo}: {e}")

with open(repos_file, "w", encoding="utf-8") as f:
    f.write(content)

print("Finished updating GitHub star counts in src/data/trending-repos.ts")
