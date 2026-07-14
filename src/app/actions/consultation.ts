"use server";

import nodemailer from "nodemailer";
import { z } from "zod";
import { siteConfig } from "@/lib/site-config";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z.string().trim().max(2000).optional().default(""),
});

export type ConsultationState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitConsultation(
  _prevState: ConsultationState,
  formData: FormData
): Promise<ConsultationState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Please check the form and try again.",
    };
  }

  const { name, email, message } = parsed.data;
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONSULTATION_TO_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Consultation form: SMTP_HOST/SMTP_USER/SMTP_PASS are not configured.");
    return {
      status: "error",
      message: `This form isn't fully configured yet — please email us directly at ${siteConfig.email}.`,
    };
  }

  const port = Number(SMTP_PORT ?? 587);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Meridian Repute Website" <${SMTP_USER}>`,
      to: CONSULTATION_TO_EMAIL || siteConfig.email,
      replyTo: email,
      subject: `New consultation request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
  } catch (err) {
    console.error("Consultation form: failed to send email", err);
    return {
      status: "error",
      message: "Something went wrong sending your request. Please try again or email us directly.",
    };
  }

  return { status: "success", message: "Thank you — we'll be in touch shortly." };
}
