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

  const {
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    country,
    stateAndCity,
    companyName,
    instagramName,
    projectDescription,
    checkboxOne,
    checkboxTwo,
    checkboxThree,
    checkboxFour,
    pageIdea,
    pageCount,
    revisions,
    existingWebsite,
    timeline,
    domain,
    extraFeatures,
    longTermDeveloper,
  } = req.body;

  try {
    await sql.connect(sqlConfig);
    const request = new sql.Request();
    request.input("FirstName", sql.NVarChar, firstName);
    request.input("LastName", sql.NVarChar, lastName);
    request.input("EmailAddress", sql.NVarChar, emailAddress);
    request.input("PhoneNumber", sql.NVarChar, phoneNumber);
    request.input("Country", sql.NVarChar, country);
    request.input("StateAndCity", sql.NVarChar, stateAndCity);
    request.input("CompanyName", sql.NVarChar, companyName);
    request.input("InstagramName", sql.NVarChar, instagramName);
    request.input("ProjectDescription", sql.NVarChar, projectDescription);
    request.input("CheckboxOne", sql.Bit, checkboxOne);
    request.input("CheckboxTwo", sql.Bit, checkboxTwo);
    request.input("CheckboxThree", sql.Bit, checkboxThree);
    request.input("CheckboxFour", sql.Bit, checkboxFour);
    request.input("PageIdea", sql.NVarChar, pageIdea);
    request.input("PageCount", sql.Int, pageCount);
    request.input("Revisions", sql.NVarChar, revisions);
    request.input("ExistingWebsite", sql.NVarChar, existingWebsite);
    request.input("Timeline", sql.NVarChar, timeline);
    request.input("Domain", sql.NVarChar, domain);
    request.input("ExtraFeatures", sql.NVarChar, extraFeatures);
    request.input("LongTermDeveloper", sql.NVarChar, longTermDeveloper);

    await request.query(`
      INSERT INTO FormSubmission (
        FirstName, LastName, EmailAddress, PhoneNumber, Country, StateAndCity, CompanyName, InstagramName,
        ProjectDescription, CheckboxOne, CheckboxTwo, CheckboxThree, CheckboxFour, PageIdea, PageCount,
        Revisions, ExistingWebsite, Timeline, Domain, ExtraFeatures, LongTermDeveloper
      ) VALUES (
        @FirstName, @LastName, @EmailAddress, @PhoneNumber, @Country, @StateAndCity, @CompanyName, @InstagramName,
        @ProjectDescription, @CheckboxOne, @CheckboxTwo, @CheckboxThree, @CheckboxFour, @PageIdea, @PageCount,
        @Revisions, @ExistingWebsite, @Timeline, @Domain, @ExtraFeatures, @LongTermDeveloper
      )
    `);

    return res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    const message = (error as Error).message;
    console.error("Error detail:", message);
    return res.status(500).json({ error: `Error submitting form: ${message}` });
  }
}
