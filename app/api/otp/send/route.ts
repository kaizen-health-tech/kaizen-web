import * as sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";
import { generateOTP, setOTP } from "@/lib/otpStore";

type SendOTPRequest = {
  email: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email }: SendOTPRequest = data;

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 },
      );
    }

    const otp = generateOTP();
    setOTP(email, otp);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

    const msg = {
      to: email,
      from: {
        email: "info@kaizenhealth.io",
        name: "Kaizen Health",
      },
      subject: "Your Kaizen Health Verification Code",
      text: `Your verification code is: ${otp}\n\nThis code expires in 5 minutes.\n\nIf you didn't request this code, please ignore this email.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #442982; margin-bottom: 20px;">Kaizen Health</h2>
          <p style="color: #333; font-size: 16px;">Your verification code is:</p>
          <div style="background: #F1ECFF; border-radius: 8px; padding: 20px; text-align: center; margin: 20px 0;">
            <span style="font-size: 32px; font-weight: bold; color: #7B4DFF; letter-spacing: 4px;">${otp}</span>
          </div>
          <p style="color: #666; font-size: 14px;">This code expires in 5 minutes.</p>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">If you didn't request this code, please ignore this email.</p>
        </div>
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("OTP send error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send verification code" },
      { status: 400 },
    );
  }
}
