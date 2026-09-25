import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const subject = String(body.subject ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
  }

  const submission = await prisma.contactSubmission.create({
    data: {
      name,
      email,
      message,
      phone: phone || null,
      subject: subject || null,
    },
    select: { id: true },
  });

  return NextResponse.json({ ok: true, id: submission.id }, { status: 201 });
}
