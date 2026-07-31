/*
  Editors Gurukul — shared site chrome injector.
  Requires assets/site-manifest.js loaded first (defines window.EG_PAGES).
  Injects into:
    <div id="eg-header"></div>  — logo + responsive nav
    <div id="eg-footer"></div>  — related guides + back-to-home + copyright
  Also injects the floating Hindi translation toggle (Google Translate).
*/
(function () {
  var PAGES = window.EG_PAGES || [];

  var CATEGORY_LABELS = {
    "davinci-resolve": "DaVinci Resolve",
    "camera": "Camera",
    "editing-fundamentals": "Editing Fundamentals",
    "career": "Career",
    "nle-comparison": "NLE Comparison"
  };
  var CATEGORY_ORDER = ["davinci-resolve", "camera", "editing-fundamentals", "nle-comparison", "career"];
  window.EG_CATEGORY_LABELS = CATEGORY_LABELS;
  window.EG_CATEGORY_ORDER = CATEGORY_ORDER;

  function normalizePath(p) {
    p = p.replace(/index\.html$/, "");
    if (p.length > 1 && p.endsWith(".html")) p = p.slice(0, -5);
    if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
    return p || "/";
  }

  function findSelf() {
    var here = normalizePath(window.location.pathname);
    for (var i = 0; i < PAGES.length; i++) {
      if (normalizePath(PAGES[i].path) === here) return PAGES[i];
    }
    return null;
  }

  function buildHeader() {
    var el = document.getElementById("eg-header");
    if (!el) return;
    el.outerHTML =
      '<header class="eg-site-nav">' +
      '<div class="eg-nav-inner">' +
      '<a href="/" class="eg-brand notranslate">EDITORS<span>GURUKUL</span></a>' +
      '<input type="checkbox" id="eg-nav-toggle" class="eg-nav-toggle">' +
      '<label for="eg-nav-toggle" class="eg-nav-toggle-label" aria-label="Menu"><span></span><span></span><span></span></label>' +
      '<nav class="eg-nav-links">' +
      '<a href="/">Home</a>' +
      '<a href="/free-resources.html">Free Resources</a>' +
      '<a href="/camera-guides.html">Camera Guides</a>' +
      '<a href="/my-gear.html">My Gear</a>' +
      '<a href="/guides.html">All Guides</a>' +
      "</nav>" +
      "</div>" +
      "</header>";
  }

  function pickRelated(self, count) {
    if (!self || self.category === "hub" || self.category === "utility") return [];
    var sameCat = PAGES.filter(function (p) { return p.category === self.category; });
    var pool = sameCat.filter(function (p) { return p.path !== self.path; });
    if (!pool.length) return [];
    // rotate the start point based on this page's position in its category,
    // so sibling pages in a large category don't all show the same 3 links
    var idx = sameCat.findIndex(function (p) { return p.path === self.path; });
    var offset = ((idx < 0 ? 0 : idx) * count) % pool.length;
    var rotated = pool.slice(offset).concat(pool.slice(0, offset));
    return rotated.slice(0, count);
  }

  function buildFooter() {
    var el = document.getElementById("eg-footer");
    if (!el) return;
    var self = findSelf();
    var related = pickRelated(self, 3);
    var relatedHtml = "";
    if (related.length) {
      relatedHtml =
        '<section class="eg-related-guides"><h3>Related Guides</h3><div class="eg-related-grid">' +
        related
          .map(function (r) {
            return (
              '<a class="eg-related-card" href="' + r.path + '">' +
              '<span class="eg-rc-tag">' + (r.category || "").replace(/-/g, " ") + "</span>" +
              '<div class="eg-rc-title">' + r.title + "</div>" +
              '<div class="eg-rc-desc">' + (r.desc || "") + "</div>" +
              "</a>"
            );
          })
          .join("") +
        "</div></section>";
    }
    var authorHtml = "";
    if (self && self.category !== "hub" && self.category !== "utility") {
      authorHtml =
        '<section class="eg-author-box">' +
        '<img class="eg-author-avatar" src="/assets/ajay-k-meena-headshot-v2.jpg" alt="Ajay K Meena" loading="lazy" onerror="this.style.display=\'none\'">' +
        '<div class="eg-author-copy">' +
        '<div class="eg-author-name">Written by Ajay K Meena</div>' +
        '<div class="eg-author-title">Cinematographer, Colorist &amp; Director · Founder, Wedream Production</div>' +
        '<p class="eg-author-desc">6+ years grading and shooting professionally in DaVinci Resolve — from weddings and music videos to brand campaigns. Everything on this site is based on real production work, not recycled tutorials.</p>' +
        '<div class="eg-author-links">' +
        '<a href="https://www.youtube.com/@ajaykmeenaa" target="_blank" rel="noopener noreferrer">YouTube</a>' +
        '<a href="https://instagram.com/iamajmeena" target="_blank" rel="noopener noreferrer">Instagram</a>' +
        '<a href="/about-contact.html">About</a>' +
        "</div></div></section>";
    }
    el.outerHTML =
      authorHtml +
      relatedHtml +
      '<footer class="eg-site-footer">' +
      '<a href="/" class="eg-footer-home">← Back to Home</a><br>' +
      '<p style="margin:0 0 8px;">' +
      '<a href="/privacy-policy.html">Privacy</a> · ' +
      '<a href="/terms.html">Terms</a> · ' +
      '<a href="/about-contact.html">Contact</a></p>' +
      "<p>© 2026 Editors Gurukul · Ajay K Meena · " +
      '<a href="https://ajaykmeena.com" target="_blank">ajaykmeena.com</a></p>' +
      "</footer>";
  }

  function getCookie(name) {
    var m = document.cookie.match("(?:^|; )" + name + "=([^;]*)");
    return m ? decodeURIComponent(m[1]) : null;
  }

  function toggleHindi() {
    var cur = getCookie("googtrans");
    if (cur && cur.indexOf("/hi") !== -1) {
      document.cookie = "googtrans=/en/en;path=/;";
      document.cookie = "googtrans=/en/en;path=/;domain=" + location.hostname + ";";
    } else {
      document.cookie = "googtrans=/en/hi;path=/;";
      document.cookie = "googtrans=/en/hi;path=/;domain=" + location.hostname + ";";
    }
    location.reload();
  }
  window.egToggleHindi = toggleHindi;

  function forceApplyTranslation() {
    var cur = getCookie("googtrans");
    if (!cur || cur.indexOf("/hi") === -1) return;
    var tries = 0;
    var iv = setInterval(function () {
      tries++;
      var combo = document.querySelector("select.goog-te-combo");
      if (combo) {
        clearInterval(iv);
        if (combo.value !== "hi") {
          combo.value = "hi";
          combo.dispatchEvent(new Event("change"));
        }
      } else if (tries > 40) {
        clearInterval(iv);
      }
    }, 250);
  }

  function loadTranslateScript() {
    if (document.getElementById("eg-google-translate-script")) return;
    var gte = document.createElement("div");
    gte.id = "google_translate_element";
    document.body.appendChild(gte);

    window.googleTranslateElementInit = function () {
      new google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "hi", autoDisplay: false },
        "google_translate_element"
      );
    };
    var s = document.createElement("script");
    s.id = "eg-google-translate-script";
    s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(s);
  }

  function buildLangToggle() {
    var btn = document.createElement("button");
    btn.id = "eg-lang-toggle-btn";
    btn.className = "eg-lang-toggle notranslate";
    btn.type = "button";
    btn.textContent = "हिंदी में पढ़ें";
    btn.addEventListener("click", toggleHindi);
    document.body.appendChild(btn);

    var cur = getCookie("googtrans");
    if (cur && cur.indexOf("/hi") !== -1) {
      // Translation is already active for this visitor — load immediately
      // so this pageview actually renders translated.
      btn.textContent = "English";
      loadTranslateScript();
      forceApplyTranslation();
    }
    // Otherwise, defer loading Google's third-party script entirely until
    // the visitor actually clicks — most pageviews never touch this button,
    // so this saves a network request on every single page load.
  }

  function cardHtml(p) {
    return (
      '<a class="eg-related-card" href="' + p.path + '">' +
      '<span class="eg-rc-tag">' + (CATEGORY_LABELS[p.category] || p.category || "") + "</span>" +
      '<div class="eg-rc-title">' + p.title + "</div>" +
      '<div class="eg-rc-desc">' + (p.desc || "") + "</div>" +
      "</a>"
    );
  }

  // Fills any <div class="eg-latest-block" data-category="davinci-resolve"
  // data-count="4" data-title="Latest DaVinci Resolve Guides"></div> with
  // the most recently added pages in that category (manifest entries are
  // assumed to be appended in roughly chronological order).
  function buildLatestBlocks() {
    var blocks = document.querySelectorAll(".eg-latest-block");
    blocks.forEach(function (block) {
      var cat = block.getAttribute("data-category");
      var count = parseInt(block.getAttribute("data-count"), 10) || 4;
      var title = block.getAttribute("data-title") || (CATEGORY_LABELS[cat] || cat) + " Guides";
      var viewAllHref = block.getAttribute("data-view-all") || "/guides.html#" + cat;
      var pool = PAGES.filter(function (p) { return p.category === cat; });
      var latest = pool.slice(-count).reverse();
      if (!latest.length) {
        block.style.display = "none";
        return;
      }
      block.innerHTML =
        '<div class="eg-related-guides" style="margin:0;max-width:none;">' +
        "<h3>" + title + "</h3>" +
        '<div class="eg-related-grid">' +
        latest.map(cardHtml).join("") +
        "</div>" +
        '<p style="margin-top:14px;"><a href="' + viewAllHref + '" style="font-weight:700;">View all ' + (CATEGORY_LABELS[cat] || cat) + " guides →</a></p>" +
        "</div>";
    });
  }

  // E-E-A-T: sitewide Person + Organization JSON-LD so every page (not just
  // posts that manually added their own Article schema) tells Google who
  // Ajay K Meena is and how the site is connected to Wedream Production.
  // Skipped if a page already injects its own Person/Organization block.
  function buildAuthorSchema() {
    if (document.getElementById("eg-person-schema")) return;
    var html = document.documentElement.outerHTML;
    if (/"@type"\s*:\s*"Person"/.test(html) || /"@type"\s*:\s*"Organization"/.test(html)) return;

    var data = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": "https://editorsgurukul.com/#person",
          "name": "Ajay K Meena",
          "url": "https://editorsgurukul.com/about-contact.html",
          "sameAs": [
            "https://www.youtube.com/@ajaykmeenaa",
            "https://instagram.com/iamajmeena",
            "https://www.ajaykmeena.com"
          ],
          "jobTitle": "Cinematographer, Colorist & Director",
          "description": "Professional DOP, Cinematographer and Colorist with 6+ years of experience in DaVinci Resolve color grading, video editing, and filmmaking. Owner of Wedream Production.",
          "worksFor": { "@id": "https://editorsgurukul.com/#organization" },
          "knowsAbout": [
            "DaVinci Resolve",
            "Color Grading",
            "Cinematography",
            "Video Editing",
            "Camera Technique",
            "Post-Production Workflow"
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://editorsgurukul.com/#organization",
          "name": "Editors Gurukul",
          "url": "https://editorsgurukul.com",
          "founder": { "@id": "https://editorsgurukul.com/#person" },
          "sameAs": [
            "https://www.youtube.com/@ajaykmeenaa",
            "https://instagram.com/iamajmeena"
          ],
          "description": "Free DaVinci Resolve, color grading, camera, and filmmaking education by cinematographer and colorist Ajay K Meena (Wedream Production)."
        }
      ]
    };

    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = "eg-person-schema";
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }

  function buildQuickPreviewModal() {
    if (document.getElementById("eg-quick-preview-modal")) return;
    var modalOverlay = document.createElement("div");
    modalOverlay.id = "eg-quick-preview-modal";
    modalOverlay.className = "eg-modal-overlay";
    modalOverlay.innerHTML =
      '<div class="eg-modal-card">' +
      '<button type="button" class="eg-modal-close" id="eg-modal-close-btn" aria-label="Close">&times;</button>' +
      '<span class="eg-modal-badge" id="eg-modal-badge">Free Resource</span>' +
      '<h2 class="eg-modal-title" id="eg-modal-title">Resource Title</h2>' +
      '<p class="eg-modal-desc" id="eg-modal-desc">Resource description goes here...</p>' +
      '<div class="eg-modal-meta" id="eg-modal-meta"></div>' +
      '<div class="eg-modal-actions">' +
      '<a href="#" id="eg-modal-primary-btn" class="eg-modal-btn-primary">Download / Access Now</a>' +
      '<button type="button" id="eg-modal-copy-btn" class="eg-modal-btn-secondary">Copy Link</button>' +
      '</div>' +
      '</div>';
    document.body.appendChild(modalOverlay);

    function closeModal() {
      modalOverlay.classList.remove("active");
    }

    document.getElementById("eg-modal-close-btn").addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", function (e) {
      if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
        closeModal();
      }
    });

    document.getElementById("eg-modal-copy-btn").addEventListener("click", function () {
      var url = document.getElementById("eg-modal-primary-btn").href;
      navigator.clipboard.writeText(url).then(function () {
        var btn = document.getElementById("eg-modal-copy-btn");
        var orig = btn.textContent;
        btn.textContent = "Copied! ✓";
        setTimeout(function () { btn.textContent = orig; }, 2000);
      });
    });
  }

  window.openEGQuickPreview = function (opts) {
    opts = opts || {};
    var modal = document.getElementById("eg-quick-preview-modal");
    if (!modal) return;
    document.getElementById("eg-modal-badge").textContent = opts.badge || "FREE RESOURCE";
    document.getElementById("eg-modal-title").textContent = opts.title || "Filmmaking Resource";
    document.getElementById("eg-modal-desc").textContent = opts.desc || "";
    document.getElementById("eg-modal-primary-btn").href = opts.url || "#";
    
    var metaEl = document.getElementById("eg-modal-meta");
    metaEl.innerHTML = "";
    var tags = opts.tags || ["DaVinci Resolve", "PDF / Guide", "Verified Creator"];
    tags.forEach(function (tag) {
      var span = document.createElement("span");
      span.className = "eg-modal-tag";
      span.textContent = "✓ " + tag;
      metaEl.appendChild(span);
    });

    modal.classList.add("active");
  };

  function init() {
    buildHeader();
    buildFooter();
    buildLangToggle();
    buildLatestBlocks();
    buildAuthorSchema();
    buildQuickPreviewModal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
