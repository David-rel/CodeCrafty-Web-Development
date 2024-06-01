import type { NextApiRequest, NextApiResponse } from "next";
const sql = require("mssql");

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

    return res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    const message = (error as Error).message;
    console.error("Error detail:", message);
    return res.status(500).json({ error: `Error submitting form: ${message}` });
  }
}
