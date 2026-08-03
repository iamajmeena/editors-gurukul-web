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
    shortDesc: "Complete Video Editing Suite — DaVinci Resolve Studio, Premiere Pro, After Effects, CapCut Pro & Plugins.",
    fullDesc: "The ultimate video editor toolkit! Get full access to all industry-standard video editing software including DaVinci Resolve Studio, Adobe Premiere Pro, After Effects, CapCut Pro Desktop, and top plugins (Sapphire, Continuum, Neat Video).",
    features: [
      "Complete Suite: DaVinci Resolve Studio, Premiere Pro & After Effects",
      "Full Plugins: Sapphire, Continuum, Universe & Neat Noise Reduction",
      "Step-by-step Video Installation & License Activation Tutorials",
      "High-Speed Google Drive Direct Download Links"
    ],
    includedItems: [
      "Full Windows & Mac Installer Setup Packages",
      "Plugin Bundle Collection & Activation Scripts",
      "Lifetime Drive Access & Free Future Updates"
    ],
    razorpayLink: "https://rzp.io/rzp/U2NZbEVJ"
  },
  {
    id: "toko-elements-pack",
    slug: "toko-elements-pack",
    title: "Toko Elements Motion Graphics Pack",
    category: "Motion Templates",
    badge: "✨ MOTION GRAPHICS",
    price: "₹99",
    numericPrice: 99,
    originalPrice: "₹1,999",
    discount: "95% OFF",
    buyers: "417+ Editors",
    rating: "4.8 ★★★★★",
    isFree: false,
    images: [
      "/assets/500_lut_pack_cover.jpg"
    ],
    shortDesc: "2,250+ Motion Graphics Elements — Lower Thirds, Titles, Callouts & Transitions for DaVinci & Premiere.",
    fullDesc: "Upgrade your edit quality with 2,250+ drag-and-drop motion graphic elements. Includes lower thirds, social media callouts, animated titles, typography presets, and 60fps vector transitions for DaVinci Resolve and Premiere Pro.",
    features: [
      "2,250+ Motion Graphics Elements (Lower Thirds, Titles, Callouts)",
      "1-Click Drag & Drop Preset Integration",
      "Smooth 60fps Vector Animations with Custom Color Controls",
      "Compatible with DaVinci Resolve 18/19/21 & Premiere Pro"
    ],
    includedItems: [
      "Toko Elements Preset Library Installer",
      "Tutorial Video on Customizing Colors & Fonts",
      "Commercial License"
    ],
    razorpayLink: "https://rzp.io/rzp/MhcNXN2"
  },
  {
    id: "capcut-pro-pc",
    slug: "capcut-pro-pc",
    title: "CapCut Pro For Windows PC",
    category: "Windows Desktop Software",
    badge: "🔥 TOP SELLER",
    price: "₹39",
    numericPrice: 39,
    originalPrice: "₹1,999",
    discount: "98% OFF",
    buyers: "1,140+ PC Creators",
    rating: "4.9 ★★★★★",
    isFree: false,
    images: [
      "/assets/capcut_pro_pc_cover.jpg"
    ],
    shortDesc: "Full CapCut Pro Desktop for Windows 10/11 PC — Auto Captions, AI Text-to-Speech & Pro Transitions.",
    fullDesc: "Get complete access to CapCut Pro Desktop for Windows PC (Windows 10 & 11). Edit viral Instagram Reels and YouTube Shorts at 4K 60fps with Pro Auto Captions, AI background removal, trending transitions, and zero watermark export.",
    features: [
      "Full CapCut Pro Desktop Setup for Windows 10 & 11 PC",
      "Auto Captions Generator with Trending Caption Styles",
      "AI Background Remover & Auto Cutout Engine",
      "No Watermark 4K 60fps Export Guarantee"
    ],
    includedItems: [
      "CapCut Pro Installer for Windows PC",
      "Text-to-Speech & Auto Caption Setup Guide",
      "Bonus 50+ Trending Shorts Transition Presets"
    ],
    razorpayLink: "https://rzp.io/rzp/5MqGFbSt"
  },
  {
    id: "capcut-pro-mac",
    slug: "capcut-pro-mac",
    title: "CapCut Pro For Apple Mac & MacBook",
    category: "macOS Software",
    badge: "🚀 MACBOOK EDITION",
    price: "₹39",
    numericPrice: 39,
    originalPrice: "₹1,999",
    discount: "98% OFF",
    buyers: "584+ Mac Creators",
    rating: "5.0 ★★★★★",
    isFree: false,
    images: [
      "/assets/capcut_pro_mac_cover.jpg"
    ],
    shortDesc: "Full CapCut Pro Desktop for Apple Silicon M1/M2/M3 & Intel Macs — Metal GPU Accelerated.",
    fullDesc: "Full CapCut Pro Desktop optimized for Apple MacBooks and Macs (Apple Silicon M1, M2, M3 & Intel). Experience lightning-fast Metal GPU rendering, 4K 60fps export, auto captions, and pro effects.",
    features: [
      "Full CapCut Pro Desktop Setup for Apple macOS",
      "Optimized for M1, M2, M3 Apple Silicon & Intel Macs",
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
    razorpayLink: "https://rzp.io/rzp/J7qakhn"
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
