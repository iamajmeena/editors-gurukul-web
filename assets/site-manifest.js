/*
  Editors Gurukul — central page manifest.
  Add one entry here whenever a new page is added to the site.
  category is used by site-chrome.js to auto-pick "Related Guides".
  path must match the page's clean URL (no .html) except for utility pages.
*/
window.EG_PAGES = [
  { path: "/", title: "Home", category: "hub" },
  { path: "/free-resources", title: "Free Resources", category: "hub", desc: "Browse the full set of free filmmaking guides and downloads." },
  { path: "/guides", title: "All Guides", category: "hub", desc: "Every guide on the site, grouped by topic." },
  { path: "/camera-guides", title: "All Camera Guides", category: "hub", desc: "Practical camera education for beginners and creators." },
  { path: "/my-gear", title: "My Gear", category: "hub", desc: "The cameras, lenses and lighting kit recommended here." },
  { path: "/free-camera-guide", title: "Free Camera Settings Guide", category: "camera", desc: "Practical settings for cinematic shots, low light, and better exposure." },
  { path: "/camera-finder", title: "Camera Finder Tool", category: "camera", desc: "Answer 5 quick questions about your budget and use-case and get a real camera recommendation." },

  { path: "/1-best-camera-under-50000", title: "Best Camera Under ₹50,000", category: "camera", desc: "A practical buying guide for creators on a budget." },
  { path: "/5-master-your-camera", title: "Master Your Camera", category: "camera", desc: "Practical exposure, framing and technique fundamentals." },

  { path: "/2-what-is-codec", title: "What Is a Codec?", category: "editing-fundamentals", desc: "H.264, H.265, ProRes and RAW explained." },
  { path: "/3-what-is-log", title: "What Is Log?", category: "editing-fundamentals", desc: "Why log footage gives you more grading flexibility." },
  { path: "/4-what-is-hdr", title: "What Is HDR?", category: "editing-fundamentals", desc: "A clear guide to dynamic range and high contrast." },

  { path: "/davinci-resolve-studio-vs-free", title: "Studio vs Free", category: "davinci-resolve", desc: "Is the paid upgrade actually worth it for your workflow?" },
  { path: "/davinci-resolve-system-requirements-2026", title: "System Requirements 2026", category: "davinci-resolve", desc: "Minimum vs recommended specs, with budget/mid/pro build tiers." },
  { path: "/davinci-resolve-shortcuts-cheatsheet-2026", title: "Shortcuts Cheat Sheet", category: "davinci-resolve", desc: "Speed up your edit, color, and Fairlight workflow." },
  { path: "/davinci-resolve-fix-common-errors-2026", title: "Fix Common Errors", category: "davinci-resolve", desc: "Render Job Failed, lag, and crashes — matched to their real causes." },
  { path: "/davinci-resolve-low-end-pc-2026", title: "Low-End PC Settings", category: "davinci-resolve", desc: "7 settings that actually help Resolve run on weaker hardware." },
  { path: "/davinci-resolve-tips-2026", title: "DaVinci Resolve Tips 2026", category: "davinci-resolve", desc: "What's new in Resolve 21 plus core color grading tips." },
  { path: "/davinci-resolve-nodes-explained-2026", title: "Nodes Explained", category: "davinci-resolve", desc: "Serial, Parallel, Layer, and Outside nodes with real grading examples." },
  { path: "/davinci-resolve-white-balance-method-2026", title: "White Balance Method", category: "davinci-resolve", desc: "Vectorscope-first workflow for accurate white balance, fast." },
  { path: "/davinci-resolve-21-new-features-2026", title: "25 New Resolve 21 Features", category: "davinci-resolve", desc: "AI tools, the Photo page, Color page upgrades, Fusion, Fairlight — all broken down." },
  { path: "/davinci-resolve-hidden-methods-2026", title: "11 Hidden DaVinci Resolve Methods", category: "davinci-resolve", desc: "Power Bins, Power Grades, Remote Grade, Stack Timeline and more — real time-saving methods from 6 years of professional grading." },

  { path: "/final-cut-pro-vs-premiere-pro-vs-davinci-resolve-2026", title: "FCP vs Premiere vs Resolve (2026)", category: "nle-comparison", desc: "Pricing, performance and toolset breakdown for 2026." },

  { path: "/should-you-become-a-video-editor-2026", title: "Should You Become a Video Editor?", category: "career", desc: "Which software to learn, where to learn from, getting clients, and an honest gut-check." },
  { path: "/best-rgb-stick-light-2026", title: "Best RGB Stick Light 2026", category: "camera", desc: "Digitek budget vs mid vs Godox LC500R, real tested comparison, plus more options for every budget." },

  { path: "/about-contact", title: "About / Contact", category: "utility" },
  { path: "/privacy-policy", title: "Privacy Policy", category: "utility" },
  { path: "/terms", title: "Terms", category: "utility" },
];
