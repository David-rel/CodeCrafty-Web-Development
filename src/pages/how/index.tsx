import React from "react";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

type Step = {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
};


const steps: Step[] = [
  {
    id: 1,
    title: "Step 1: Idea",
    description:
      "Every great website starts with a great idea. Think about what you want your website to achieve, and what design elements can help you reach those goals.",
    imgUrl: "/images/step1.png",
  },
  {
    id: 2,
    title: "Step 2: Design",
    description:
      "A well-designed website is an inviting one. Ensure your design is clean, modern, and easy to navigate.",
    imgUrl: "/images/step2.png",
  },
  {
    id: 3,
    title: "Step 3: Development",
    description:
      "The development stage is where your website comes to life. Good development practices ensure your site is functional, fast, and reliable.",
    imgUrl: "/images/step3.png",
  },
  {
    id: 3,
    title: "Step 4: Deployment",
    description:
      "The development stage is where your website comes to life. Good development practices ensure your site is functional, fast, and reliable.",
    imgUrl: "/images/step3.png",
  },

  // add more steps as needed...
];





export default function Index() {
  return (
    <>
      <Navbar />
      <div>
        <div className="pb-20 pt-8">
          <div className="container mx-auto flex w-full flex-col items-center justify-between px-6 md:flex-row lg:px-0">
            <div
              className="flex flex-col items-start justify-start px-2 lg:w-2/5 lg:px-0"
              data-aos="fade-up"
            >
              <div className="md:mt-3">
                <p className="text-3xl font-extrabold leading-9 text-gray-800 lg:text-4xl">
                  How Code Crafty Codes
                </p>
              </div>
              <div className="md:mt-3">
                <p className="text-sm leading-normal text-gray-600  lg:text-base">
                  Learn how CodeCrafty Designs and Developes your website based
                  on user use requests.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-y-6">
                <div>
                  <p className="text-sm font-medium leading-none text-gray-800  lg:text-base">
                    {" "}
                    <span className="font-semibold md:font-medium">
                      -Web Development
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium leading-none text-gray-800  lg:text-base">
                    <span className="font-semibold md:font-medium">
                      -Web Design
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium leading-none text-gray-800  lg:text-base">
                    <span className="font-semibold md:font-medium">
                      -Deployment
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium leading-none text-gray-800  lg:text-base">
                    -Backend Sustainability
                    <span className="font-semibold md:font-medium"></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center md:mt-0 lg:w-2/5">
              <img
                className="w-full"
                src="https://i.ibb.co/181DvLN/Project-Cover-6.png"
                alt="laptops"
              />
            </div>
          </div>
          <div className="container mx-auto mt-12 flex w-full flex-col items-start justify-between px-6 lg:px-0 xl:flex-row">
            <div className="flex flex-col items-start justify-start xl:w-2/4">
              <div>
                <h2
                  className="text-2xl font-bold leading-7 text-gray-800  lg:text-3xl"
                  data-aos="fade-up"
                >
                  The details
                </h2>
              </div>
              <div className="mt-8" data-aos="fade-up">
                <p className="text-sm leading-normal text-gray-800  lg:text-base">
                  Another writing challenge can be to take the individual
                  sentences in the random paragraph and incorporate a single
                  sentence from that into a new paragraph to create a short
                  story. Unlike the random sentence generator, the sentences
                  from the random paragraph will have some connection to one
                  another so it will be a bit different. You also won&apos;t
                  know exactly how many sentences will appear in the random
                  paragraph.Another writing challenge can be to take the
                  individual sentences in the random paragraph and incorporate a
                  single sentence from that into a new paragraph to create a
                  short story. Unlike the random sentence generator, the
                  sentences from the random paragraph will have some connection
                  to one another so it will be a bit different. You also
                  won&apos;t know exactly how many sentences will appear in the
                  random paragraph.
                </p>
              </div>
              <div className="mt-8 w-full">
                <img
                  className="w-full"
                  data-aos="fade-up"
                  src="https://i.ibb.co/X5br8Zg/Rectangle-44.png"
                  alt="office"
                />
              </div>
              <div
                className="mt-8 flex flex-col items-start justify-start"
                data-aos="fade-up"
              >
                <div>
                  <p className="text-sm font-semibold leading-none text-gray-800  lg:text-base">
                    Breakdown of milestones
                  </p>
                </div>
                <div className="mt-4 text-sm leading-normal text-gray-800  lg:text-base">
                  <ul>
                    <li className="flex flex-row items-start justify-start space-x-1">
                      <div>-</div>
                      <div>
                        Mauris ullamcorper neque sed mauris gravida, vel mollis
                        velit molestie.
                      </div>
                    </li>
                    <li className="flex flex-row items-start justify-start space-x-1">
                      <div>-</div>
                      <div>Donec iaculis erat in vulputate venenatis.</div>
                    </li>
                    <li className="flex flex-row items-start justify-start space-x-1">
                      <div>-</div>
                      <div>Vestibulum et velit et metus commodo iaculis.</div>
                    </li>
                    <li className="flex flex-row items-start justify-start space-x-1">
                      <div>-</div>
                      <div>
                        Sed et urna a felis accumsan commodo vel vel nibh.
                      </div>
                    </li>
                    <li className="flex flex-row items-start justify-start space-x-1">
                      <div>-</div>
                      <div>
                        Praesent sollicitudin nulla non sollicitudin varius.
                      </div>
                    </li>
                    <li className="flex flex-row items-start justify-start space-x-1">
                      <div>-</div>
                      <div>
                        Integer convallis orci sed diam volutpat feugiat.
                      </div>
                    </li>
                    <li className="flex flex-row items-start justify-start space-x-1">
                      - Donec posuere arcu non semper maximus.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="mt-10 flex h-full w-full items-center justify-center bg-gradient-to-l from-rose-600 to-rose-400 px-4 md:px-0 md:px-8 lg:px-16 xl:mt-0 xl:w-2/5"
              data-aos="fade-up"
            >
              <div className="my-10 flex flex-col items-center justify-center lg:items-start lg:justify-start">
                <div>
                  <p className="text-center text-lg font-semibold leading-normal text-white md:text-2xl lg:text-left">
                    Start building with CodeCrafty
                  </p>
                </div>
                <div className="mt-8">
                  <p className="text-center text-xs leading-normal text-white md:text-base lg:text-left">
                    If you&apos;re looking for random facts, you&apos;ve arrived
                    at the correct webpage. The Random Fact Generator has
                    thousands of facts ready to be revealed with a simple click
                    of a mouse.
                  </p>
                </div>
                <div className="mt-8 flex flex-row items-center justify-start space-x-4">
                  <div>
                    <button className="btn rounded-sm border border-white bg-white px-4 py-2 text-xs text-rose-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 md:px-8 md:py-4 lg:text-base">
                      Start Building
                    </button>
                  </div>
                  <div>
                    <button className="btn rounded-sm border border-white px-4 py-2 text-xs text-white hover:bg-white hover:text-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 md:px-8 md:py-4 lg:text-base">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="pb-16 pl-48 text-2xl font-bold  leading-7 text-gray-800 lg:text-3xl">
          The Super Simple Process
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {steps.map(({ id, title, description, imgUrl }) => (
          <div key={id} className="w-full p-4 sm:w-1/2" data-aos="fade-up">
            <div className="flex flex-col items-center text-center">
              <img
                className="mb-4 h-64 w-full object-cover"
                src={imgUrl}
                alt={title}
              />
              <h2 className="mb-2 font-bold">{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
