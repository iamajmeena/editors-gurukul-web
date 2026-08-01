(function () {
  const overlayId = 'eg-adblock-overlay';
  const styleId = 'eg-adblock-style';

  function isHidden(el) {
    if (!el) return false;
    const style = window.getComputedStyle(el);
    return style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0' || el.offsetHeight === 0 || el.offsetWidth === 0;
  }

  function createOverlay() {
    if (document.getElementById(overlayId)) {
      return document.getElementById(overlayId);
    }

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      #${overlayId} {
        position: fixed;
        inset: 0;
        z-index: 2147483647;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 24px;
        background: rgba(2, 6, 23, 0.86);
        backdrop-filter: blur(4px);
      }
      #${overlayId} .modal-card {
        width: min(100%, 560px);
        background: #ffffff;
        color: #111827;
        border-radius: 24px;
        padding: 28px 24px;
        box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);
        text-align: center;
      }
      #${overlayId} h3 {
        margin: 0 0 10px;
        font-size: 1.35rem;
        font-weight: 800;
      }
      #${overlayId} p {
        margin: 0 0 16px;
        line-height: 1.7;
        color: #4b5563;
      }
      #${overlayId} .pill {
        display: inline-block;
        padding: 10px 16px;
        border-radius: 999px;
        background: #111827;
        color: #ffffff;
        font-weight: 700;
        font-size: 0.95rem;
      }
    `;

    document.head.appendChild(style);

    const overlay = document.createElement('div');
    overlay.id = overlayId;
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-live', 'assertive');
    overlay.innerHTML = `
      <div class="modal-card">
        <h3>Ad blocker detected</h3>
        <p>Your ad blocker is preventing the free asset experience from loading properly. Please disable it to continue safely and unlock the download flow.</p>
        <div class="pill">Disable ad blocker to continue</div>
      </div>
    `;

    overlay.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
    });
    overlay.addEventListener('mousedown', function (event) {
      event.preventDefault();
      event.stopPropagation();
    });
    document.body.appendChild(overlay);
    return overlay;
  }

  function showOverlay() {
    const overlay = createOverlay();
    overlay.style.display = 'flex';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }

  function detectAdBlock() {
    const bait = document.createElement('div');
    bait.className = 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad adsbox ad-placement adsbygoogle';
    bait.style.position = 'absolute';
    bait.style.left = '-9999px';
    bait.style.top = '-9999px';
    bait.style.width = '300px';
    bait.style.height = '250px';
    document.body.appendChild(bait);

    const baitBlocked = isHidden(bait);

    const adSelectors = [
      'ins.adsbygoogle',
      'iframe[id*="google_ads"]',
      'iframe[id*="google_ads_iframe"]',
      '[class*="adsbygoogle"]',
      '[id*="google_ads"]',
      '.ad-slot',
      '.ad-banner',
      '.text-ad',
      '.pub_300x250',
      '.pub_300x250m',
      '.pub_728x90'
    ];
    const hiddenAds = Array.from(document.querySelectorAll(adSelectors.join(','))).some(isHidden);

    const adScripts = Array.from(document.querySelectorAll('script[src]')).filter(function (script) {
      return /googlesyndication|doubleclick|adservice|effectivecpm|adsterra|googletagmanager/i.test(script.src);
    });

    const scriptsLookBlocked = adScripts.length > 0 && hiddenAds && baitBlocked;

    bait.remove();
    return baitBlocked || hiddenAds || scriptsLookBlocked;
  }

  function init() {
    const runCheck = function () {
      if (detectAdBlock()) {
        showOverlay();
      }
    };

    runCheck();
    window.setTimeout(runCheck, 1200);
    window.setTimeout(runCheck, 2400);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
