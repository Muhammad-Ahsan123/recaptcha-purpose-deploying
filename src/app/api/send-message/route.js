// // src/app/api/send-message/route.js
// import nodemailer from 'nodemailer';

// export async function POST(req) {
//   const { name, email, message } = await req.json(); // Parse the JSON body

//   // Ensure required fields are present
//   if (!name || !email || !message) {
//     return new Response(
//       JSON.stringify({ error: 'Name, email, and message are required.' }),
//       { status: 400 }
//     );
//   }

//   // Create a transporter using Gmail
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.GMAIL_PASS,
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

//   // Set up the email options
//   const mailOptions = {
//     from: process.env.GMAIL_USER,
//     to: process.env.GMAIL_USER,
//     subject: `New Contact Us Message from ${name}`,
//     text: `You have a new message from the contact form:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   try {
//     // Send the email using nodemailer
//     await transporter.sendMail(mailOptions);
//     return new Response(
//       JSON.stringify({ message: 'Email sent successfully!' }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.log("error", error);

//     return new Response(
//       JSON.stringify({ error: 'Failed to send email. Please try again.' }),
//       { status: 500 }
//     );
//   }
// }



import nodemailer from 'nodemailer';
import fetch from 'node-fetch';

export async function POST(req) {
  const { name, email, message, captchaToken } = await req.json();

  // Verify reCAPTCHA
  const verifyCaptcha = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`;
  const captchaResponse = await fetch(verifyCaptcha, { method: 'POST' });
  const captchaResult = await captchaResponse.json();

  if (!captchaResult.success) {
    return new Response(JSON.stringify({ error: 'Captcha verification failed.' }), { status: 400 });
  }

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `New Contact Us Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email.' }), { status: 500 });
  }
}
