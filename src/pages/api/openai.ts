import OpenAI from "openai";
import { env } from "~/env.mjs";
import type { NextApiRequest, NextApiResponse } from "next";

const openai = new OpenAI({ apiKey: env.OPENAI_KEY });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const assistant = await openai.beta.assistants.retrieve(
      "asst_jGe8NlrTe6Rwf5HhlmcWcc9H"
    );
    const Thread = await openai.beta.threads.create();

    res.status(200).json({ assistant, Thread });
  } catch (error) {
    res.status(500).json({ error: (error as Error).toString() });
  }
}
