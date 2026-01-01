import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email, name, data } = await request.json();

    const username = process.env.NEXT_PUBLIC_SMTP_USERNAME;
    const password = process.env.NEXT_PUBLIC_SMTP_PASSWORD;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: { user: username, pass: password },
    });

    const mailOptions = {
      from: 'World Diplomats <no-reply@worlddiplomats.org>',
      to: email,
      subject: 'World Diplomats — Registration Received (Kuala Lumpur, Malaysia)',
      html: `<p>Hi ${name || 'Participant'},</p>
             <p>Thank you for registering for World Diplomats — Kuala Lumpur, Malaysia. We have received your registration.</p>
             <p>We will contact you with further details.</p>
             <p>Regards,<br/>World Diplomats Team  Abdullah the master</p>`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    console.error('KualaLumpurMalaysiaMail error', err);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
