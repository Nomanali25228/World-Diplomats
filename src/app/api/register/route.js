import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { email, name, data, destination } = await request.json();

    const username = process.env.NEXT_PUBLIC_SMTP_USERNAME;
    const password = process.env.NEXT_PUBLIC_SMTP_PASSWORD;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: { user: username, pass: password },
    });

    const subjectMap = {
      'Istanbul, Turkey': 'World Diplomats — Registration Received (Istanbul, Turkey)',
      'Dubai, UAE': 'World Diplomats — Registration Received (Dubai, UAE)',
      'Kuala Lumpur, Malaysia': 'World Diplomats — Registration Received (Kuala Lumpur, Malaysia)',
      'London, UK': 'World Diplomats — Registration Received (London, UK)',
      'Riyadh, Saudi Arabia': 'World Diplomats — Registration Received (Riyadh, Saudi Arabia)',
      'Baku, Azerbaijan': 'World Diplomats — Registration Received (Baku, Azerbaijan)',
    };

    const subject = subjectMap[destination] || 'World Diplomats — Registration Received';

    const mailOptions = {
      from: 'World Diplomats <no-reply@worlddiplomats.org>',
      to: email,
      subject,
      html: `<p>Hi ${name || 'Participant'},</p>
             <p>Thank you for registering for World Diplomats — ${destination || ''}. We have received your registration.</p>
             <p>Details submitted:</p>
             <pre>${JSON.stringify(data, null, 2)}</pre>
             <p>We will contact you with further details.</p>
             <p>Regards,<br/>World Diplomats Team</p>`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    console.error('Register API error', err);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
