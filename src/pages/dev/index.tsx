import { useEffect, useState } from "react";
import { api } from "~/utils/api";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

type Submission = {
  createdAt: string;
  pages: boolean | null;
  complexity: string | null;
  revisions: boolean | null;
  database: boolean | null;
  storage: boolean | null;
  userBase: boolean | null;
  description: string | null;
  monthly: boolean | null;
  design: boolean | null;
  databaseScale: boolean | null;
  storageScale: boolean | null;
  userScale: boolean | null;
  cost: number | null;
  authorId: string;
  id: string;
  // Add other fields as necessary
};

function IndexPage() {
  const [password, setPassword] = useState("");
  const { data, isLoading, isError } =
    api.submission.all.useQuery<Submission[]>();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>An error occurred...</p>;

  const handleSubmit = (e: { preventDefault: () => void; }) => {
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
        data.map((submission, index) => {
          return (
            <div>
              <h1 className="text-3xl font-bold">Your Submissions</h1>

              <div
                key={index}
                className="my-4 rounded-lg bg-white p-6 shadow-md"
              >
                <p className="text-lg font-semibold">
                  <strong>Submission ID:</strong> {submission.id}
                </p>
                <p>
                  <strong>Complexity:</strong> {submission.complexity}
                </p>
                <p>
                  <strong>Revisions:</strong>{" "}
                  {submission.revisions ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Pages:</strong> {submission.pages ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Database:</strong>{" "}
                  {submission.database ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Storage:</strong> {submission.storage ? "Yes" : "No"}
                </p>
                <p>
                  <strong>User Base:</strong>{" "}
                  {submission.userBase ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Monthly:</strong> {submission.monthly ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Design:</strong> {submission.design ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Database Scale:</strong>{" "}
                  {submission.databaseScale ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Storage Scale:</strong>{" "}
                  {submission.storageScale ? "Yes" : "No"}
                </p>
                <p>
                  <strong>User Scale:</strong>{" "}
                  {submission.userScale ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Cost:</strong> {submission.cost}
                </p>
                <p>
                  <strong>Created At:</strong>{" "}
                  {formatDate(submission.createdAt)}
                </p>

                <p>
                  <strong>Description:</strong> {submission.description}
                </p>
              </div>
            </div>
          );
        })}

      <Footer />
    </div>
  );
}

export default IndexPage;
