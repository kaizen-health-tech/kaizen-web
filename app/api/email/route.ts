import * as sgMail from '@sendgrid/mail';

type EmailFormData = {
  message: string;
  name: string;
  email: string;
};

export async function POST (req: Request, res: Response) {
  const data = await req.json()
  const { name, email, message }: EmailFormData = data;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  const msg = {
    to: 'info@kaizenhealth.io', // Change to your recipient
    from: 'info@kaizenhealth.io', // Change to your verified sender
    subject: `${name}: Website Signup`,
    text: `${message} and email: ${email}`,
  }

  try {
    await sgMail.send(msg)
    return Response.json({success: true, status: 200})
  } catch (e) {
    console.log(e)
    return Response.json({success: false, status: 400})
  }
}
