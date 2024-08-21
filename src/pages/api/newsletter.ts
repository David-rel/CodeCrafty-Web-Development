import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      const API_KEY = process.env.MAILCHIMP_API_KEY;
      const LIST_ID = process.env.MAILCHIMP_LIST_ID;
      const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;

      const url = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return res.status(500).json({ error: errorData.detail });
      }

      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: "An unexpected error occurred" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
