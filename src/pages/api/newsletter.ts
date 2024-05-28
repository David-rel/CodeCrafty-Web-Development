import axios from "axios";

interface RequestParams {
  url: string;
  data: {
    email_address: string;
    status: string;
  };
  headers: {
    "Content-Type": string;
    Authorization: string;
  };
}

function getRequestParams(email: string): RequestParams {
  const API_KEY = process.env.MAILCHIMP_API_KEY || "";
  const LIST_ID = process.env.MAILCHIMP_LIST_ID || "";
  const DATACENTER = API_KEY.split("-")[1] || "";

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`,
  };

  return {
    url,
    data,
    headers,
  };
}

const newsletterHandler = async (
  req: { body: { email: string | null } },
  res: {
    status: (arg0: number) => {
      json: (arg0: { error: string | null }) => void;
    };
  }
) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      error: "Forgot to add your email?",
    });
  }

  try {
    const { url, data, headers } = getRequestParams(email);

    await axios.post(url, data, { headers });

    return res.status(201).json({ error: null });
  } catch (error) {
    return res.status(400).json({
      error: `Oops, something went wrong... Send me an email at davidfales@codecrafty.dev and I'll add you to the list.`,
    });
  }
};

export default newsletterHandler;
