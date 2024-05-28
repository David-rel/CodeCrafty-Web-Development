import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { username, password } = req.body;

  if (
    username === process.env.NEXT_PUBLIC_USERNAME &&
    password === process.env.NEXT_PUBLIC_PASSWORD
  ) {
    const cookie = serialize("token", "loggedin", {
      httpOnly: false, // set to false to be accessible from JavaScript
      secure: process.env.NODE_ENV !== "development",
      maxAge: 60 * 60, // 1 hour
      sameSite: "strict",
      path: "/",
    });
    res.setHeader("Set-Cookie", cookie);
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
}
