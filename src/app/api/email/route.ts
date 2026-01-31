import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";

require("dotenv").config();

export async function POST(request: NextRequest) {
  console.log("email sender")
  const { email, name, message, subject } = await request.json();
  console.log(email);
  const transport = nodemailer.createTransport({
    host: process.env.MY_EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message from ${name} (${email}) Subject: ${subject}`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      transport.sendMail(mailOptions, (err: any) => {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
