import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookies from "js-cookie";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

interface FormSubmission {
  Id: number;
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  PhoneNumber: string;
  Country: string;
  StateAndCity: string;
  CompanyName: string;
  InstagramName: string;
  ProjectDescription: string;
  CheckboxOne: boolean;
  CheckboxTwo: boolean;
  CheckboxThree: boolean;
  CheckboxFour: boolean;
  PageIdea: string;
  PageCount: number;
  Revisions: string;
  ExistingWebsite: string;
  Timeline: string;
  Domain: string;
  ExtraFeatures: string;
  LongTermDeveloper: string;
}

export default function Dashboard() {
  const [data, setData] = useState<FormSubmission[]>([]);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const token = cookies.get("token");
    console.log("Token:", token);
    if (token !== "loggedin") {
      router.push("/dev/login");
    } else {
      fetchData();
    }
  }, [router]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/getData");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
    } catch (error: unknown) {
      setError((error as Error).message);
    }
  };

  const handleLogout = () => {
    cookies.remove("token");
    router.push("/dev/login");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="flex items-center justify-between">
          <h1 className="py-10 text-center text-4xl">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
          >
            Logout
          </button>
        </div>
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="space-y-4">
          {data.map((submission) => (
            <div key={submission.Id} className="rounded-lg bg-white shadow-md">
              <input
                type="checkbox"
                id={`accordion-${submission.Id}`}
                className="hidden"
              />
              <label
                htmlFor={`accordion-${submission.Id}`}
                className="block cursor-pointer border-b p-4 text-lg font-semibold"
              >
                {submission.FirstName} {submission.LastName} -{" "}
                {submission.CompanyName}
              </label>
              <div className="accordion-content max-h-0 overflow-hidden transition-all">
                <div className="p-4">
                  <p>
                    <strong>Email:</strong> {submission.EmailAddress}
                  </p>
                  <p>
                    <strong>Phone:</strong> {submission.PhoneNumber}
                  </p>
                  <p>
                    <strong>Country:</strong> {submission.Country}
                  </p>
                  <p>
                    <strong>State & City:</strong> {submission.StateAndCity}
                  </p>
                  <p>
                    <strong>Instagram:</strong> {submission.InstagramName}
                  </p>
                  <p>
                    <strong>Project Description:</strong>{" "}
                    {submission.ProjectDescription}
                  </p>
                  <p>
                    <strong>Checkboxes:</strong>{" "}
                    {submission.CheckboxOne ? "Development, " : ""}
                    {submission.CheckboxTwo ? "Design, " : ""}
                    {submission.CheckboxThree ? "AI Integration, " : ""}
                    {submission.CheckboxFour ? "Maintenance" : ""}
                  </p>
                  <p>
                    <strong>Page Idea:</strong> {submission.PageIdea}
                  </p>
                  <p>
                    <strong>Page Count:</strong> {submission.PageCount}
                  </p>
                  <p>
                    <strong>Revisions:</strong> {submission.Revisions}
                  </p>
                  <p>
                    <strong>Existing Website:</strong>{" "}
                    {submission.ExistingWebsite}
                  </p>
                  <p>
                    <strong>Timeline:</strong> {submission.Timeline}
                  </p>
                  <p>
                    <strong>Domain:</strong> {submission.Domain}
                  </p>
                  <p>
                    <strong>Extra Features:</strong> {submission.ExtraFeatures}
                  </p>
                  <p>
                    <strong>Long Term Developer:</strong>{" "}
                    {submission.LongTermDeveloper}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
