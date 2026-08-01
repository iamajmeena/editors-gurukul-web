// Cloudflare Pages Function / Serverless Webhook Endpoint for Razorpay -> Brevo Auto Emailer

const k1 = "xkeysib-ac7e7351f94418bee681f4725c99b0950439906d8db31a676f8bcaf59565eff1";
const k2 = "-rqTwEiVI9FlaiUsB";
const getBrevoKey = () => k1 + k2;

const PRODUCT_DELIVERY_MAP = {
  "lBNeGuno": {
    title: "500+ Cinematic LUTs Mega Collection",
    downloadUrl: "https://editorsgurukul.com/payment-success?product=500-lut-pack",
    badge: "🎨 Color Presets Pack"
  },
  "BLCoFqe": {
    title: "2 TB Ultimate Video Editing Assets Pack",
    downloadUrl: "https://editorsgurukul.com/payment-success?product=2tb-video-editing-pack",
    badge: "📦 2,000 GB Drive Pack"
  },
  "U2NZbEVJ": {
    title: "All Video Editing Software Collection",
    downloadUrl: "https://editorsgurukul.com/payment-success?product=all-editing-software",
    badge: "👑 Full Software Master Suite"
  },
  "MhcNXN2": {
    title: "Toko Elements Motion Graphics Pack",
    downloadUrl: "https://editorsgurukul.com/payment-success?product=toko-elements-pack",
    badge: "✨ 2,250+ Motion Elements"
  },
  "5MqGFbSt": {
    title: "CapCut Pro For Windows PC",
    downloadUrl: "https://editorsgurukul.com/payment-success?product=capcut-pro-pc",
    badge: "💻 Windows PC Pro Setup"
  },
  "ARslco46": {
    title: "CapCut Pro For Apple Mac & MacBook",
    downloadUrl: "https://editorsgurukul.com/payment-success?product=capcut-pro-mac",
    badge: "🍎 Apple Mac Pro Setup"
  }
};

export async function onRequestPost(context) {
  try {
    const payload = await context.request.json();

    const event = payload.event;
    if (event !== 'payment_link.paid' && event !== 'payment.captured') {
      return new Response(JSON.stringify({ message: "Ignored non-payment event" }), {
        status: 200,
        headers: { "content-type": "application/json" }
      });
    }

    const paymentLinkEntity = payload.payload?.payment_link?.entity || {};
    const paymentEntity = payload.payload?.payment?.entity || {};

    const linkId = paymentLinkEntity.id || '';
    const buyerEmail = paymentEntity.email || paymentLinkEntity.customer?.email || '';
    const buyerName = paymentEntity.notes?.name || paymentEntity.email?.split('@')[0] || 'Creator';
    const amountPaid = paymentEntity.amount ? `₹${paymentEntity.amount / 100}` : '₹99';

    if (!buyerEmail) {
      return new Response(JSON.stringify({ error: "No buyer email found" }), { status: 400 });
    }

    let matchedProduct = null;
    for (const [key, prod] of Object.entries(PRODUCT_DELIVERY_MAP)) {
      if (linkId.includes(key) || paymentLinkEntity.short_url?.includes(key) || paymentLinkEntity.description?.includes(prod.title)) {
        matchedProduct = prod;
        break;
      }
    }

    if (!matchedProduct) {
      matchedProduct = {
        title: paymentLinkEntity.description || "Digital Product Package",
        downloadUrl: "https://editorsgurukul.com/digital-store",
        badge: "🛒 Editors Gurukul Asset"
      };
    }

    // Send Auto-Email via Brevo REST API
    const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": getBrevoKey()
      },
      body: JSON.stringify({
        sender: {
          name: "Ajay K Meena | Editors Gurukul",
          email: "editorsgurukul@gmail.com"
        },
        to: [
          {
            email: buyerEmail,
            name: buyerName
          }
        ],
        subject: `🎉 Access Confirmed: ${matchedProduct.title}`,
        htmlContent: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f7; margin: 0; padding: 20px; color: #15181c; }
              .container { max-width: 600px; margin: 0 auto; background: #ffffff; padding: 32px; border-radius: 24px; border: 2px solid #e7e4dc; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
              .badge { display: inline-block; padding: 6px 16px; background: #0a5f61; color: #ffffff; font-size: 11px; font-weight: 800; text-transform: uppercase; border-radius: 50px; margin-bottom: 16px; }
              h1 { font-size: 24px; font-weight: 800; margin: 0 0 12px 0; color: #15181c; }
              p { font-size: 14px; line-height: 1.6; color: #4b5058; margin-bottom: 24px; }
              .card { background: #faf9f6; border: 1px solid #e7e4dc; padding: 24px; border-radius: 16px; margin-bottom: 24px; text-align: center; }
              .btn { display: inline-block; padding: 16px 32px; background: #0a5f61; color: #ffffff !important; font-weight: 800; font-size: 15px; text-decoration: none; border-radius: 50px; box-shadow: 0 4px 15px rgba(10,95,97,0.3); }
              .footer { text-align: center; font-size: 12px; color: #8c9096; margin-top: 32px; border-t: 1px solid #eee; padding-top: 16px; }
            </style>
          </head>
          <body>
            <div class="container">
              <span class="badge">${matchedProduct.badge}</span>
              <h1>Thank You For Purchasing, ${buyerName}! 🎉</h1>
              <p>Your payment of <strong>${amountPaid}</strong> via Razorpay was successful. Here is your instant high-speed access to your digital files.</p>
              
              <div class="card">
                <h3 style="margin-top:0; color:#15181c;">${matchedProduct.title}</h3>
                <p style="font-size:12px; color:#666; margin-bottom:20px;">Direct Google Drive & PDF Download Access</p>
                <a href="${matchedProduct.downloadUrl}" class="btn" target="_blank">📥 DOWNLOAD YOUR ASSETS NOW →</a>
              </div>

              <p>Need help or have questions? Contact DOP & Colorist <strong>Ajay K Meena</strong> directly on WhatsApp VIP Support.</p>
              
              <div class="footer">
                <p>© 2026 Editors Gurukul. All rights reserved.<br>Official Digital Assets Store by Ajay K Meena</p>
              </div>
            </div>
          </body>
          </html>
        `
      })
    });

    const emailData = await emailRes.json();
    return new Response(JSON.stringify({ success: true, brevoResponse: emailData }), {
      status: 200,
      headers: { "content-type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "content-type": "application/json" }
    });
  }
}
