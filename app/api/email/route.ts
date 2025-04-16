import * as sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

type EmailFormData = {
  message: string;
  name: string;
  email: string;
};

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message }: EmailFormData = data;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

    const msg = {
      to: "info@kaizenhealth.io", // Change to your recipient
      from: {
        email: "info@kaizenhealth.io",
        name: "Kaizen Health",
      }, // Change to your verified sender
      subject: `${name}: Website Signup`,
      text: `${message} and email: ${email}`,
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 400 },
    );
  }
}
