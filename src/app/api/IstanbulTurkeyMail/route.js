import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import puppeteer from 'puppeteer'; // Install puppeteer using npm

export async function POST(request) {
    const username = process.env.NEXT_PUBLIC_SMTP_USERNAME;
    const password = process.env.NEXT_PUBLIC_SMTP_PASSWORD;

    try {
        const {  } = await request.json();
        console.log("nodemailer id", id );

       

     

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: username,
                pass: password,
            },
        });
        const pdfPath = 'https://res.cloudinary.com/dhqbmpldd/image/upload/v1735156197/Rundown_br2xjm.pdf'; // Corrected Google Drive link for direct download
        //  first email template 
        const mailOptions = {
            from: 'Atsas MUN',
            to: email,
            subject: 'Your Registration has been Received',
            html: `hello`,
        };

        await transporter.sendMail({ ...mailOptions, });

       
        return NextResponse.json({ message: 'Success: Emails sent and scheduled' });
    } catch (error) {
        console.error('Error initiating email process:', error);
        return NextResponse.json({ message: 'Failed to process the request' }, { status: 500 });
    }
}
