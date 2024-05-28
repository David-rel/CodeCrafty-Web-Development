import React, { FormEvent, useState } from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaInstagram,
  FaGlobeAmericas,
  FaCity,
} from "react-icons/fa"; // Importing icons
import Head from "next/head";

function Build() {
  const [pageIdea, setPageIdea] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [revisions, setRevisions] = useState("");
  const [existingWebsite, setExistingWebsite] = useState("");
  const [timeline, setTimeline] = useState("");
  const [domain, setDomain] = useState("");
  const [extraFeatures, setExtraFeatures] = useState("");
  const [longTermDeveloper, setLongTermDeveloper] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [stateAndCity, setStateAndCity] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [instagramName, setInstagramName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const [checkboxOne, setCheckboxOne] = useState(false);
  const [checkboxTwo, setCheckboxTwo] = useState(false);
  const [checkboxThree, setCheckboxThree] = useState(false);
  const [checkboxFour, setCheckboxFour] = useState(false);

  const englishSpeakingCountries = [
    "Australia",
    "Canada",
    "Ireland",
    "New Zealand",
    "United Kingdom",
    "United States",
    // ... add other English-speaking countries if needed
  ];

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    const formData = {
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
      pageCount: pageCount ? parseInt(pageCount) : null,
      revisions,
      existingWebsite,
      timeline,
      domain,
      extraFeatures,
      longTermDeveloper,
    };

    try {
      const response = await fetch("/api/addData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        alert("Form submitted successfully");
        setPageIdea("");
        setPageCount("");
        setRevisions("");
        setExistingWebsite("");
        setTimeline("");
        setDomain("");
        setExtraFeatures("");
        setLongTermDeveloper("");
        setFirstName("");
        setLastName("");
        setEmailAddress("");
        setPhoneNumber("");
        setCountry("");
        setStateAndCity("");
        setCompanyName("");
        setInstagramName("");
        setProjectDescription("");
        setCheckboxOne(false);
        setCheckboxTwo(false);
        setCheckboxThree(false);
        setCheckboxFour(false);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <Navbar />
      <Head>
        <title>Code Crafty - Submit a request</title>
      </Head>

      <div className="container mx-auto mt-10 max-w-4xl px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="mx-auto">
          <div className="space-y-4 rounded-lg p-6">
            <h2 className="mb-4 text-center font-merriweather text-4xl text-rose-700">
              Get Your Estimation
            </h2>
            <h2 className="text-black-700 pb-8 text-center font-merriweather text-lg">
              Fields marked with an * are required
            </h2>
            <div className="space-y-8 font-merriweather">
              <div className="mx-auto flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <div className="relative w-full">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 transform text-xl text-rose-700" />
                  <input
                    className="h-16 w-full rounded-full border p-2 pl-10 text-xl" // Added padding-left for the icon
                    type="text"
                    placeholder="First Name*"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="relative w-full">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 transform text-xl text-rose-700" />
                  <input
                    className="h-16 w-full rounded-full border p-2 pl-10 text-xl"
                    type="text"
                    placeholder="Last Name*"
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="mx-auto flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <div className="relative w-full">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 transform text-xl text-rose-700" />
                  <input
                    className="h-16 w-full rounded-full border p-2 pl-10 text-xl"
                    type="email"
                    placeholder="Email*"
                    required
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                </div>
                <div className="relative w-full">
                  <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 transform text-xl text-rose-700" />
                  <input
                    className="h-16 w-full rounded-full border p-2 pl-10 text-xl"
                    type="tel"
                    placeholder="Phone Number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="mx-auto flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <div className="relative w-full">
                  <FaGlobeAmericas className="absolute left-4 top-1/2 -translate-y-1/2 transform text-xl text-rose-700" />
                  <select
                    className="h-16 w-full rounded-full border p-2 pl-10 text-xl"
                    value={country}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setCountry(e.target.value)
                    }
                    required
                  >
                    <option value="">Select Country*</option>
                    {englishSpeakingCountries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative w-full">
                  <FaCity className="absolute left-4 top-1/2 -translate-y-1/2 transform text-xl text-rose-700" />
                  <input
                    className="h-16 w-full rounded-full border p-2 pl-10 text-xl"
                    type="text"
                    placeholder="State & City*"
                    required
                    onChange={(e) => setStateAndCity(e.target.value)}
                  />
                </div>
              </div>

              <div className="mx-auto flex items-center justify-center space-x-8">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 h-6 w-6"
                    checked={checkboxOne}
                    onChange={(e) => setCheckboxOne(e.target.checked)}
                  />
                  <label>Development</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 h-6 w-6"
                    checked={checkboxTwo}
                    onChange={(e) => setCheckboxTwo(e.target.checked)}
                  />
                  <label>Design</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 h-6 w-6"
                    checked={checkboxThree}
                    onChange={(e) => setCheckboxThree(e.target.checked)}
                  />
                  <label>AI Integration</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 h-6 w-6"
                    checked={checkboxFour}
                    onChange={(e) => setCheckboxFour(e.target.checked)}
                  />
                  <label>Maintenance</label>
                </div>
              </div>

              <div className="mx-auto flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <div className="relative w-full">
                  <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 transform text-xl text-rose-700" />
                  <input
                    className="h-16 w-full rounded-full border p-2 pl-10 text-xl"
                    type="text"
                    placeholder="Company Name"
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className="relative w-full">
                  <FaInstagram className="absolute left-4 top-1/2 -translate-y-1/2 transform text-xl text-rose-700" />
                  <input
                    className="h-16 w-full rounded-full border p-2 pl-10 text-xl"
                    type="text"
                    placeholder="Instagram Name"
                    onChange={(e) => setInstagramName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mx-auto flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <div className="mb-4 h-40 w-3/4 rounded-lg border text-lg">
                  <textarea
                    className="h-full w-full p-2"
                    placeholder="Project Description*"
                    required
                    maxLength={250} // Limit to 250 characters
                    style={{ resize: "none" }}
                    onChange={(e) => setProjectDescription(e.target.value)}
                  ></textarea>
                  <p>length: {projectDescription.length}/250</p>{" "}
                </div>
                {/* Display character count */}
                <div className="flex w-2/3 items-start p-4">
                  <input
                    className="mr-4 h-6 w-24 rounded-full border p-1"
                    type="checkbox"
                    required
                    defaultChecked // Checkbox is initially checked
                  />
                  <p className="text-md font-montserrat text-gray-500">
                    By supplying my contact information, I authorize the company
                    representative to contact me with personalized
                    communications like Emails / Call / SMS / Text towards this
                    Query / Application and other products / services. This
                    consent overrides my registration for DNC / NDNC / GDPR. *
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-8 rounded-lg p-6">
            <h2 className="mb-4 pb-4 text-center font-merriweather text-4xl text-rose-700">
              Extra Questions for Website (optional)
            </h2>
            <div className="space-y-8 font-merriweather">
              <div className="mx-auto flex w-2/3 flex-col items-start space-y-6 align-middle">
                <span className="mb-4 text-2xl">
                  I have an idea on how many pages:
                </span>
                <div className="flex items-center space-x-6">
                  <input
                    type="radio"
                    name="pageIdea"
                    value="yes"
                    onChange={() => setPageIdea("yes")}
                    checked={pageIdea === "yes"}
                  />
                  <span className="text-xl">I do</span>
                </div>
                {pageIdea === "yes" && (
                  <input
                    className="mt-2 rounded border p-2 text-xl"
                    type="number"
                    placeholder="Number of pages"
                    value={pageCount}
                    onChange={(e) => setPageCount(e.target.value)}
                  />
                )}
                <div className="flex items-center space-x-6">
                  <input
                    type="radio"
                    name="pageIdea"
                    value="no"
                    onChange={() => setPageIdea("no")}
                    checked={pageIdea === "no"}
                  />
                  <span className="text-xl">I don&apos;t know</span>
                </div>
                <div className="flex items-center space-x-6">
                  <input
                    type="radio"
                    name="pageIdea"
                    value="idea"
                    onChange={() => setPageIdea("idea")}
                    checked={pageIdea === "idea"}
                  />
                  <span className="text-xl">I have an idea</span>
                </div>
                <button
                  className="mt-2 rounded bg-red-500 p-2 text-white"
                  type="button"
                  onClick={() => {
                    setPageIdea("");
                    setPageCount("");
                  }}
                >
                  Clear Selection
                </button>
              </div>
              <div className="space-y-8 font-merriweather">
                <div className="mx-auto flex w-2/3 flex-col items-start space-y-6 align-middle">
                  <span className=" text-2xl">Do you require revisions?</span>
                  <div className="flex items-center space-x-6">
                    <input
                      type="radio"
                      name="revisions"
                      value="yes"
                      onChange={() => setRevisions("yes")}
                      checked={revisions === "yes"}
                    />
                    <span className="text-xl">Yes</span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <input
                      type="radio"
                      name="revisions"
                      value="no"
                      onChange={() => setRevisions("no")}
                      checked={revisions === "no"}
                    />
                    <span className="text-xl">No</span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <input
                      type="radio"
                      name="revisions"
                      value="no"
                      onChange={() => setRevisions("unknown")}
                      checked={revisions === "unknown"}
                    />
                    <span className="text-xl">I don&apos;t know</span>
                  </div>
                  <button
                    className="mt-2 rounded bg-red-500 p-2 text-white"
                    type="button"
                    onClick={() => {
                      setRevisions("");
                    }}
                  >
                    Clear Selection
                  </button>
                  <span className="mb-4 text-2xl">
                    Do you already have a website and need a redesign?
                  </span>
                  <div className="flex items-center space-x-6">
                    <input
                      type="radio"
                      name="existingWebsite"
                      value="yes"
                      onChange={() => setExistingWebsite("yes")}
                      checked={existingWebsite === "yes"}
                    />
                    <span className="text-xl">Yes</span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <input
                      type="radio"
                      name="existingWebsite"
                      value="no"
                      onChange={() => setExistingWebsite("no")}
                      checked={existingWebsite === "no"}
                    />
                    <span className="text-xl">No</span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <input
                      type="radio"
                      name="existingWebsite"
                      value="no"
                      onChange={() => setExistingWebsite("unknown")}
                      checked={existingWebsite === "unknown"}
                    />
                    <span className="text-xl">I don&apos;t know</span>
                  </div>
                  <button
                    className="mt-2 rounded bg-red-500 p-2 text-white"
                    type="button"
                    onClick={() => {
                      setExistingWebsite("");
                    }}
                  >
                    Clear Selection
                  </button>
                  <span className="mb-4 text-2xl">
                    How quickly do you need the site done?
                  </span>
                  <select
                    className="h-16 w-full rounded-full border p-2 text-xl"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                  >
                    <option value="1_week">1 month</option>
                    <option value="2_weeks">2 months</option>
                    <option value="1_month">3 months</option>
                    <option value="more_than_month">More than 3 months</option>
                  </select>
                  <span className="mb-4 text-2xl">
                    Do you already have a domain (e.g., codecrafty.dev,
                    google.com)?
                  </span>
                  <input
                    className="h-16 w-full rounded-full border p-2 text-xl"
                    type="text"
                    placeholder="Enter your domain or leave blank if none"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                  />
                  <span className="mb-4 text-2xl">
                    Is there any other extra features that you will want put on
                    apart from what said above?
                  </span>
                  <textarea
                    className="h-40 w-full rounded-lg border p-2 text-xl"
                    placeholder="Describe any extra features"
                    value={extraFeatures}
                    onChange={(e) => setExtraFeatures(e.target.value)}
                  ></textarea>
                  <span className="mb-4 text-2xl">
                    Are you looking for a long-term developer?
                  </span>
                  <div className="flex items-center space-x-6">
                    <input
                      type="radio"
                      name="longTermDeveloper"
                      value="yes"
                      onChange={() => setLongTermDeveloper("yes")}
                      checked={longTermDeveloper === "yes"}
                    />
                    <span className="text-xl">Yes</span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <input
                      type="radio"
                      name="longTermDeveloper"
                      value="no"
                      onChange={() => setLongTermDeveloper("no")}
                      checked={longTermDeveloper === "no"}
                    />
                    <span className="text-xl">No</span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <input
                      type="radio"
                      name="longTermDeveloper"
                      value="no"
                      onChange={() => setLongTermDeveloper("unknown")}
                      checked={longTermDeveloper === "unknown"}
                    />
                    <span className="text-xl">I don&apos;t know</span>
                  </div>
                  <button
                    className="mt-2 rounded bg-red-500 p-2 text-white"
                    type="button"
                    onClick={() => {
                      setLongTermDeveloper("");
                    }}
                  >
                    Clear Selection
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5">
            <button
              type="submit"
              className="rounded-lg border-4 border-black bg-white px-5 py-3 text-sm font-semibold tracking-wider text-rose-600 duration-150 ease-in hover:bg-rose-700 hover:text-white hover:opacity-90 md:px-10 md:py-5 md:text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Build;
function refetchNotes() {
  throw new Error("Function not implemented.");
}
