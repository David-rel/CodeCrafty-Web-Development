import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

interface AddOn {
  name: string;
  cost: number;
  scaleable: boolean;
  monthlyCost?: number; // Added monthlyCost for scalable items
}

const ADD_ONS: AddOn[] = [
  { name: "More revisions", cost: 30, scaleable: false },
  { name: "More pages", cost: 30, scaleable: false },
  { name: "Need a database", cost: 100, scaleable: true, monthlyCost: 100 }, // Cost is back
  { name: "Need a user base", cost: 50, scaleable: true, monthlyCost: 50 }, // Cost is back
  { name: "Need storage", cost: 100, scaleable: true, monthlyCost: 100 }, // Cost is back
  { name: "Want a domain", cost: 20, scaleable: false },
  { name: "Monthly checkups", cost: 20, scaleable: false },
];

function CustomizePage() {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [monthlyBill, setMonthlyBill] = useState<Record<string, number>>({}); // Changed from number to object
  const [extraPages, setExtraPages] = useState(0);
  const [extraRevisions, setExtraRevisions] = useState(0);
  const [monthlyCheckups, setMonthlyCheckups] = useState(0); // Added this line
  const [hasDesign, setHasDesign] = useState(false);

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




  const basePrice = type === "basic" ? 200 : type === "pro" ? 400 : 600;
const totalCost =
  selectedAddOns.reduce(
    (sum, addOn) => sum + ADD_ONS.find((item) => item.name === addOn)?.cost!,
    basePrice
  ) - (hasDesign ? 200 : 0);


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
            <div key={addOn.name} className="mb-4">
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
                <label className="ml-6 flex items-center">
                  <input
                    type="checkbox"
                    checked={!!monthlyBill[addOn.name]}
                    onChange={() =>
                      toggleScaleOption(addOn.name, addOn.monthlyCost!)
                    }
                    className="form-checkbox h-5 w-5 text-rose-600"
                  />
                  <span className="ml-2 text-gray-700">
                    Does it need to scale? (+ monthly bill)
                  </span>
                </label>
              )}
            </div>
          ))}
          <div className="mb-4">
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

          <div className="mt-6 flex items-center justify-end">
            <Link href="/build/checkout">
              <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                Send Website Request
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default CustomizePage;
