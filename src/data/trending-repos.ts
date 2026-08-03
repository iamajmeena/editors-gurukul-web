export interface RecommendedProduct {
  name: string;
  price: string;
  url: string;
  badge: string;
}

export interface GitHubRepo {
  id: string;
  name: string;
  repoOwner: string;
  repoName: string;
  stars: string;
  numericStars: number;
  language: string;
  category: 'ai-video' | 'video-editor' | 'color-vfx' | 'audio-music' | 'utilities';
  categoryLabel: string;
  alternativeTo: string;
  skillLevel: 'gui' | 'cli';
  skillLevelLabel: string;
  timeframe: 'today' | 'week' | 'month' | 'quarter' | 'alltime';
  timeframeLabel: string;
  useCase: 'downloader' | 'subtitles' | 'stems' | 'compressor' | 'vfx-3d' | 'animation' | 'editor';
  useCaseLabel: string;
  trendingBadge?: string;
  installCommand?: string;
  brewCommand?: string;
  wingetCommand?: string;
  description: string;
  summaryHindi: string;
  features: string[];
  requirements: string;
  githubUrl: string;
  websiteUrl?: string;
  featured?: boolean;
  recommendedProduct?: RecommendedProduct;
}

export const trendingRepos: GitHubRepo[] = [
  {
    id: "yt-dlp",
    name: "yt-dlp",
    repoOwner: "yt-dlp",
    repoName: "yt-dlp",
    stars: "88.4k",
    numericStars: 88400,
    language: "Python",
    category: "utilities",
    categoryLabel: "Media Downloader",
    alternativeTo: "Free Alternative to IDM & SaveFrom",
    skillLevel: "cli",
    skillLevelLabel: "💻 Python / Terminal",
    timeframe: "today",
    timeframeLabel: "🔥 Trending Today",
    useCase: "downloader",
    useCaseLabel: "🎥 4K Video Downloader",
    trendingBadge: "🔥 #1 Media Downloader",
    installCommand: "pip install yt-dlp",
    brewCommand: "brew install yt-dlp",
    wingetCommand: "winget install yt-dlp",
    description: "A feature-rich command-line audio/video downloader with support for thousands of video platforms.",
    summaryHindi: "YouTube, Instagram Reels, aur 1,000+ sites se 4K video aur audio high-quality me download karne ka sabse powerful open-source command tool.",
    features: [
      "Download 4K, 8K, HDR & 60fps videos from YouTube, Instagram & TikTok",
      "Automatic audio extraction to MP3, AAC & WAV",
      "Bypass geographical restrictions & age verification",
      "Supports downloading complete playlists & channel archives"
    ],
    requirements: "Python 3.8+ or pre-compiled standalone executable binary.",
    githubUrl: "https://github.com/yt-dlp/yt-dlp",
    featured: true,
    recommendedProduct: {
      name: "iPhone Movie App (1-Click Setup)",
      price: "₹49",
      url: "/digital-store/movie-app-iphone",
      badge: "📱 Want 1-Click iPhone Movie App?"
    }
  },
  {
    id: "comfyui",
    name: "ComfyUI",
    repoOwner: "comfyanonymous",
    repoName: "ComfyUI",
    stars: "61.2k",
    numericStars: 61200,
    language: "Python",
    category: "ai-video",
    categoryLabel: "AI Generation",
    alternativeTo: "Free Alternative to Runway Gen-2 & Midjourney",
    skillLevel: "gui",
    skillLevelLabel: "🖱️ Visual Node GUI",
    timeframe: "week",
    timeframeLabel: "⚡ This Week",
    useCase: "animation",
    useCaseLabel: "🤖 AI Video Generator",
    trendingBadge: "⚡ #1 AI Video Workflow",
    installCommand: "git clone https://github.com/comfyanonymous/ComfyUI.git",
    description: "The most powerful and modular visual node-based GUI for Stable Diffusion & AI Video generation.",
    summaryHindi: "AI Video, Image Animation, aur Stable Diffusion ka sabse modular node-based visual tool. Professional AI creators ka #1 choice.",
    features: [
      "Visual node-based graph editor for full control over AI generation",
      "50% lower VRAM usage compared to traditional web interfaces",
      "Supports Stable Diffusion XL, Flux.1, AnimateDiff & SVD",
      "Save & load complete workflow templates as JSON files"
    ],
    requirements: "Nvidia GPU with 6GB+ VRAM (8GB+ recommended), Python 3.10+, PyTorch.",
    githubUrl: "https://github.com/comfyanonymous/ComfyUI",
    websiteUrl: "https://comfy.org",
    featured: true,
    recommendedProduct: {
      name: "500+ Cinematic LUTs & AI Color Presets",
      price: "₹49",
      url: "/digital-store/500-lut-pack",
      badge: "🎨 Get 500+ Cinematic Color Presets"
    }
  },
  {
    id: "whisper",
    name: "OpenAI Whisper",
    repoOwner: "openai",
    repoName: "whisper",
    stars: "74.8k",
    numericStars: 74800,
    language: "Python",
    category: "audio-music",
    categoryLabel: "AI Subtitles & Transcribe",
    alternativeTo: "Free Alternative to Descript & Premiere Auto-Caption",
    skillLevel: "cli",
    skillLevelLabel: "💻 Python CLI",
    timeframe: "month",
    timeframeLabel: "📅 This Month",
    useCase: "subtitles",
    useCaseLabel: "🗣️ Auto Subtitles (SRT)",
    trendingBadge: "🎯 99% Subtitle Accuracy",
    installCommand: "pip install -U openai-whisper",
    description: "Robust Speech Recognition & Automatic Subtitle Generation Model trained on 680,000 hours of audio.",
    summaryHindi: "Video ki voice ko automatic 99% accuracy ke saath Text aur Subtitles (SRT) me convert karne waala OpenAI ka free AI model.",
    features: [
      "99% accurate speech-to-text transcription in 98+ languages including Hindi",
      "Export directly to SRT, VTT, TXT & JSON format",
      "Automatic timestamp generation for accurate subtitle alignment",
      "Runs completely offline on your local computer"
    ],
    requirements: "Python 3.9+, ffmpeg installed, 4GB+ RAM.",
    githubUrl: "https://github.com/openai/whisper",
    featured: true,
    recommendedProduct: {
      name: "DaVinci Resolve 21 Studio Setup",
      price: "₹49",
      url: "/digital-store/davinci-resolve-21-studio",
      badge: "🎙️ Need DaVinci 21 Fairlight Mastering?"
    }
  },
  {
    id: "stable-diffusion-webui",
    name: "AUTOMATIC1111 SD WebUI",
    repoOwner: "AUTOMATIC1111",
    repoName: "stable-diffusion-webui",
    stars: "148.5k",
    numericStars: 148500,
    language: "Python",
    category: "ai-video",
    categoryLabel: "AI Image & Video",
    alternativeTo: "Free Alternative to Midjourney & DALL-E 3",
    skillLevel: "gui",
    skillLevelLabel: "🖱️ Browser WebUI",
    timeframe: "alltime",
    timeframeLabel: "👑 All-Time Top",
    useCase: "animation",
    useCaseLabel: "🤖 AI Image Generator",
    trendingBadge: "👑 #1 AI Generation WebUI",
    installCommand: "git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git",
    description: "Stable Diffusion browser interface for AI image generation, inpainting, face swapping, and controlnet.",
    summaryHindi: "AI photos generate karne, face replace karne aur resolution upscaling ka duniya ka sabse popular browser software.",
    features: [
      "Text-to-Image, Image-to-Image & Inpainting",
      "ControlNet support for precise pose & depth control",
      "Face restoration using GFPGAN & CodeFormer",
      "Custom LoRA & Checkpoint model support"
    ],
    requirements: "Nvidia GPU with 4GB+ VRAM (8GB+ recommended), Python 3.10.",
    githubUrl: "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
    recommendedProduct: {
      name: "CapCut Pro PC & Mac Bundle",
      price: "₹49",
      url: "/digital-store/capcut-pro-pc",
      badge: "✂️ Get CapCut Pro PC & Mac"
    }
  },
  {
    id: "fooocus",
    name: "Fooocus AI",
    repoOwner: "lllyasviel",
    repoName: "Fooocus",
    stars: "38.2k",
    numericStars: 38200,
    language: "Python",
    category: "ai-video",
    categoryLabel: "Minimal AI Image Generator",
    alternativeTo: "Free Alternative to Midjourney v6",
    skillLevel: "gui",
    skillLevelLabel: "🖱️ 1-Click Browser App",
    timeframe: "month",
    timeframeLabel: "📅 This Month",
    useCase: "animation",
    useCaseLabel: "🤖 Midjourney Alternative",
    trendingBadge: "🎨 Midjourney Style GUI",
    installCommand: "git clone https://github.com/lllyasviel/Fooocus.git",
    description: "Fooocus is an image generating software based on Gradio that automates prompt weighting & quality tuning like Midjourney.",
    summaryHindi: "Bina kisi complex settings ke Midjourney jaise photorealistic AI Images generate karne waala 1-click tool.",
    features: [
      "Midjourney-like simple prompt interface with automatic quality enhancement",
      "Built-in SDXL & Flux checkpoint optimization",
      "Inpainting, Face Swap & Image Prompt mixing",
      "Requires zero prompt engineering expertise"
    ],
    requirements: "Nvidia GPU with 4GB+ VRAM or Apple Silicon Mac.",
    githubUrl: "https://github.com/lllyasviel/Fooocus",
    recommendedProduct: {
      name: "500+ Cinematic LUTs & AI Presets",
      price: "₹49",
      url: "/digital-store/500-lut-pack",
      badge: "🎨 Get 500+ Color Grading Presets"
    }
  },
  {
    id: "invokeai",
    name: "InvokeAI",
    repoOwner: "invoke-ai",
    repoName: "InvokeAI",
    stars: "23.4k",
    numericStars: 23400,
    language: "Python",
    category: "ai-video",
    categoryLabel: "Pro Creative AI Engine",
    alternativeTo: "Free Alternative to Photoshop Generative Fill",
    skillLevel: "gui",
    skillLevelLabel: "🖱️ Studio Web Canvas",
    timeframe: "quarter",
    timeframeLabel: "📆 Past 3 Months",
    useCase: "animation",
    useCaseLabel: "🎨 Pro Canvas AI Studio",
    trendingBadge: "🖌️ Infinite Canvas AI",
    installCommand: "pip install InvokeAI",
    description: "InvokeAI is a leading creative engine for Visual Artists, Animators, and Studios powering AI workflows.",
    summaryHindi: "Photoshop Generative Fill jaisa infinite canvas jisme visual artists image layers aur AI blending control kar sakte hain.",
    features: [
      "Unified Canvas for seamless Outpainting & Inpainting",
      "Node-based workflow architecture for advanced artists",
      "ControlNet, IP-Adapter & LoRA blending stack",
      "Professional asset management library"
    ],
    requirements: "Nvidia GPU with 6GB+ VRAM, macOS Apple Silicon, or Windows.",
    githubUrl: "https://github.com/invoke-ai/InvokeAI",
    websiteUrl: "https://invoke.ai",
    recommendedProduct: {
      name: "Toko 3D Motion Elements Pack",
      price: "₹49",
      url: "/digital-store/toko-elements-pack",
      badge: "⚡ Get Toko 3D Motion Pack"
    }
  },
  {
    id: "bark",
    name: "Suno Bark (AI Voice)",
    repoOwner: "suno-ai",
    repoName: "bark",
    stars: "34.1k",
    numericStars: 34100,
    language: "Python",
    category: "audio-music",
    categoryLabel: "AI Speech & Sound Effects",
    alternativeTo: "Free Alternative to ElevenLabs Audio",
    skillLevel: "cli",
    skillLevelLabel: "💻 Python AI",
    timeframe: "month",
    timeframeLabel: "📅 This Month",
    useCase: "stems",
    useCaseLabel: "🔊 AI Voice & SFX Generator",
    trendingBadge: "🔊 Realistic SFX & Speech",
    installCommand: "pip install git+https://github.com/suno-ai/bark.git",
    description: "Bark is a transformer-based text-to-audio model created by Suno. It can generate highly realistic multilingual speech as well as background noise and sound effects.",
    summaryHindi: "Text se realistic human voiceovers, laughing, crying, aur background sound effects generate karne waala Suno ka AI model.",
    features: [
      "Generates highly expressive human speech with natural laughter & sighs",
      "Supports multi-speaker dialogues and foreign accent switching",
      "Generates music clips & environmental sound effects",
      "100% open-source for personal & commercial generation"
    ],
    requirements: "Nvidia GPU with 8GB+ VRAM, Python 3.9+.",
    githubUrl: "https://github.com/suno-ai/bark",
    recommendedProduct: {
      name: "2TB Sound Effects & Editing Bundle",
      price: "₹49",
      url: "/digital-store/2tb-video-editing-pack",
      badge: "🎧 Get 2TB Sound Effects & Assets"
    }
  },
  {
    id: "coqui-tts",
    name: "Coqui XTTS v2",
    repoOwner: "coqui-ai",
    repoName: "TTS",
    stars: "31.8k",
    numericStars: 31800,
    language: "Python",
    category: "audio-music",
    categoryLabel: "AI Text-to-Speech & Voice Clone",
    alternativeTo: "Free Alternative to Murf.ai & ElevenLabs",
    skillLevel: "gui",
    skillLevelLabel: "🖱️ WebUI / Python",
    timeframe: "today",
    timeframeLabel: "🔥 Trending Today",
    useCase: "stems",
    useCaseLabel: "🎤 3-Second Voice Cloner",
    trendingBadge: "🎤 3s Instant Voice Clone",
    installCommand: "pip install TTS",
    description: "Deep learning toolkit for Text-to-Speech synthesis with 3-second voice cloning in 17 languages.",
    summaryHindi: "Sirf 3-second ke voice sample se kisi bhi insaan ki voice clone karke text-to-speech speak karwane waala top tool.",
    features: [
      "Clone any voice with just a 3-second reference audio snippet",
      "Supports 17 languages including Hindi, English & Spanish",
      "Emotion & speed tone controls for natural voice narration",
      "Offline local processing with PyTorch backend"
    ],
    requirements: "Python 3.9+, Nvidia GPU recommended.",
    githubUrl: "https://github.com/coqui-ai/TTS",
    recommendedProduct: {
      name: "DaVinci Resolve 21 Studio Setup",
      price: "₹49",
      url: "/digital-store/davinci-resolve-21-studio",
      badge: "🎙️ Get DaVinci 21 Fairlight Audio"
    }
  },
  {
    id: "obs-studio",
    name: "OBS Studio",
    repoOwner: "obsproject",
    repoName: "obs-studio",
    stars: "59.1k",
    numericStars: 59100,
    language: "C++",
    category: "utilities",
    categoryLabel: "Screen Recording & Streaming",
    alternativeTo: "Free Alternative to Camtasia & Bandicam",
    skillLevel: "gui",
    skillLevelLabel: "🖱️ 1-Click GUI App",
    timeframe: "alltime",
    timeframeLabel: "👑 All-Time Top",
    useCase: "editor",
    useCaseLabel: "📹 4K Screen Recorder",
    trendingBadge: "👑 #1 Recording Standard",
    description: "Free and open source software for video recording and live streaming.",
    summaryHindi: "World ka #1 free 4K Screen Recorder aur Live Streaming software. YouTube Live, Gaming recording aur Studio recording ke liye best.",
    features: [
      "Real-time high-performance video & audio capturing and mixing",
      "Unlimited scenes with custom transitions",
      "Built-in audio mixer with noise gate & VST plugin support",
      "Direct streaming integration with YouTube & Twitch"
    ],
    requirements: "Windows 10/11, macOS 11+, or Linux.",
    githubUrl: "https://github.com/obsproject/obs-studio",
    websiteUrl: "https://obsproject.com",
    featured: true,
    recommendedProduct: {
      name: "All Video Editing Software Bundle",
      price: "₹49",
      url: "/digital-store/all-editing-software",
      badge: "⚡ Get All Video Editors Bundle"
    }
  },
  {
    id: "blender",
    name: "Blender 3D",
    repoOwner: "blender",
    repoName: "blender",
    stars: "34.5k",
    numericStars: 34500,
    language: "C++",
    category: "color-vfx",
    categoryLabel: "3D & VFX Pipeline",
    alternativeTo: "Free Alternative to Maya, Cinema4D & After Effects 3D",
    skillLevel: "gui",
    skillLevelLabel: "🖱️ 3D Studio App",
    timeframe: "alltime",
    timeframeLabel: "👑 All-Time Top",
    useCase: "vfx-3d",
    useCaseLabel: "🎨 3D & VFX Engine",
    trendingBadge: "🎬 Hollywood VFX Standard",
    description: "Official Mirror of Blender 3D creation suite - supports 3D pipeline, modeling, rigging, animation, and rendering.",
    summaryHindi: "Hollywood-grade 3D Modeling, VFX, Animation, aur Video Editing ka complete open-source software suite.",
    features: [
      "Complete 3D pipeline: Modeling, Sculpting, Rigging, 3D Animation & VFX",
      "Cycles Ray-trace render engine & EEVEE real-time viewport renderer",
      "Built-in Video Sequence Editor (VSE) for video editing",
      "Grease Pencil for 2D animation within 3D"
    ],
    requirements: "64-bit Quad-Core CPU, 8GB+ RAM, OpenGL 4.3 GPU.",
    githubUrl: "https://github.com/blender/blender",
    websiteUrl: "https://blender.org",
    featured: true,
    recommendedProduct: {
      name: "2TB Video Editing & VFX Pack",
      price: "₹49",
      url: "/digital-store/2tb-video-editing-pack",
      badge: "📦 Get 2TB VFX & Motion Assets Pack"
    }
  },
  {
    id: "ffmpeg",
    name: "FFmpeg Engine",
    repoOwner: "FFmpeg",
    repoName: "FFmpeg",
    stars: "45.2k",
    numericStars: 45200,
    language: "C",
    category: "utilities",
    categoryLabel: "Universal Media Processor",
    alternativeTo: "Engine behind HandBrake & Media Encoder",
    skillLevel: "cli",
    skillLevelLabel: "💻 Terminal Command",
    timeframe: "alltime",
    timeframeLabel: "👑 All-Time Top",
    useCase: "compressor",
    useCaseLabel: "📦 Universal Video Engine",
    trendingBadge: "⚙️ Core Video Engine",
    installCommand: "pip install ffmpeg-python",
    brewCommand: "brew install ffmpeg",
    wingetCommand: "winget install FFmpeg",
    description: "A complete, cross-platform solution to record, convert and stream audio and video.",
    summaryHindi: "Duniya ke lagbhag saare video editors aur converters ke picche kaam karne waala powerful core video engine.",
    features: [
      "Decode, encode, transcode, mux, demux, stream & filter audio/video",
      "Supports every format from MP4, MKV, ProRes to H.265/AV1",
      "Hardware accelerated video encoding via NVENC & QSV",
      "Used by YouTube, Netflix & VLC media player"
    ],
    requirements: "Cross-platform CLI binary for Windows, Mac & Linux.",
    githubUrl: "https://github.com/FFmpeg/FFmpeg",
    websiteUrl: "https://ffmpeg.org",
    recommendedProduct: {
      name: "DaVinci Resolve 21 Studio Setup",
      price: "₹49",
      url: "/digital-store/davinci-resolve-21-studio",
      badge: "🎬 Get DaVinci Resolve 21 Studio"
    }
  },
  {
    id: "handbrake",
    name: "HandBrake",
    repoOwner: "HandBrake",
    repoName: "HandBrake",
    stars: "16.8k",
    numericStars: 16800,
    language: "C",
    category: "utilities",
    categoryLabel: "Video Transcoder",
    alternativeTo: "Free Alternative to Adobe Media Encoder",
    skillLevel: "gui",
    skillLevelLabel: "🖱️ Easy Desktop App",
    timeframe: "month",
    timeframeLabel: "📅 This Month",
    useCase: "compressor",
    useCaseLabel: "📦 Video Compressor",
    trendingBadge: "📦 80% File Size Reduction",
    description: "HandBrake is an open-source video transcoder available for Linux, Mac, and Windows.",
    summaryHindi: "Badi video files ki size (MB/GB) bina quality kharab kiye 80% tak chhota (compress) karne waala sabse popular tool.",
    features: [
      "Convert video files from almost any format to MP4, MKV or WebM",
      "Hardware acceleration support (Intel QSV, Nvidia NVENC, AMD VCE)",
      "Batch encoding queue for converting multiple videos automatically",
      "Built-in presets for YouTube, Discord, iPhone & Web"
    ],
    requirements: "Windows, macOS, or Linux. Lightweight CPU & GPU requirements.",
    githubUrl: "https://github.com/HandBrake/HandBrake",
    websiteUrl: "https://handbrake.fr",
    featured: true,
    recommendedProduct: {
      name: "500+ Cinematic LUTs Pack",
      price: "₹49",
      url: "/digital-store/500-lut-pack",
      badge: "🎨 Get 500+ Professional LUTs"
    }
  },
  {
    id: "animatediff",
    name: "AnimateDiff",
    repoOwner: "guoyww",
    repoName: "AnimateDiff",
    stars: "11.2k",
    numericStars: 11200,
    language: "Python",
    category: "ai-video",
    categoryLabel: "AI Motion & Animation",
    alternativeTo: "Free Alternative to Pika Labs & Kaiber AI",
    skillLevel: "cli",
    skillLevelLabel: "💻 Python AI",
    timeframe: "week",
    timeframeLabel: "⚡ This Week",
    useCase: "animation",
    useCaseLabel: "🤖 AI Motion Reels",
    trendingBadge: "🔥 Viral Reels Motion",
    installCommand: "git clone https://github.com/guoyww/AnimateDiff.git",
    description: "Animate your personalized text-to-image diffusion models without specific tuning.",
    summaryHindi: "Still photos aur text prompts ko ultra-smooth AI Motion Video aur Reels me animate karne waala open-source algorithm.",
    features: [
      "Generate smooth 60fps AI animations from text prompts or reference images",
      "Plugs into any Stable Diffusion v1.5 or SDXL checkpoint model",
      "ControlNet integration for motion guidance & camera control",
      "Export directly to MP4, GIF or WebP animation"
    ],
    requirements: "Nvidia GPU with 8GB+ VRAM, Python 3.10+, PyTorch.",
    githubUrl: "https://github.com/guoyww/AnimateDiff",
    recommendedProduct: {
      name: "Toko 3D Motion Elements Pack",
      price: "₹49",
      url: "/digital-store/toko-elements-pack",
      badge: "⚡ Get Toko Motion Graphics Pack"
    }
  },
  {
    id: "rvc-webui",
    name: "Retrieval-based Voice Conversion (RVC)",
    repoOwner: "RVC-Project",
    repoName: "Retrieval-based-Voice-Conversion-WebUI",
    stars: "22.6k",
    numericStars: 22600,
    language: "Python",
    category: "audio-music",
    categoryLabel: "AI Voice Cloning",
    alternativeTo: "Free Alternative to ElevenLabs & Voice.ai",
    skillLevel: "gui",
    skillLevelLabel: "🖱️ WebUI Browser App",
    timeframe: "today",
    timeframeLabel: "🔥 Trending Today",
    useCase: "stems",
    useCaseLabel: "🎤 AI Voice Cloning",
    trendingBadge: "🎤 Voice Cloning Champion",
    installCommand: "git clone https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI.git",
    description: "An easy-to-use Voice Conversion framework based on VITS for AI Voice cloning and song cover creation.",
    summaryHindi: "Kisi bhi singer ya person ki voice clone karke AI songs aur voiceovers generate karne waala sabse top voice tool.",
    features: [
      "Train custom voice models with as little as 10 minutes of clean audio",
      "Real-time voice pitch changing and song cover conversion",
      "Built-in vocal separation and noise reduction preprocessing",
      "Easy-to-use WebUI interface running in your web browser"
    ],
    requirements: "Nvidia GPU (6GB+ VRAM recommended), Python 3.10+.",
    githubUrl: "https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI",
    recommendedProduct: {
      name: "CapCut Pro Mac & PC Bundle",
      price: "₹49",
      url: "/digital-store/capcut-pro-mac",
      badge: "🎙️ Get CapCut Pro Mac Setup"
    }
  },
  {
    id: "demucs",
    name: "Demucs (Meta AI)",
    repoOwner: "facebookresearch",
    repoName: "demucs",
    stars: "13.9k",
    numericStars: 13900,
    language: "Python",
    category: "audio-music",
    categoryLabel: "Vocal & Music Stem Separator",
    alternativeTo: "Free Alternative to Lalal.ai & Moises AI",
    skillLevel: "cli",
    skillLevelLabel: "💻 Python Command",
    timeframe: "quarter",
    timeframeLabel: "📆 Past 3 Months",
    useCase: "stems",
    useCaseLabel: "🎶 Vocal & BGM Separator",
    trendingBadge: "🎶 Meta AI Engine",
    installCommand: "pip install -U demucs",
    description: "Code for the Music Source Separation model Demucs from Meta AI. Separates Drums, Bass, Vocals and Instruments.",
    summaryHindi: "Kisi bhi gaane se Background Music, Vocals, Drums, aur Bass ko bilkul alag-alag (stems) karne ka Meta ka official AI tool.",
    features: [
      "4-stem & 6-stem AI separation: Vocals, Drums, Bass, Guitar, Piano & Other",
      "State-of-the-art Hybrid Spectrogram / Time Domain Transformer architecture",
      "Process any MP3, WAV, FLAC or AAC audio file",
      "Outputs clean studio-quality audio stems"
    ],
    requirements: "Python 3.8+, PyTorch, ffmpeg. GPU recommended.",
    githubUrl: "https://github.com/facebookresearch/demucs",
    recommendedProduct: {
      name: "All Editing Software Suite",
      price: "₹49",
      url: "/digital-store/all-editing-software",
      badge: "🎵 Get Complete Audio & Video Suite"
    }
  },
  {
    id: "audacity",
    name: "Audacity Audio Editor",
    repoOwner: "audacity",
    repoName: "audacity",
    stars: "12.8k",
    numericStars: 12800,
    language: "C++",
    category: "audio-music",
    categoryLabel: "Multi-track Audio Editor",
    alternativeTo: "Free Alternative to Adobe Audition",
    skillLevel: "gui",
    skillLevelLabel: "🖱️ 1-Click Desktop App",
    timeframe: "alltime",
    timeframeLabel: "👑 All-Time Top",
    useCase: "stems",
    useCaseLabel: "🎙️ Audio Cleaner",
    trendingBadge: "🎙️ #1 Free Audio Editor",
    description: "Audacity is an easy-to-use, multi-track audio editor and recorder for Windows, macOS, Linux.",
    summaryHindi: "Voice recording, background noise removal aur audio mastering ke liye world-famous free desktop app.",
    features: [
      "Record live audio through a microphone or mixer",
      "Noise removal filter to clean hums, room noise & background hiss",
      "Supports VST3, AU & LADSPA plugins for real-time audio effects",
      "Multi-track audio timeline editing with spectral frequency view"
    ],
    requirements: "Windows, macOS, or Linux.",
    githubUrl: "https://github.com/audacity/audacity",
    websiteUrl: "https://audacityteam.org",
    recommendedProduct: {
      name: "DaVinci Resolve 21 Studio Setup",
      price: "₹49",
      url: "/digital-store/davinci-resolve-21-studio",
      badge: "🎧 Need DaVinci 21 Fairlight Audio?"
    }
  },
  {
    id: "upscayl",
    name: "Upscayl (AI Image Upscaler)",
    repoOwner: "upscayl",
    repoName: "upscayl",
    stars: "31.4k",
    numericStars: 31400,
    language: "TypeScript",
    category: "utilities",
    categoryLabel: "AI Resolution Enhancer",
    alternativeTo: "Free Alternative to Topaz Gigapixel AI",
    skillLevel: "gui",
    skillLevelLabel: "🖱️ 1-Click GUI App",
    timeframe: "month",
    timeframeLabel: "📅 This Month",
    useCase: "compressor",
    useCaseLabel: "📸 AI Image Upscaler",
    trendingBadge: "📸 4K/8K Upscaler",
    description: "Free and Open Source AI Image Upscaler for Linux, MacOS, and Windows.",
    summaryHindi: "Low resolution blurred photos ko AI se 4K/8K ultra-sharp HD photo me convert karne waala free app.",
    features: [
      "Upscale images by 4x, 8x, or 16x using AI super-resolution models",
      "Runs completely offline on your computer without cloud upload",
      "Batch upscale multiple images at once",
      "Clean visual GUI with split-screen before/after comparison"
    ],
    requirements: "Vulkan-compatible graphics card (Nvidia, AMD, or Apple Silicon).",
    githubUrl: "https://github.com/upscayl/upscayl",
    websiteUrl: "https://upscayl.org",
    recommendedProduct: {
      name: "500+ Cinematic LUTs & Presets",
      price: "₹49",
      url: "/digital-store/500-lut-pack",
      badge: "🎨 Get 500+ HD Presets Pack"
    }
  },
  {
    id: "mpv",
    name: "mpv Video Player Engine",
    repoOwner: "mpv-player",
    repoName: "mpv",
    stars: "24.5k",
    numericStars: 24500,
    language: "C",
    category: "utilities",
    categoryLabel: "Pro Video Player Engine",
    alternativeTo: "Free Alternative to QuickTime & PotPlayer",
    skillLevel: "gui",
    skillLevelLabel: "🖱️ Minimal 4K Player",
    timeframe: "alltime",
    timeframeLabel: "👑 All-Time Top",
    useCase: "compressor",
    useCaseLabel: "🎥 4K Video Player Engine",
    trendingBadge: "⚡ Ultra Lightweight 4K Player",
    description: "Command line media player with GPU video decoding, high quality video output and customizable scripting.",
    summaryHindi: "Smooth 4K HDR playback ke liye duniya ka sabse fast, zero-lag open source video player engine.",
    features: [
      "GPU video decoding with high quality color shaders & LUT support",
      "Supports 4K 60fps HDR video playback with zero frame drops",
      "Lua scripting for custom video tools & hotkey shortcuts",
      "Cross-platform support for Mac, Windows, Linux & Android"
    ],
    requirements: "Windows, macOS, or Linux. Ultra lightweight CPU footprint.",
    githubUrl: "https://github.com/mpv-player/mpv",
    websiteUrl: "https://mpv.io",
    recommendedProduct: {
      name: "CapCut Pro PC Setup",
      price: "₹49",
      url: "/digital-store/capcut-pro-pc",
      badge: "✂️ Get CapCut Pro PC Setup"
    }
  },
  {
    id: "subtitle-edit",
    name: "Subtitle Edit",
    repoOwner: "SubtitleEdit",
    repoName: "subtitleedit",
    stars: "5.2k",
    numericStars: 5200,
    language: "C#",
    category: "utilities",
    categoryLabel: "Subtitle Studio & Converter",
    alternativeTo: "Free Alternative to Aegisub & Subly",
    skillLevel: "gui",
    skillLevelLabel: "🖱️ Subtitle Editor App",
    timeframe: "month",
    timeframeLabel: "📅 This Month",
    useCase: "subtitles",
    useCaseLabel: "🗣️ Subtitle Editor & Sync",
    trendingBadge: "✍️ Subtitle Master Studio",
    description: "Subtitle Edit is a free & open source editor for video subtitles - sync, adjust, translate, and convert SRT/VTT.",
    summaryHindi: "Subtitles (SRT, ASS, VTT) create, sync aur automatic translate karne ka sabse powerful open-source desktop software.",
    features: [
      "Integrated Whisper AI for automatic 1-click speech-to-text subtitling",
      "Audio visualizer spectrum for precise timestamp sync",
      "Convert between 300+ subtitle formats (SRT, VTT, ASS, TTML)",
      "Built-in Google Translate & DeepL automatic translation"
    ],
    requirements: "Windows, macOS (via Mono), or Linux.",
    githubUrl: "https://github.com/SubtitleEdit/subtitleedit",
    recommendedProduct: {
      name: "All Editing Software Suite",
      price: "₹49",
      url: "/digital-store/all-editing-software",
      badge: "🎬 Get All Video Editors & Subtitle Suite"
    }
  },
  {
    id: "mkvtoolnix",
    name: "MKVToolNix",
    repoOwner: "mbunkus",
    repoName: "mkvtoolnix",
    stars: "3.4k",
    numericStars: 3400,
    language: "C++",
    category: "utilities",
    categoryLabel: "MKV Stream Multiplexer",
    alternativeTo: "Free Alternative to MP4Box & Video Remuxers",
    skillLevel: "gui",
    skillLevelLabel: "🖱️ Stream Multiplexer App",
    timeframe: "quarter",
    timeframeLabel: "📆 Past 3 Months",
    useCase: "compressor",
    useCaseLabel: "📦 MKV Stream Remuxer",
    trendingBadge: "📦 Remux Videos in 1s",
    description: "MKVToolNix is a set of tools to create, alter and inspect Matroska (MKV) files.",
    summaryHindi: "Video files me Audio tracks, Subtitles aur Chapters ko बिना re-render kiye 1-second me add ya replace karne waala app.",
    features: [
      "Remux video/audio streams into MKV containers in 1-second without re-encoding",
      "Add, remove or extract multiple audio tracks & subtitles",
      "Split large video files into parts or merge multiple MKV clips",
      "Edit video metadata, chapter titles & default language tags"
    ],
    requirements: "Windows, macOS, or Linux.",
    githubUrl: "https://github.com/mbunkus/mkvtoolnix",
    websiteUrl: "https://mkvtoolnix.download",
    recommendedProduct: {
      name: "iPhone Movie App Setup",
      price: "₹49",
      url: "/digital-store/movie-app-iphone",
      badge: "📱 Get iPhone Movie App Setup"
    }
  },
  {
    id: "kdenlive",
    name: "Kdenlive Video Editor",
    repoOwner: "KDE",
    repoName: "kdenlive",
    stars: "4.9k",
    numericStars: 4900,
    language: "C++",
    category: "video-editor",
    categoryLabel: "Non-Linear Video Editor",
    alternativeTo: "Free Alternative to Vegas Pro & Premiere Pro",
    skillLevel: "gui",
    skillLevelLabel: "🖱️ Professional NLE",
    timeframe: "alltime",
    timeframeLabel: "👑 All-Time Top",
    useCase: "editor",
    useCaseLabel: "🎬 4K Pro Video NLE",
    trendingBadge: "🐧 Pro Open NLE",
    description: "Kdenlive is a non-linear video editor built on MLT Framework with support for multi-track editing.",
    summaryHindi: "Multi-track timeline, color grading aur titling ke saath Linux, Mac aur Windows par chalne waala powerful editor.",
    features: [
      "Multi-track video editing with unlimited video and audio tracks",
      "Automatic audio alignment & waveform display",
      "Built-in title creator & subtitling generator",
      "Keyframeable effects & color scope monitors"
    ],
    requirements: "Windows, macOS, or Linux. 8GB RAM recommended.",
    githubUrl: "https://github.com/KDE/kdenlive",
    websiteUrl: "https://kdenlive.org",
    recommendedProduct: {
      name: "CapCut Pro PC Setup",
      price: "₹49",
      url: "/digital-store/capcut-pro-pc",
      badge: "✂️ Get CapCut Pro PC Setup"
    }
  },
  {
    id: "shotcut",
    name: "Shotcut Video Editor",
    repoOwner: "mltframework",
    repoName: "shotcut",
    stars: "12.4k",
    numericStars: 12400,
    language: "C++",
    category: "video-editor",
    categoryLabel: "Cross-Platform Video Editor",
    alternativeTo: "Free Alternative to Premiere Pro & Filmora",
    skillLevel: "gui",
    skillLevelLabel: "🖱️ 1-Click GUI Editor",
    timeframe: "alltime",
    timeframeLabel: "👑 All-Time Top",
    useCase: "editor",
    useCaseLabel: "🎬 4K Video Editor",
    trendingBadge: "💻 Low-End PC Hero",
    description: "Shotcut is a free, open source, cross-platform video editor supporting 4K multi-track editing.",
    summaryHindi: "Low-end PC aur Laptop par 4K multi-track video editing karne waala 100% free open-source software.",
    features: [
      "Native timeline editing with no import required",
      "Supports 4K resolution, 60fps & hundreds of audio/video codecs",
      "Hardware encoding support (Nvidia NVENC, AMD VCE, Intel QSV)",
      "Multi-track timeline with color grading filters & scopes"
    ],
    requirements: "Windows 10/11, macOS 10.14+, or Linux. 4GB RAM.",
    githubUrl: "https://github.com/mltframework/shotcut",
    websiteUrl: "https://shotcut.org",
    recommendedProduct: {
      name: "All Editing Software Suite",
      price: "₹49",
      url: "/digital-store/all-editing-software",
      badge: "🎬 Get All Video Editors Bundle"
    }
  },
  {
    id: "lossless-cut",
    name: "LosslessCut",
    repoOwner: "mifi",
    repoName: "lossless-cut",
    stars: "25.1k",
    numericStars: 25100,
    language: "TypeScript",
    category: "utilities",
    categoryLabel: "Fast Video Trimmer",
    alternativeTo: "Free Alternative to QuickTime & MP4 Trimmers",
    skillLevel: "gui",
    skillLevelLabel: "🖱️ Ultra Fast App",
    timeframe: "today",
    timeframeLabel: "🔥 Trending Today",
    useCase: "compressor",
    useCaseLabel: "📦 Fast Video Cutter",
    trendingBadge: "⚡ Instant 0s Cut",
    description: "The Swiss army knife of lossless video/audio editing. Cut & trim videos instantly without re-encoding.",
    summaryHindi: "Bina kisi re-render ya quality loss ke videos ko 1-second me super fast cut aur trim karne waala lightweight app.",
    features: [
      "Lossless cutting & trimming of video/audio files with 0 rendering time",
      "Lossless merging/concatenation of video files from the same camera",
      "Extract audio tracks, subtitles, or attachments without re-encoding",
      "Take full-resolution JPEG/PNG snapshot frames from video"
    ],
    requirements: "Windows, macOS, or Linux desktop.",
    githubUrl: "https://github.com/mifi/lossless-cut",
    recommendedProduct: {
      name: "iPhone Movie App (1-Click Setup)",
      price: "₹49",
      url: "/digital-store/movie-app-iphone",
      badge: "📱 Get iPhone Movie App Setup"
    }
  },
  {
    id: "motion-canvas",
    name: "Motion Canvas",
    repoOwner: "motion-canvas",
    repoName: "motion-canvas",
    stars: "14.7k",
    numericStars: 14700,
    language: "TypeScript",
    category: "video-editor",
    categoryLabel: "Code-Driven Motion Graphics",
    alternativeTo: "Free Alternative to After Effects Expressions",
    skillLevel: "cli",
    skillLevelLabel: "💻 Code Motion Engine",
    timeframe: "month",
    timeframeLabel: "📅 This Month",
    useCase: "animation",
    useCaseLabel: "🎨 Code Motion Graphics",
    trendingBadge: "🎨 60fps Code Animation",
    installCommand: "npm create motion-canvas@latest",
    description: "A TypeScript library and editor for creating programmatic motion graphics videos.",
    summaryHindi: "Code (TypeScript) likh kar 60fps cinematic Motion Graphics, diagrams aur animations banane waala modern editor.",
    features: [
      "Programmatic 60fps motion graphics using TypeScript",
      "Real-time visual editor with interactive timeline & preview",
      "Exact frame-by-frame animation control",
      "Export to WebM, MP4, or PNG image sequences"
    ],
    requirements: "Node.js 18+ installed on your computer.",
    githubUrl: "https://github.com/motion-canvas/motion-canvas",
    websiteUrl: "https://motioncanvas.io",
    recommendedProduct: {
      name: "Toko 3D Motion Elements Pack",
      price: "₹49",
      url: "/digital-store/toko-elements-pack",
      badge: "⚡ Get Toko 3D Motion Pack"
    }
  },
  {
    id: "opencolorio",
    name: "OpenColorIO",
    repoOwner: "AcademySoftwareFoundation",
    repoName: "OpenColorIO",
    stars: "1.8k",
    numericStars: 1800,
    language: "C++",
    category: "color-vfx",
    categoryLabel: "Color Management Engine",
    alternativeTo: "Standard Color Science in DaVinci & Nuke",
    skillLevel: "cli",
    skillLevelLabel: "💻 Color Engine",
    timeframe: "quarter",
    timeframeLabel: "📆 Past 3 Months",
    useCase: "vfx-3d",
    useCaseLabel: "🎨 ACES Color Management",
    trendingBadge: "🌈 ACES Standard",
    description: "A complete color management solution focused on motion picture production with emphasis on visual effects and computer graphics.",
    summaryHindi: "Hollywood Color Grading aur ACES color workflows me standardized skin tones aur color transform manage karne ka industry standard engine.",
    features: [
      "Complete ACES (Academy Color Encoding System) color management",
      "3D LUT transformation & display color space calibration",
      "Integrated into DaVinci Resolve, Nuke, Blender & Photoshop",
      "Consistent color representation across multiple VFX departments"
    ],
    requirements: "Supported as built-in library in major NLEs and VFX software.",
    githubUrl: "https://github.com/AcademySoftwareFoundation/OpenColorIO",
    websiteUrl: "https://opencolorio.org",
    recommendedProduct: {
      name: "500+ Cinematic LUTs Pack",
      price: "₹49",
      url: "/digital-store/500-lut-pack",
      badge: "🎨 Get 500+ Rec.709 LUTs Pack"
    }
  },
  {
    id: "natron",
    name: "Natron VFX",
    repoOwner: "NatronDev-Team",
    repoName: "Natron",
    stars: "4.3k",
    numericStars: 4300,
    language: "C++",
    category: "color-vfx",
    categoryLabel: "Node-Based Compositing",
    alternativeTo: "Free Alternative to Nuke & After Effects VFX",
    skillLevel: "gui",
    skillLevelLabel: "🖱️ Node Compositor App",
    timeframe: "alltime",
    timeframeLabel: "👑 All-Time Top",
    useCase: "vfx-3d",
    useCaseLabel: "🎨 Node VFX Compositor",
    trendingBadge: "💥 Free Nuke Alternative",
    description: "Open-source, cross-platform node-based compositing software for visual effects (VFX) and motion graphics.",
    summaryHindi: "Nuke jaisa professional node-based VFX compositing software — Green screen chroma keying, tracking aur keying ke liye free.",
    features: [
      "Node-based compositing interface identical to Foundry Nuke",
      "OpenFX plugin support (Shadertoy, Tuttle, OFX plugins)",
      "2D & Planar tracking, Chroma Keying & Rotoscoping tools",
      "Multi-threaded rendering CPU pipeline"
    ],
    requirements: "Windows, macOS, or Linux. 8GB+ RAM recommended.",
    githubUrl: "https://github.com/NatronDev-Team/Natron",
    websiteUrl: "https://natrongithub.github.io",
    recommendedProduct: {
      name: "2TB Video Editing & VFX Pack",
      price: "₹49",
      url: "/digital-store/2tb-video-editing-pack",
      badge: "📦 Get 2TB VFX & Sound Effects Pack"
    }
  },
  {
    id: "openshot",
    name: "OpenShot Video Editor",
    repoOwner: "OpenShot",
    repoName: "openshot-qt",
    stars: "14.2k",
    numericStars: 14200,
    language: "Python",
    category: "video-editor",
    categoryLabel: "Beginner Video Editor",
    alternativeTo: "Free Alternative to iMovie & CapCut Desktop",
    skillLevel: "gui",
    skillLevelLabel: "🖱️ Easy Drag-Drop App",
    timeframe: "month",
    timeframeLabel: "📅 This Month",
    useCase: "editor",
    useCaseLabel: "🎬 Simple Video Editor",
    trendingBadge: "👶 Beginner Friendly",
    description: "OpenShot Video Editor is an easy-to-use, quick to learn, and surprisingly powerful video editor.",
    summaryHindi: "Beginners ke liye bilkul simple drag-and-drop video editor, jisme title animations aur transitions built-in aate hain.",
    features: [
      "Simple drag and drop video, audio, and image timeline",
      "3D Animated Titles & Effects powered by Blender engine",
      "Unlimited tracks & layers for video and audio clips",
      "Speed ramping & slow motion time effects"
    ],
    requirements: "64-bit OS (Windows, macOS, Linux), 4GB RAM.",
    githubUrl: "https://github.com/OpenShot/openshot-qt",
    websiteUrl: "https://openshot.org",
    recommendedProduct: {
      name: "CapCut Pro PC Setup",
      price: "₹49",
      url: "/digital-store/capcut-pro-pc",
      badge: "✂️ Get CapCut Pro PC Setup"
    }
  },
  {
    id: "olive",
    name: "Olive Video Editor 0.2",
    repoOwner: "olive-editor",
    repoName: "olive",
    stars: "7.9k",
    numericStars: 7900,
    language: "C++",
    category: "video-editor",
    categoryLabel: "Node-Based NLE",
    alternativeTo: "Free Alternative to DaVinci Resolve & Premiere Pro",
    skillLevel: "gui",
    skillLevelLabel: "🖱️ Professional NLE",
    timeframe: "quarter",
    timeframeLabel: "📆 Past 3 Months",
    useCase: "editor",
    useCaseLabel: "🎬 Node NLE Editor",
    trendingBadge: "🚀 Next-Gen Open NLE",
    description: "Free non-linear video editor providing high end node-based color management and composite workflows.",
    summaryHindi: "Premiere Pro aur DaVinci Resolve ka open-source rival, jo node-based video pipeline aur color grading support karta hai.",
    features: [
      "Node-based video editing pipeline inside a classic NLE timeline",
      "Color management powered by OpenColorIO (OCIO)",
      "High-speed disk cache for fluid playback",
      "Audio mixing & keyframe animation capabilities"
    ],
    requirements: "Windows, macOS, or Linux with OpenGL 3.2+ GPU.",
    githubUrl: "https://github.com/olive-editor/olive",
    websiteUrl: "https://olivevideoeditor.org",
    recommendedProduct: {
      name: "DaVinci Resolve 21 Studio Setup",
      price: "₹49",
      url: "/digital-store/davinci-resolve-21-studio",
      badge: "🎬 Get DaVinci Resolve 21 Studio Setup"
    }
  }
];

export const repoTimeframes = [
  { id: 'month', label: '📅 This Month' },
  { id: 'today', label: '🔥 Today' },
  { id: 'week', label: '⚡ This Week' },
  { id: 'quarter', label: '📆 Past 3 Months' },
  { id: 'alltime', label: '👑 All-Time Top' }
];

export const repoUseCases = [
  { id: 'all-use', label: '🎯 All Solved Problems' },
  { id: 'downloader', label: '🎥 4K Video Downloader' },
  { id: 'subtitles', label: '🗣️ Auto Subtitles (SRT)' },
  { id: 'stems', label: '🎶 Vocal & BGM Separator' },
  { id: 'compressor', label: '📦 Video Compressor' },
  { id: 'animation', label: '🤖 AI Motion & Reels' },
  { id: 'editor', label: '🎬 Free 4K NLE Editors' },
  { id: 'vfx-3d', label: '🎨 3D & VFX Engine' }
];

export const repoCategories = [
  { id: 'all-cat', label: '⚡ All Categories' },
  { id: 'skill-gui', label: '🖱️ Easy One-Click Apps' },
  { id: 'skill-cli', label: '💻 Python / Terminal Scripts' },
  { id: 'ai-video', label: '🤖 AI Video & Motion' },
  { id: 'video-editor', label: '🎬 Video Editors' },
  { id: 'audio-music', label: '🎵 Audio & Voice' },
  { id: 'color-vfx', label: '🎨 Color & VFX' },
  { id: 'utilities', label: '⚙️ Media Utilities' }
];
