import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, area, service, frequency, message } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone number and email address are required." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set.");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Company2You Website <onboarding@resend.dev>",
      to: ["Company2You.uk@gmail.com"],
      reply_to: email,
      subject: `New Enquiry from ${name} — Company2You`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: #1B3878; padding: 28px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 700;">
              New Enquiry — Company2You
            </h1>
            <p style="color: rgba(255,255,255,0.6); margin: 6px 0 0; font-size: 13px;">
              Received from company2you.co.uk
            </p>
          </div>

          <div style="padding: 28px 32px; background: #f9fafb; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-weight: 600; width: 140px; vertical-align: top;">Full Name</td>
                <td style="padding: 10px 0; color: #111827; font-weight: 500;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280; font-weight: 600; vertical-align: top;">Phone</td>
                <td style="padding: 10px 0; color: #111827; font-weight: 500;">
                  <a href="tel:${phone}" style="color: #1B3878;">${phone}</a>
                </td>
              </tr>
              <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280; font-weight: 600; vertical-align: top;">Email</td>
                <td style="padding: 10px 0; color: #111827; font-weight: 500;">
                  <a href="mailto:${email}" style="color: #1B3878;">${email}</a>
                </td>
              </tr>
              <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280; font-weight: 600; vertical-align: top;">Area</td>
                <td style="padding: 10px 0; color: #111827;">${area || "Not specified"}</td>
              </tr>
              <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280; font-weight: 600; vertical-align: top;">Service</td>
                <td style="padding: 10px 0; color: #111827;">${service || "Not specified"}</td>
              </tr>
              <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280; font-weight: 600; vertical-align: top;">Frequency</td>
                <td style="padding: 10px 0; color: #111827;">${frequency || "Not specified"}</td>
              </tr>
            </table>

            ${
              message
                ? `
            <div style="margin-top: 20px; padding: 16px; background: white; border-left: 4px solid #F47920; border-radius: 4px;">
              <p style="margin: 0 0 8px; color: #6b7280; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Additional Message</p>
              <p style="margin: 0; color: #111827; font-size: 14px; line-height: 1.6;">${message}</p>
            </div>`
                : ""
            }

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; text-align: center; color: #9ca3af; font-size: 12px;">
              Sent from Company2You website &mdash; company2you.co.uk
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send your enquiry. Please try again." },
      { status: 500 }
    );
  }
}
