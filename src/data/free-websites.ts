export interface WebsiteUsageStep {
  stepNumber: number;
  title: string;
  instruction: string;
}

export interface FreeWebsite {
  id: string;
  name: string;
  url: string;
  logoEmoji: string;
  category: 'video-editor' | 'ai-tools' | 'utilities';
  categoryLabel: string;
  tagline: string;
  alternativeTo: string;
  description: string;
  summaryHindi: string;
  features: string[];
  pros: string[];
  cons: string[];
  freePlanNote: string;
  bestFor: string;
  howToUseSteps: WebsiteUsageStep[];
  featured?: boolean;
}

export const freeWebsites: FreeWebsite[] = [
  {
    id: "kapwing",
    name: "Kapwing",
    url: "https://www.kapwing.com",
    logoEmoji: "📝",
    category: "video-editor",
    categoryLabel: "Online Video Editor & Subtitler",
    tagline: "A browser video editor best known for fast, accurate auto-subtitles.",
    alternativeTo: "Free Alternative to Descript",
    description: "Kapwing is a collaborative, browser-based video editor with strong auto-transcription/subtitle tools, a meme maker, and a resizer for turning one video into multiple aspect ratios.",
    summaryHindi: "Sabse zyada iska use auto-subtitles ke liye hota hai — video upload karo, transcript apne aap ban jaata hai, aur ek click mein alag-alag aspect ratios (9:16, 1:1, 16:9) mein resize bhi ho jaata hai.",
    features: ["Automatic subtitle generation & editing", "Smart video resizer for multi-platform export", "Real-time collaborative editing", "Built-in meme and template maker"],
    pros: ["One of the fastest ways to get clean, editable auto-subtitles", "Smart Resize saves real time when repurposing one video for YouTube, Reels, and Shorts", "Works fully in-browser, good for teams editing together"],
    cons: ["Free exports carry a watermark", "Free plan has monthly export time limits", "Can feel slower than desktop editors on longer projects"],
    freePlanNote: "Free plan includes watermarked exports and limited monthly export minutes; paid plans remove the watermark and raise limits.",
    bestFor: "Fast auto-subtitles and resizing one video for multiple social platforms.",
    howToUseSteps: [
      { stepNumber: 1, title: "Upload Your Video", instruction: "Go to kapwing.com and upload or paste a video URL." },
      { stepNumber: 2, title: "Auto-Generate Subtitles", instruction: "Use the Subtitles tool to auto-transcribe, then edit any mistakes." },
      { stepNumber: 3, title: "Resize if Needed", instruction: "Use Smart Resize to create 9:16 / 1:1 / 16:9 versions instantly." },
      { stepNumber: 4, title: "Export", instruction: "Download the finished clip (watermark-free requires a paid plan)." }
    ],
  },
  {
    id: "squoosh",
    name: "Squoosh",
    url: "https://squoosh.app",
    logoEmoji: "🗜️",
    category: "utilities",
    categoryLabel: "Free Image Compressor",
    tagline: "Google's open-source browser tool for shrinking image file size without visible quality loss.",
    alternativeTo: "Free Alternative to TinyPNG",
    description: "Squoosh is a free, open-source image compression tool built by Google that runs entirely in the browser, letting you compare compression settings side-by-side before exporting.",
    summaryHindi: "Thumbnail ya website images ka file size kam karna ho bina quality kharab kiye, to Squoosh ek side-by-side before/after slider deta hai jisse exact sweet spot mil jaata hai.",
    features: ["Side-by-side before/after compression preview", "Supports WebP, AVIF, JPEG, PNG output", "Runs 100% locally in-browser — no upload to a server", "Open-source, built by Google's Chrome team"],
    pros: ["Images never leave your device since compression happens in-browser — good for privacy", "Visual before/after comparison makes it easy to pick the right quality/size tradeoff", "Completely free with no limits, since it's open-source"],
    cons: ["Only handles single images at a time, no batch processing on the site itself", "Interface is technical — more useful once you understand compression settings", "No cloud storage or history of past compressions"],
    freePlanNote: "100% free and open-source, with no usage limits since processing happens on your own device.",
    bestFor: "Compressing thumbnails and web images for faster page load without quality loss.",
    howToUseSteps: [
      { stepNumber: 1, title: "Open Squoosh", instruction: "Go to squoosh.app." },
      { stepNumber: 2, title: "Upload an Image", instruction: "Drag and drop your PNG or JPG file onto the page." },
      { stepNumber: 3, title: "Adjust Compression", instruction: "Use the right-hand panel to pick a format and quality level, comparing the before/after preview." },
      { stepNumber: 4, title: "Download", instruction: "Click the download button to save the compressed file." }
    ],
  },
  {
    id: "swishy",
    name: "Swishy",
    url: "https://www.swishy.ai",
    logoEmoji: "🌀",
    category: "ai-tools",
    categoryLabel: "AI Motion Graphics Generator",
    tagline: "Describe an animation in plain English and get a ready motion graphic back.",
    alternativeTo: "Free Alternative to hand-animating in After Effects",
    description: "Swishy is a browser-based AI motion designer — type a prompt like 'stretchy text animation' or 'animated bar chart' and it generates a ready-to-export motion graphic, with templates for social media, logos, and UI elements.",
    summaryHindi: "After Effects mein hand-keyframe animation banane ka time nahi hai to Swishy prompt se hi text animations, logo reveals, aur social media graphics generate kar deta hai — seedha video editor mein drop karne layak.",
    features: ["Prompt-to-animation generation", "Templates for text, logos, charts & UI elements", "Community gallery of shared animations", "Browser-based, no install"],
    pros: ["Genuinely fast way to get a polished motion graphic without learning After Effects keyframing", "Large template gallery to start from instead of a blank prompt", "Exports usable directly in a video timeline"],
    cons: ["Free tier limits generations/exports per month", "AI-generated animations can need manual tweaking for exact timing", "Less precise control than hand-animating in After Effects"],
    freePlanNote: "Free tier includes a limited number of animation generations per month; paid plans raise the limit and unlock higher-res exports.",
    bestFor: "Quick text animations, logo reveals, and social media motion graphics without After Effects.",
    howToUseSteps: [
      { stepNumber: 1, title: "Open Swishy", instruction: "Go to swishy.ai and sign up for a free account." },
      { stepNumber: 2, title: "Describe Your Animation", instruction: "Type a prompt describing the animation you want, e.g. 'bouncy text intro'." },
      { stepNumber: 3, title: "Pick or Refine a Result", instruction: "Choose from generated variations, or refine the prompt for a different style." },
      { stepNumber: 4, title: "Export", instruction: "Download the animation as a video file to drop into your editor." }
    ],
    featured: true,
  },
  {
    id: "cartesia",
    name: "Cartesia",
    url: "https://cartesia.ai",
    logoEmoji: "🗣️",
    category: "ai-tools",
    categoryLabel: "AI Voice Generation Platform",
    tagline: "A fast, realistic text-to-speech engine with a free browser playground.",
    alternativeTo: "Free Alternative to ElevenLabs (for quick tests)",
    description: "Cartesia builds real-time speech AI (its Sonic text-to-speech and Ink transcription models) aimed primarily at developers building voice agents, but its web playground lets anyone generate realistic speech from text for free within usage limits.",
    summaryHindi: "Ye mainly developers/companies ke liye voice-agent API hai, lekin iska browser playground use karke bhi realistic AI voiceover free mein try kar sakte ho, bina koi code likhe.",
    features: ["Realistic low-latency text-to-speech (Sonic model)", "Accurate streaming transcription (Ink model)", "Browser playground — no coding required to test", "API access for developers who want to integrate it"],
    pros: ["Genuinely fast and natural-sounding speech generation — ranks highly on independent speech benchmarks", "Playground lets non-developers try it without any setup", "Actively developed, frontier-quality voice models"],
    cons: ["Platform is built for developers/enterprises first — the free playground is a secondary use case, not the main product", "Free usage in the playground is limited before you need an API key or paid plan", "Less beginner-friendly than a dedicated consumer voiceover tool"],
    freePlanNote: "The web playground allows limited free speech generation to try the models; full API access needs a paid plan or developer credits.",
    bestFor: "Testing high-quality AI voiceover generation before committing to a paid voice tool.",
    howToUseSteps: [
      { stepNumber: 1, title: "Open the Playground", instruction: "Go to cartesia.ai and find the 'Try Cartesia' playground." },
      { stepNumber: 2, title: "Enter Your Script", instruction: "Type or paste the text you want narrated." },
      { stepNumber: 3, title: "Choose a Voice", instruction: "Pick from the available voice options." },
      { stepNumber: 4, title: "Generate & Download", instruction: "Generate the audio and download it for use in your edit." }
    ],
  },
  {
    id: "minimax",
    name: "MiniMax",
    url: "https://www.minimax.io",
    logoEmoji: "🎛️",
    category: "ai-tools",
    categoryLabel: "AI Video & Speech Platform",
    tagline: "A large AI lab's suite of models covering video generation, speech, and music — with free trial access.",
    alternativeTo: "Free Alternative to testing Runway/ElevenLabs separately",
    description: "MiniMax is a major AI lab offering a suite of frontier models accessible through the browser, including a video generation model and a 'Speech & Music' model for AI voiceover and background music generation.",
    summaryHindi: "Ek hi platform pe AI video generation aur AI voice/music generation dono try kar sakte ho — bina multiple alag-alag tools ke liye subscribe kiye.",
    features: ["AI video generation model", "AI speech & music generation", "Browser-based, no install", "Free trial credits for new accounts"],
    pros: ["Covers both video and audio generation on one platform, unlike single-purpose tools", "Frontier-lab quality models, competitive with better-known Western alternatives", "Free trial credits let you evaluate before paying"],
    cons: ["Free trial credits are limited and run out quickly with video generation", "Less documented for non-technical beginners than mainstream Western tools", "Terms and pricing can change as the platform evolves quickly"],
    freePlanNote: "New accounts get limited free trial credits for video/speech generation; continued use requires a paid plan once credits run out.",
    bestFor: "Trying AI video or AI voiceover/music generation without committing to a paid subscription upfront.",
    howToUseSteps: [
      { stepNumber: 1, title: "Create a Free Account", instruction: "Go to minimax.io and sign up." },
      { stepNumber: 2, title: "Pick a Model", instruction: "Choose Video Generation or Speech & Music depending on your need." },
      { stepNumber: 3, title: "Enter a Prompt", instruction: "Describe the video, or type the script for speech generation." },
      { stepNumber: 4, title: "Generate & Download", instruction: "Generate the result and download it once ready." }
    ],
  },
  {
    id: "theresanaiforthat",
    name: "There's An AI For That",
    url: "https://theresanaiforthat.com",
    logoEmoji: "🧭",
    category: "ai-tools",
    categoryLabel: "AI Tools Directory",
    tagline: "A searchable directory of thousands of AI tools, organized by task.",
    alternativeTo: "Free Alternative to manually Googling 'AI tool for X'",
    description: "There's An AI For That is a large, searchable directory that catalogs thousands of AI tools by category and use case, making it the fastest way to discover a tool for a specific task like removing a video background or generating subtitles.",
    summaryHindi: "Koi specific kaam ke liye AI tool dhoondh rahe ho (jaise 'AI se b-roll banao' ya 'AI se script likho') to Google karne ke bajaye is directory pe search karo — hazaaron tools categorized mile jaate hain ek hi jagah.",
    features: ["Searchable database of thousands of AI tools", "Organized by category and specific task", "User ratings and reviews per tool", "Updated regularly with new AI tool launches"],
    pros: ["Fastest way to discover niche/new AI tools instead of scattered Google searches", "Well-organized by actual use case, not just company marketing categories", "Free to browse with no signup required"],
    cons: ["It's a directory, not a tool itself — you still evaluate each linked tool's own safety/pricing separately", "Not every listed tool is vetted for quality; some listings are low-effort or abandoned", "Site mixes sponsored/promoted listings with organic ones"],
    freePlanNote: "Free to browse and search with no account needed; a paid membership adds extra filtering and early access to new tool listings.",
    bestFor: "Discovering a specific AI tool for a task you don't already have a solution for.",
    howToUseSteps: [
      { stepNumber: 1, title: "Go to the Directory", instruction: "Open theresanaiforthat.com." },
      { stepNumber: 2, title: "Search Your Task", instruction: "Type what you want to do, e.g. 'AI subtitle generator'." },
      { stepNumber: 3, title: "Compare Results", instruction: "Browse matching tools with descriptions and user ratings." },
      { stepNumber: 4, title: "Visit the Tool", instruction: "Click through to the specific AI tool's own website to try it." }
    ],
  },
  {
    id: "poe",
    name: "Poe",
    url: "https://poe.com",
    logoEmoji: "💬",
    category: "ai-tools",
    categoryLabel: "Multi-Model AI Chat Platform",
    tagline: "Chat with many different AI models from one place, with a free daily allowance.",
    alternativeTo: "Free Alternative to paying for multiple separate AI chatbot subscriptions",
    description: "Poe, built by Quora, is a single interface for chatting with a wide range of AI models from different companies, useful for scriptwriting, brainstorming video ideas, or comparing how different AI models answer the same prompt.",
    summaryHindi: "Video scripts likhne, titles brainstorm karne, ya alag-alag AI models ke answers compare karne ke liye ek hi jagah — alag-alag company ke liye alag subscription nahi chahiye.",
    features: ["Access to multiple AI chat models in one interface", "Free daily message allowance across models", "Custom bot creation for repeated workflows", "Mobile and desktop apps available"],
    pros: ["Avoids paying for several separate AI chat subscriptions just to compare models", "Free tier is genuinely usable for everyday scriptwriting/brainstorming needs", "Simple, familiar chat interface"],
    cons: ["Free daily message limits reset and restrict heavy daily use", "Access to the newest/most powerful models sometimes needs a paid subscription", "Not all models available on their official platforms are available here"],
    freePlanNote: "Free tier includes a limited number of messages per day across available models; a paid subscription raises limits and unlocks premium models.",
    bestFor: "Brainstorming scripts, titles, and ideas using multiple AI models without multiple subscriptions.",
    howToUseSteps: [
      { stepNumber: 1, title: "Sign Up Free", instruction: "Go to poe.com and create a free account." },
      { stepNumber: 2, title: "Pick a Model", instruction: "Choose an AI model from the list based on your task." },
      { stepNumber: 3, title: "Start Chatting", instruction: "Type your prompt — e.g. a video script outline or title ideas." },
      { stepNumber: 4, title: "Refine the Output", instruction: "Iterate with follow-up messages to refine the result." }
    ],
  },
];

export const websiteCategories = [
  { id: 'all-cat', label: '⚡ All Categories' },
  { id: 'video-editor', label: '🎬 Online Video Editors' },
  { id: 'ai-tools', label: '🤖 AI Web Tools' },
  { id: 'utilities', label: '⚙️ File Utilities' }
];
