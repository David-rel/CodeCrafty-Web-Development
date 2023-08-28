import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { api } from "../../../utils/api";
import { useSession } from "next-auth/react";

interface TooltipProps {
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text }) => (
  <span
    className="absolute z-10 rounded-lg bg-black p-1 text-xs text-white opacity-0 group-hover:opacity-100"
    style={{ top: "-25px", left: "10%", transform: "translateX(-50%)" }}
  >
    {text}
  </span>
);

interface AddOn {
  name: string;
  cost: number;
  scaleable: boolean;
  monthlyCost?: number; // Added monthlyCost for scalable items
  description: string;
  scaleDescription?: string;
}

const ADD_ONS: AddOn[] = [
  {
    name: "More revisions",
    cost: 50,
    scaleable: false,
    description:
      "pays the developer to update the website when you want them to",
  },
  {
    name: "More pages",
    cost: 75,
    scaleable: false,
    description: "add more pages to your site",
  },
  {
    name: "Need a database",
    cost: 200,
    scaleable: true,
    monthlyCost: 200,
    description: "you need to store any data of any type",
    scaleDescription: "if you need more room for storing data (recommended)",
  }, // Cost is back
  {
    name: "Need a user base",
    cost: 150,
    scaleable: true,
    monthlyCost: 150,
    description: "need to authenticated users and keep track of that",
    scaleDescription: "if you need more room for storing users (recommended)",
  }, // Cost is back
  {
    name: "Need storage",
    cost: 150,
    scaleable: true,
    monthlyCost: 150,
    description: "need to store videos files or photos",
    scaleDescription: "if you need more room for storing files (recommended)",
  }, // Cost is back
  {
    name: "Want a domain",
    cost: 20,
    scaleable: false,
    description: "want a special .com domain",
  },
  {
    name: "Monthly checkups",
    cost: 50,
    scaleable: false,
    description: "want the developer to checkup on the site every month",
  },
];

function CustomizePage() {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [monthlyBill, setMonthlyBill] = useState<Record<string, number>>({}); // Changed from number to object
  const [extraPages, setExtraPages] = useState(0);
  const [extraRevisions, setExtraRevisions] = useState(0);
  const [monthlyCheckups, setMonthlyCheckups] = useState(0); // Added this line
  const [hasDesign, setHasDesign] = useState(false);
  const [websiteDescription, setWebsiteDescription] = useState("");
  const { data: sessionData } = useSession();

  const router = useRouter();
  const { type } = router.query;
  const toggleAddOn = (addOnName: string, cost: number) => {
    const isCurrentlySelected = selectedAddOns.includes(addOnName);

    setSelectedAddOns((prevSelectedAddOns) =>
      isCurrentlySelected
        ? prevSelectedAddOns.filter((addOn) => addOn !== addOnName)
        : [...prevSelectedAddOns, addOnName]
    );

    if (addOnName === "More pages") {
      setExtraPages(isCurrentlySelected ? 0 : cost);
    } else if (addOnName === "More revisions") {
      setExtraRevisions(isCurrentlySelected ? 0 : cost);
    } else if (addOnName === "Monthly checkups") {
      setMonthlyCheckups(isCurrentlySelected ? 0 : cost); // Added this line
    }

    const addOn = ADD_ONS.find((addOn) => addOn.name === addOnName);

    if (isCurrentlySelected && addOn?.monthlyCost) {
      setMonthlyBill((prevMonthlyBill) => ({
        ...prevMonthlyBill,
        [addOnName]: 0,
      }));
    }
  };

  const toggleScaleOption = (addOnName: string, cost: number) => {
    setMonthlyBill((prevMonthlyBill) => ({
      ...prevMonthlyBill,
      [addOnName]: prevMonthlyBill[addOnName] ? 0 : cost,
    }));
  };

  const basePrice = type === "basic" ? 500 : type === "pro" ? 700 : 800;
  const totalCost =
    selectedAddOns.reduce(
      (sum, addOn) =>
        sum + (ADD_ONS.find((item) => item.name === addOn)?.cost ?? 0),
      basePrice
    ) - (hasDesign ? 200 : 0);

  const createSubmission = api.submission.create.useMutation({
    onSuccess: () => {
      void refetchNotes();
    },
  });

  const handleSubmit = () => {
    if (sessionData) {
      let complexity;
      if (typeof type === "string") {
        complexity = type;
      }

      const submissionData = {
        complexity: complexity, // assuming 'pro' and 'premium' are complex
        revisions: extraRevisions > 0,
        pages: extraPages > 0,
        database: selectedAddOns.includes("Need a database"),
        storage: selectedAddOns.includes("Need storage"),
        userBase: selectedAddOns.includes("Need a user base"),
        description: websiteDescription,
        monthly:
          monthlyCheckups > 0 ||
          Object.values(monthlyBill).some((value) => value > 0),
        design: hasDesign,
        databaseScale:
          selectedAddOns.includes("Need a database") &&
          !!monthlyBill["Need a database"],
        storageScale:
          selectedAddOns.includes("Need storage") &&
          !!monthlyBill["Need storage"],
        userScale:
          selectedAddOns.includes("Need a user base") &&
          !!monthlyBill["Need a user base"],
        cost: totalCost,
      };
      createSubmission.mutate(submissionData);
      alert("Request Submitted");
    } else {
      alert("You must be logged in to submit a request");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl space-y-8 rounded-lg bg-white p-10 shadow-md">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Customize {type}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Base price: ${basePrice}
            </p>
          </div>
          <form className="mt-8 space-y-6">
            {ADD_ONS.map((addOn) => (
              <div key={addOn.name} className="group relative mb-4">
                <Tooltip text={addOn.description} />
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedAddOns.includes(addOn.name)}
                    onChange={() => toggleAddOn(addOn.name, addOn.cost)}
                    className="form-checkbox h-5 w-5 text-rose-600"
                  />
                  <span className="ml-2 text-gray-700">
                    {addOn.name} (+${addOn.cost})
                  </span>
                </label>
                {addOn.scaleable && selectedAddOns.includes(addOn.name) && (
                  <div className="group relative ml-6">
                    <Tooltip text={addOn.scaleDescription || ""} />
                    <label className="ml-6 flex items-center">
                      <input
                        type="checkbox"
                        checked={!!monthlyBill[addOn.name]}
                        onChange={() => {
                          if (addOn.monthlyCost) {
                            toggleScaleOption(addOn.name, addOn.monthlyCost);
                          }
                        }}
                        className="form-checkbox h-5 w-5 text-rose-600"
                      />
                      <span className="ml-2 text-gray-700">
                        Does it need to scale? (+ monthly bill)
                      </span>
                    </label>
                  </div>
                )}
              </div>
            ))}
            <div className="group relative mb-4">
              <Tooltip text={"If you already have a design for your site"} />

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={hasDesign}
                  onChange={() => setHasDesign(!hasDesign)}
                  className="form-checkbox h-5 w-5 text-rose-600"
                />
                <span className="ml-2 text-gray-700">
                  Already have a design (-$200)
                </span>
              </label>
            </div>
            <div className="text-right text-sm text-gray-700">
              <span className="">Base price: </span>
              <span className="">${basePrice}</span>
              <br />
              {hasDesign && (
                <>
                  <span className="text-sm text-gray-600">
                    Already have a design: -$200
                  </span>
                  <br />
                </>
              )}
              {extraPages > 0 && (
                <>
                  <span className="text-sm text-gray-600">
                    More pages: +${extraPages} per page needed
                  </span>
                  <br />
                </>
              )}
              {extraRevisions > 0 && (
                <>
                  <span className="text-sm text-gray-600">
                    More revisions: +${extraRevisions} per revision needed
                  </span>
                  <br />
                </>
              )}
              {monthlyCheckups > 0 && (
                <>
                  <span className="text-sm text-gray-600">
                    Monthly checkups: +${monthlyCheckups} a month
                  </span>
                  <br />
                </>
              )}
              {(monthlyBill["Need a database"] || 0) > 0 && (
                <>
                  <span className="text-sm text-gray-600">
                    + monthly bill for database
                  </span>
                  <br />
                </>
              )}
              {(monthlyBill["Need storage"] || 0) > 0 && (
                <>
                  <span className="text-sm text-gray-600">
                    + monthly bill for storage
                  </span>
                  <br />
                </>
              )}
              {(monthlyBill["Need a user account"] || 0) > 0 && (
                <>
                  <span className="text-sm text-gray-600">
                    + monthly bill for user account
                  </span>
                  <br />
                </>
              )}
              <span className="text-sm text-gray-600">Total: </span>
              <span className="text-lg font-semibold text-rose-600">
                ${totalCost}
              </span>
            </div>
            <div className="mb-4">
              <label className="text-md block font-medium text-gray-700">
                Website Description
              </label>
              <p className="text-sm">
                What is the name of the website, what is the color scheme, what
                type of website is it and other important information we might
                need to build it.
              </p>
              <textarea
                onChange={(e) => setWebsiteDescription(e.target.value)}
                value={websiteDescription}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-rose-500 focus:outline-none focus:ring-rose-500 sm:text-sm"
              />
            </div>
            Note: You must be logged in to submit a request and price may vary based on complexity. You will get contacted by a developer to discuss the website within 24 hours of requesting.
            <div className="mt-6 flex items-center justify-end">
              <button
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                onClick={handleSubmit}
              >
                Send Website Request
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CustomizePage;
function refetchNotes() {
  throw new Error("Function not implemented.");
}
