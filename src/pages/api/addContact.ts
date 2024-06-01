import type { NextApiRequest, NextApiResponse } from "next";
const sql = require("mssql");
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const sqlConfig = {
  user: process.env.NEXT_PUBLIC_SQL_USER,
  password: process.env.NEXT_PUBLIC_SQL_PASSWORD,
  server: process.env.NEXT_PUBLIC_SQL_DATABASE,
  database: process.env.NEXT_PUBLIC_SQL_NAME,
  pool: {
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { full_name, email, phone, message } = req.body;

  try {
    await sql.connect(sqlConfig);
    const request = new sql.Request();
    request.input("FullName", sql.NVarChar, full_name);
    request.input("Email", sql.NVarChar, email);
    request.input("Phone", sql.NVarChar, phone);
    request.input("Message", sql.NVarChar, message);

    await request.query(`
      INSERT INTO ContactFormSubmissions (
        FullName, Email, Phone, Message
      ) VALUES (
        @FullName, @Email, @Phone, @Message
      )
    `);

    // Send an email using SendGrid
    const emailContent = {
      to: ["davidfales@codecrafty.dev", "diego_g@codecrafty.dev"], // Add multiple email addresses here
      from: "admin@codecrafty.dev", // Replace with your verified sender email
      subject: `Code Crafty: New Contact Form Submission from ${full_name}`,
      text: `You have received a new contact form submission:
      
      Full Name: ${full_name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}`,
      html: `<p>You have received a new contact form submission:</p>
             <p><strong>Full Name:</strong> ${full_name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    await sgMail.send(emailContent);

    return res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    const message = (error as Error).message;
    console.error("Error detail:", message);
    return res.status(500).json({ error: `Error submitting form: ${message}` });
  }
}
