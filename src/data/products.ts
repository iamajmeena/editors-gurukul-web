export interface DigitalProduct {
  id: string;
  slug: string;
  title: string;
  category: string;
  badge: string;
  price: string;
  numericPrice: number;
  originalPrice: string;
  discount: string;
  buyers: string;
  rating: string;
  isFree: boolean;
  images: string[];
  shortDesc: string;
  fullDesc: string;
  features: string[];
  includedItems: string[];
  razorpayLink: string;
}

// Sorted High to Low (Most Expensive First, Free/Cheap Last)
export const PRODUCTS: DigitalProduct[] = [
  {
    id: "500-lut-pack",
    slug: "500-lut-pack",
    title: "500+ Cinematic LUTs Mega Collection",
    category: "Color Presets",
    badge: "⭐ MUST HAVE",
    price: "₹101",
    numericPrice: 101,
    originalPrice: "₹2,999",
    discount: "96% OFF",
    buyers: "1,240+ Creators",
    rating: "5.0 ★★★★★",
    isFree: false,
    images: [
      "/assets/500_lut_pack_cover.jpg"
    ],
    shortDesc: "500+ Premium .CUBE LUTs for Sony S-Log3, Canon C-Log, Fuji & Rec.709 One-Click Conversion.",
    fullDesc: "Transform flat raw log footage into rich cinematic Hollywood colors in 1 click! Includes 500+ premium .CUBE color grading LUTs specially tuned for Sony S-Log3, Canon C-Log, Panasonic V-Log, Fujifilm F-Log, and iPhone ProRes Log.",
    features: [
      "500+ .CUBE Color Grading Presets for S-Log3, C-Log & Rec.709",
      "Teal & Orange, Vintage Film, Commercial & Wedding Look Packs",
      "Compatible with DaVinci Resolve, Premiere Pro, FCPX & CapCut",
      "Includes Video Installation Tutorial & CST Node Tree Guide"
    ],
    includedItems: [
      "500+ .CUBE File Assets Organized in 12 Color Categories",
      "Rec.709 Conversion Matrix Guide PDF",
      "DaVinci Resolve Node Tree PowerGrade Presets"
    ],
    razorpayLink: "https://rzp.io/rzp/lBNeGuno"
  },
  {
    id: "2tb-editing-pack",
    slug: "2tb-video-editing-pack",
    title: "2 TB Ultimate Video Editing Assets Pack",
    category: "VFX & SFX Assets",
    badge: "⚡ MEGA ASSETS",
    price: "₹99",
    numericPrice: 99,
    originalPrice: "₹4,999",
    discount: "98% OFF",
    buyers: "839+ Editors",
    rating: "4.9 ★★★★★",
    isFree: false,
    images: [
      "/assets/2tb_video_editing_pack_cover.jpg"
    ],
    shortDesc: "2,000+ GB High-Speed Google Drive Access — 10,000+ SFX, 4K Light Leaks, Film Grain & VFX Assets.",
    fullDesc: "Never search for editing assets again! Get 2,000 GB of high-speed Google Drive download access packed with 10,000+ cinematic sound effects (SFX), 4K light leaks, film grain overlays, seamless motion transitions, and 3D VFX assets.",
    features: [
      "2,000+ GB High-Speed Direct Google Drive Download Access",
      "10,000+ Sound Effects (SFX), Whooshes, Risers & Cinematic Foleys",
      "4K Light Leaks, 35mm Film Grain Overlays & Motion Transitions",
      "Royalty-Free Commercial License for YouTube & Client Projects"
    ],
    includedItems: [
      "Organized Google Drive Folders (SFX, VFX, Overlays, Transitions)",
      "Commercial Royalty-Free License Certificate",
      "Lifetime Access Guarantee"
    ],
    razorpayLink: "https://rzp.io/rzp/BLCoFqe"
  },
  {
    id: "all-editing-software",
    slug: "all-editing-software",
    title: "All Video Editing Software Collection",
    category: "Ultimate Suite",
    badge: "👑 BEST VALUE",
    price: "₹99",
    numericPrice: 99,
    originalPrice: "₹9,999",
    discount: "99% OFF",
    buyers: "786+ Editors",
    rating: "5.0 ★★★★★",
    isFree: false,
    images: [
      "/assets/all_editing_software_bundle_cover.jpg"
    ],
    shortDesc: "Complete Pro Suite — DaVinci Resolve 21 Studio, CapCut Pro PC/Mac, Adobe Creative Cloud & VFX Plugins.",
    fullDesc: "Get complete pre-activated pro editing software bundle for Windows & Mac! Includes DaVinci Resolve 21 Studio Neural Engine AI, CapCut Pro PC & Mac with auto-captions, Adobe Premiere Pro, After Effects, and Topaz Video AI.",
    features: [
      "DaVinci Resolve 21 Studio + CapCut Pro PC & Mac Full Lifetime Access",
      "Adobe Premiere Pro, After Effects, Photoshop & Audition Pre-activated",
      "Topaz Video AI 4K Upscaler & Sapphire VFX Plugins Suite",
      "1-Click Installation Setup Guides & Dedicated WhatsApp Support"
    ],
    includedItems: [
      "Windows & Mac Installer Packages with Activation Tutorials",
      "10,000+ Motion Graphics & Transition Templates",
      "Direct Drive Download Links & Lifetime Updates"
    ],
    razorpayLink: "https://rzp.io/rzp/k2K7gOq5"
  },
  {
    id: "toko-elements-pack",
    slug: "toko-elements-pack",
    title: "TOKO Motion Elements Pack (2,200+ Motion Graphics)",
    category: "After Effects & Premiere",
    badge: "🔥 HOT CREATOR PACK",
    price: "₹49",
    numericPrice: 49,
    originalPrice: "₹3,499",
    discount: "98% OFF",
    buyers: "612+ Editors",
    rating: "4.9 ★★★★★",
    isFree: false,
    images: [
      "/assets/editing_pack_ultra_premium_cover_1785610038113.jpg"
    ],
    shortDesc: "2,200+ Motion Graphics Elements, Lower Thirds, Transitions & Sound Effects for Premiere Pro & AE.",
    fullDesc: "The ultimate motion graphics library used by top YouTube creators & editors! Includes 2,200+ drag-and-drop elements for Premiere Pro & After Effects: title animations, lower thirds, callouts, background loops, sound effects, and seamless transitions.",
    features: [
      "2,200+ Drag-and-Drop Motion Graphics & Title Animations",
      "Premiere Pro MOGRTs & After Effects Project Files",
      "Clean Lower Thirds, Callouts, Kinetic Typography & Shapes",
      "Includes Sound Effects (SFX) Matched to Every Animation"
    ],
    includedItems: [
      "TOKO Graphic Pack Extension / MOGRT Files",
      "Video Tutorial Guide on Drag-and-Drop Usage",
      "Commercial Royalty-Free License"
    ],
    razorpayLink: "https://rzp.io/rzp/k2K7gOq5"
  },
  {
    id: "capcut-pro-pc",
    slug: "capcut-pro-pc",
    title: "CapCut Pro PC Full Version (Windows)",
    category: "Windows Software",
    badge: "⚡ TOP SELLER",
    price: "₹49",
    numericPrice: 49,
    originalPrice: "₹1,499",
    discount: "96% OFF",
    buyers: "942+ Editors",
    rating: "4.9 ★★★★★",
    isFree: false,
    images: [
      "/assets/capcut_pro_pc_cover.jpg"
    ],
    shortDesc: "CapCut Pro for Windows PC — Unlimited AI Captions, 4K Export, Pro Effects & Transitions.",
    fullDesc: "Unlock full CapCut Pro features on Windows PC! Get unlimited access to Pro AI Auto-Captions, 4K 60fps export without watermark, Pro transitions, AI background remover, and VIP visual effects without monthly fees.",
    features: [
      "CapCut Pro Full Version for Windows 10 & 11 PC",
      "Unlimited AI Auto-Captions, Pro Transitions & Effects",
      "Zero Watermark 4K 60fps Ultra HD Export Guarantee",
      "Includes 1-Click Setup Guide & Lifetime Access"
    ],
    includedItems: [
      "CapCut Pro PC Windows Offline Setup Package",
      "1-Click Installation Guide Video",
      "Bonus 500+ Viral Reels Sound Effects"
    ],
    razorpayLink: "https://rzp.io/rzp/5u2t8Xm"
  },
  {
    id: "capcut-pro-mac",
    slug: "capcut-pro-mac",
    title: "CapCut Pro macOS Full Version (Apple Silicon & Intel)",
    category: "macOS Software",
    badge: "🍏 MAC EXCLUSIVE",
    price: "₹49",
    numericPrice: 49,
    originalPrice: "₹1,499",
    discount: "96% OFF",
    buyers: "518+ Editors",
    rating: "5.0 ★★★★★",
    isFree: false,
    images: [
      "/assets/capcut_pro_mac_cover.jpg"
    ],
    shortDesc: "CapCut Pro for macOS — Optimized for M1/M2/M3/M4 Apple Silicon & Intel Macs with AI Auto Captions.",
    fullDesc: "Complete CapCut Pro version for macOS optimized for M1, M2, M3, M4 Apple Silicon and Intel Macs. Enjoy hardware-accelerated 4K rendering, pro motion tracking, AI noise reduction, and pro voiceovers without monthly subscription.",
    features: [
      "CapCut Pro for macOS (M1/M2/M3/M4 & Intel Supported)",
      "Hardware Accelerated 4K Rendering & Pro Color Grading",
      "Auto Captions & AI Text-to-Speech",
      "Zero Watermark 4K 60fps Export Guarantee"
    ],
    includedItems: [
      "CapCut Pro macOS Installer Package",
      "Apple Silicon Performance Optimization Guide",
      "Bonus 50+ Trending Shorts Transition Presets"
    ],
    razorpayLink: "https://rzp.io/rzp/ARslco46"
  },
  {
    id: "movie-app-iphone",
    slug: "movie-app-iphone",
    title: "iPhone Free Movie & Music Streaming App",
    category: "iOS Streaming App",
    badge: "📱 POPULAR",
    price: "₹49",
    numericPrice: 49,
    originalPrice: "₹499",
    discount: "90% OFF",
    buyers: "311+ Users",
    rating: "4.9 ★★★★★",
    isFree: false,
    images: [
      "/assets/movie_app_iphone_cover.jpg"
    ],
    shortDesc: "Direct App Store Links & Setup Method for 100% Legal Free Movie & Music Streaming App on iPhone iOS.",
    fullDesc: "Complete verified setup for streaming 4K HD movies, web series, and music on iPhone with 100% legal App Store app. Includes step-by-step 1-click activation, AirPlay casting, and direct download links.",
    features: [
      "Direct Verified App Store Download Links",
      "Step-by-step Setup & AirPlay Smart TV Casting Method",
      "100% Legal & Safe (No Jailbreak or Profile Installation Required)",
      "Instant 1-Click Access & Fast 4K Playback"
    ],
    includedItems: [
      "iPhone Free Movie App Setup Method",
      "iPhone Free Music App Setup Method",
      "1-Click App Store Activation Links"
    ],
    razorpayLink: "https://www.ajaykmeena.com/products/Movie-app-iphone-6a6d72b59eb42c64b6694cf5?dgps_s=pbl&dgps_u=c&dgps_uid=634e3400e4b0fa8faaf414aa&dgps_t=cp_m"
  },

  {
    id: "davinci-resolve-21-studio",
    slug: "davinci-resolve-21-studio",
    title: "DaVinci Resolve 21 Studio",
    category: "Software & Guide",
    badge: "🎁 FREE DOWNLOAD",
    price: "FREE",
    numericPrice: 0,
    originalPrice: "₹24,999",
    discount: "100% FREE",
    buyers: "710+ Downloads",
    rating: "5.0 ★★★★★",
    isFree: true,
    images: [
      "/assets/davinci_resolve_21_cover.jpg"
    ],
    shortDesc: "Full DaVinci Resolve 21 Studio installation setup guide with AI Magic Mask, Relight & Fairlight Voice Isolation.",
    fullDesc: "DaVinci Resolve 21 Studio is the world's leading Hollywood color grading and video editing software. This complete package includes full installation setup files, license activation guide, and Neural Engine AI tools (Magic Mask, Relight, Depth Map, and Voice Isolation).",
    features: [
      "Full DaVinci Resolve 21 Studio Setup & Activation Guide",
      "Neural Engine AI Tools (Magic Mask, Relight, Depth Map)",
      "Fairlight Studio Voice Isolation & Audio Leveller",
      "100% Free Lifetime Download & Drive Access"
    ],
    includedItems: [
      "DaVinci Resolve 21 Studio Setup Files (Windows & Mac)",
      "Step-by-step Installation & License Guide Video",
      "Bonus 10-Page Color Grading Node Tree PDF Cheat Sheet"
    ],
    razorpayLink: "/free-resources"
  }
];
