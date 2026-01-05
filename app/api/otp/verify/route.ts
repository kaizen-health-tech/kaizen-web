import { NextResponse } from "next/server";
import { verifyOTP } from "@/lib/otpStore";

type VerifyOTPRequest = {
  email: string;
  otp: string;
};

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, otp }: VerifyOTPRequest = data;

    if (!email || !otp) {
      return NextResponse.json(
        { success: false, verified: false, message: "Email and OTP are required" },
        { status: 400 },
      );
    }

    const isValid = verifyOTP(email, otp);

    if (!isValid) {
      return NextResponse.json(
        { success: true, verified: false, message: "Invalid or expired code" },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { success: true, verified: true },
      { status: 200 },
    );
  } catch (error) {
    console.error("OTP verify error:", error);
    return NextResponse.json(
      { success: false, verified: false, message: "Verification failed" },
      { status: 400 },
    );
  }
}
