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

    // Send an email using SendGrid
    const emailContent = {
      to: ["davidfales@codecrafty.dev", "diego_g@codecrafty.dev"], // Add multiple email addresses here
      from: "admin@codecrafty.dev", // Replace with your verified sender email
      subject: `Code Crafty: New Build Request Submission from ${companyName}`,
      text: `You have received a new form submission:
      
      First Name: ${firstName}
      Last Name: ${lastName}
      Email Address: ${emailAddress}
      Phone Number: ${phoneNumber}
      Country: ${country}
      State and City: ${stateAndCity}
      Company Name: ${companyName}
      Instagram Name: ${instagramName}
      Project Description: ${projectDescription}
      Checkbox One: ${checkboxOne}
      Checkbox Two: ${checkboxTwo}
      Checkbox Three: ${checkboxThree}
      Checkbox Four: ${checkboxFour}
      Page Idea: ${pageIdea}
      Page Count: ${pageCount}
      Revisions: ${revisions}
      Existing Website: ${existingWebsite}
      Timeline: ${timeline}
      Domain: ${domain}
      Extra Features: ${extraFeatures}
      Long Term Developer: ${longTermDeveloper}`,
      html: `<p>You have received a new form submission:</p>
             <p><strong>First Name:</strong> ${firstName}</p>
             <p><strong>Last Name:</strong> ${lastName}</p>
             <p><strong>Email Address:</strong> ${emailAddress}</p>
             <p><strong>Phone Number:</strong> ${phoneNumber}</p>
             <p><strong>Country:</strong> ${country}</p>
             <p><strong>State and City:</strong> ${stateAndCity}</p>
             <p><strong>Company Name:</strong> ${companyName}</p>
             <p><strong>Instagram Name:</strong> ${instagramName}</p>
             <p><strong>Project Description:</strong> ${projectDescription}</p>
             <p><strong>Checkbox One:</strong> ${checkboxOne}</p>
             <p><strong>Checkbox Two:</strong> ${checkboxTwo}</p>
             <p><strong>Checkbox Three:</strong> ${checkboxThree}</p>
             <p><strong>Checkbox Four:</strong> ${checkboxFour}</p>
             <p><strong>Page Idea:</strong> ${pageIdea}</p>
             <p><strong>Page Count:</strong> ${pageCount}</p>
             <p><strong>Revisions:</strong> ${revisions}</p>
             <p><strong>Existing Website:</strong> ${existingWebsite}</p>
             <p><strong>Timeline:</strong> ${timeline}</p>
             <p><strong>Domain:</strong> ${domain}</p>
             <p><strong>Extra Features:</strong> ${extraFeatures}</p>
             <p><strong>Long Term Developer:</strong> ${longTermDeveloper}</p>`,
    };

    await sgMail.send(emailContent);

    return res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    const message = (error as Error).message;
    console.error("Error detail:", message);
    return res.status(500).json({ error: `Error submitting form: ${message}` });
  }
}
