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
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    await sql.connect(sqlConfig);
    const result = await sql.query("SELECT * FROM FormSubmission");

    return res.status(200).json(result.recordset);
  } catch (error) {
    const message = (error as Error).message;
    console.error("Error detail:", message);
    return res.status(500).json({ error: `Error fetching data: ${message}` });
  }
}
