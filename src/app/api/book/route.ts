import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("[book] incoming payload", body);
    const hook = process.env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL;
    if (!hook) {
      return NextResponse.json({ ok: false, error: "Server not configured" }, { status: 500 });
    }

    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("[book] upstream error", res.status, text);
      return NextResponse.json({ ok: false, error: text || "Upstream error" }, { status: 500 });
    }

    const data = await res.json().catch(() => ({}));
    console.log("[book] success", data);
    return NextResponse.json({ ok: true, data });
  } catch (err: unknown) {
    console.error("[book] exception", err);
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}


