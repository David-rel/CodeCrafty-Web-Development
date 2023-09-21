import { useState } from "react";
import { api } from "~/utils/api";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

type Submission = {
  ai: boolean;
  maintenance: boolean;
  design: boolean;
  development: boolean;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  country: string;
  stateAndCity: string;
  companyName: string;
  instagramName: string;
  projectDescription: string;
  pageIdea: string;
  pageCount: string;
  revisions: string;
  existingWebsite: string;
  timeline: string;
  domain: string;
  extraFeatures: string;
  longTermDeveloper: string;
  createdAt: string;
  authorId: string;
  id: string;
  // Add other fields as necessary
};

function IndexPage() {
 const [password, setPassword] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);  // <-- Add this line
  const { data, isLoading, isError } = api.submission.all.useQuery<Submission[]>();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>An error occurred...</p>;

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (password !== process.env.NEXT_PUBLIC_PASSWORD) {
      alert("Invalid Password!");
      return;
    }
  };

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }


  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </form>

      {password === process.env.NEXT_PUBLIC_PASSWORD &&
        data.map((submission) => (
          <div
            key={submission.id}
            className="my-4 rounded-lg bg-white p-6 shadow-md"
          >
            <h1
              className="cursor-pointer text-3xl font-bold"
              onClick={() =>
                setExpandedId(
                  expandedId === submission.id ? null : submission.id
                )
              }
            >
              Submission ID: {submission.id}
            </h1>

            {expandedId === submission.id && (
              <>
                <p>
                  <strong>Author ID:</strong> {submission.authorId}
                </p>
                <p>
                  <strong>First Name:</strong> {submission.firstName}
                </p>
                <p>
                  <strong>Last Name:</strong> {submission.lastName}
                </p>
                <p>
                  <strong>Email:</strong> {submission.emailAddress}
                </p>
                <p>
                  <strong>Phone Number:</strong> {submission.phoneNumber}
                </p>
                <p>
                  <strong>Country:</strong> {submission.country}
                </p>
                <p>
                  <strong>State and City:</strong> {submission.stateAndCity}
                </p>
                <p>
                  <strong>Company Name:</strong> {submission.companyName}
                </p>
                <p>
                  <strong>Instagram Name:</strong> {submission.instagramName}
                </p>
                <p>
                  <strong>Project Description:</strong>{" "}
                  {submission.projectDescription}
                </p>
                <p>
                  <strong>Development:</strong>{" "}
                  {submission.development ? "yes" : "no"}
                </p>
                <p>
                  <strong>Design:</strong> {submission.design ? "yes" : "no"}
                </p>
                <p>
                  <strong>AI:</strong> {submission.ai ? "yes" : "no"}
                </p>
                <p>
                  <strong>Maintenance:</strong>{" "}
                  {submission.maintenance ? "yes" : "no"}
                </p>

                <p>
                  <strong>Created At:</strong>{" "}
                  {formatDate(submission.createdAt)}
                </p>
                <h3 className="pb-4 text-2xl font-bold">Extras</h3>
                <p>
                  <strong>Do they have a page count idea:</strong>{" "}
                  {submission.pageIdea}
                </p>
                <p>
                  <strong>How many pages:</strong> {submission.pageCount}
                </p>
                <p>
                  <strong>Do they want revisions:</strong>{" "}
                  {submission.revisions}
                </p>
                <p>
                  <strong>Do they have an existing website:</strong>{" "}
                  {submission.existingWebsite}
                </p>
                <p>
                  <strong>when od they want the website done:</strong>{" "}
                  {submission.timeline}
                </p>
                <p>
                  <strong>do they already have a domain:</strong>{" "}
                  {submission.domain}
                </p>
                <p>
                  <strong>extra features:</strong> {submission.extraFeatures}
                </p>
                <p>
                  <strong>do they want a long term dev:</strong>{" "}
                  {submission.longTermDeveloper}
                </p>
              </>
            )}
          </div>
        ))}

      <Footer />
    </div>
  );
}

export default IndexPage;
