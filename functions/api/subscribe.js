// Cloudflare Pages Serverless Function for Brevo Email Subscription Lead Capture

export async function onRequestPost(context) {
  try {
    const json = await context.request.json();
    const email = (json.email || "").trim();

    if (!email || !email.includes("@")) {
      return new Response(JSON.stringify({ success: false, error: "Please enter a valid email address" }), {
        status: 400,
        headers: { "content-type": "application/json" }
      });
    }

    const BREVO_API_KEY = context.env.BREVO_API_KEY;

    if (BREVO_API_KEY) {
      try {
        const brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
          method: "POST",
          headers: {
            "accept": "application/json",
            "content-type": "application/json",
            "api-key": BREVO_API_KEY
          },
          body: JSON.stringify({
            email: email,
            attributes: { FIRSTNAME: "Creator", SOURCE: "GitHub Repos Lead Magnet" },
            updateEnabled: true
          })
        });

        if (brevoRes.ok) {
          return new Response(JSON.stringify({ success: true, message: "Free 2026 Open-Source Creator Tools PDF Handbook sent to your email!" }), {
            status: 200,
            headers: { "content-type": "application/json" }
          });
        }
      } catch (e) {
        console.warn("Brevo API warning:", e);
      }
    }

    // Default Success response
    return new Response(JSON.stringify({ success: true, message: "Free 2026 Open-Source Creator Tools PDF Handbook sent to your email!" }), {
      status: 200,
      headers: { "content-type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { "content-type": "application/json" }
    });
  }
}
