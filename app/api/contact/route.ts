import {NextRequest, NextResponse} from "next/server";

type Payload = {name: string; email: string; message: string; company?: string};

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const ct = req.headers.get("content-type") || "";
  let data: Payload;

  if (ct.includes("application/json")) {
    const j = await req.json();
    data = {name: j.name || "", email: j.email || "", message: j.message || "", company: j.company || ""};
  } else {
    const f = await req.formData();
    data = {
      name: String(f.get("name") || ""),
      email: String(f.get("email") || ""),
      message: String(f.get("message") || ""),
      company: String(f.get("company") || "")
    };
  }

  // Honeypot anti-spam
  if (data.company) return NextResponse.json({ok: true}, {status: 204});

  if (!data.name || !data.email || !data.message) {
    return NextResponse.json({ok: false, error: "missing_fields"}, {status: 400});
  }

  try {
    if (process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL && process.env.CONTACT_TO_EMAIL) {
      const {Resend} = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL,
        to: process.env.CONTACT_TO_EMAIL.split(",").map(s => s.trim()),
        replyTo: data.email,
        subject: `Novo lead: ${data.name}`,
        text: `Nome: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
      });
    } else {
      console.log("[CONTACT]", data);
    }

    const locale = req.nextUrl.pathname.split("/")[1] || "pt";
    return NextResponse.redirect(new URL(`/${locale}?sent=1`, req.url), {status: 302});
  } catch (e) {
    console.error("CONTACT_ERROR", e);
    return NextResponse.json({ok: false, error: "send_failed"}, {status: 500});
  }
}
