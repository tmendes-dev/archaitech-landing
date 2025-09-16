import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const name = String(form.get("name") || "");
  const email = String(form.get("email") || "");
  const message = String(form.get("message") || "");
  console.log("[CONTACT]", { name, email, message });
  // In production, integrate with email/CRM here.
  return NextResponse.json({ ok: true });
}
