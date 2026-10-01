import { NextResponse } from "next/server";

import { contactEmail } from "@/data";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Enter a valid email." },
        { status: 400 },
      );
    }

    const subject = `Portfolio inquiry from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;

    if (process.env.WEB3FORMS_ACCESS_KEY) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          name,
          email,
          message,
          subject,
        }),
      });
      const data = await response.json();
      if (!data.success) {
        return NextResponse.json(
          { error: "Could not send just yet.", mailto },
          { status: 502 },
        );
      }
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: true, mailto });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
