import React from "react";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

type Step = {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Step 1: Ideation and Creation",
    description:
      "This is the foundational phase. Here, we embark on the journey of transforming your abstract idea into a tangible concept. It all begins with envisioning the core purpose and potential of your website. Share those initial thoughts.",
    imgUrl: "/step1.jpeg",
  },
  {
    id: 2,
    title: "Step 2: Design/Development",
    description:
      "Transitioning from ideation, this step focuses on crafting the aesthetics and structure. Using your vision as our guide, we'll create a design that resonates with your objectives. The development then ensures that the design turns into a user-friendly experience.",
    imgUrl: "/step2.png",
  },
  {
    id: 3,
    title: "Step 3: AI Integration",
    description:
      "In this age of technology, incorporating AI can elevate your website's capabilities. We seamlessly integrate advanced AI solutions to ensure your site is not just functional, but also ahead of the curve, offering unparalleled user experiences.",
    imgUrl: "/step3.png",
  },
  {
    id: 4,
    title: "Step 4: Deployment and Maintenance",
    description:
      "The culmination of our collective efforts sees your website go live. But our journey doesn't end there. We'll be with you, ensuring smooth sailing with regular checks and maintenance, making sure your site remains optimal.",
    imgUrl: "/step4.png",
  },

  // add more steps as needed...
];

export default function Index() {
  return (
    <>
    <Head>
      <title>Code Crafty - How We Do it</title>
    </Head>
      <Navbar />
      <div className="font-montserrat">
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
                <p className="font-merriweather text-sm leading-normal  text-gray-600 lg:text-base">
                  Learn how CodeCrafty Designs and Developes your website based
                  on user use requests.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-y-6">
                <div>
                  <p className="text-sm font-medium leading-none text-gray-800  underline lg:text-base">
                    {" "}
                    <Link href="/services/design">
                      <span className="font-semibold md:font-medium">
                        -Web Design
                      </span>
                    </Link>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium leading-none text-gray-800  underline lg:text-base">
                    <Link href="/services/development">
                      <span className="font-semibold md:font-medium">
                        -Web Development
                      </span>
                    </Link>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium leading-none text-gray-800  underline lg:text-base">
                    <Link href="/services/ai">
                      <span className="font-semibold md:font-medium">
                        -AI Integration
                      </span>
                    </Link>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium leading-none text-gray-800  underline lg:text-base">
                    <Link href="/services/maintenance">
                      <span className="font-semibold md:font-medium">
                        -Web Maintenance
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center md:mt-0 lg:w-2/5">
              <div className="w-full">
                {" "}
                <Image
                  src="/test4.jpeg"
                  alt="laptops"
                  width={1000}
                  height={500}
                />
              </div>
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
               
                <div className="mt-8" data-aos="fade-up">
                  <p className="font-merriweather text-sm leading-normal  text-gray-800 lg:text-base">
                    Every groundbreaking website begins with a vision. When
                    you&apos;re fueled by an idea and seek a web development partner
                    to bring it to life, that&apos;s where we shine. Simply submit
                    your requirements, and in no time, our enthusiastic team
                    will be in touch, eager to kickstart your digital dream. Our
                    collaboration ensures your vision is articulated perfectly,
                    from design to deployment. We manage both backend and
                    frontend, ensuring that the only feedback loop required is
                    between you and us.
                  </p>
                  <p className="pt-2 font-merriweather text-sm  leading-normal text-gray-800 lg:text-base">
                    Enhance your digital presence with our optional AI
                    integration. By analyzing user interactions, we devise
                    strategies to captivate your audience further, including the
                    deployment of chat bots, potentially eliminating the need for
                    extensive support teams. Additionally, with our web
                    maintenance package, leave the tech nitty-gritty to us.
                    We&apos;ll ensure your website runs seamlessly, sparing you the
                    quest of finding a separate developer for upkeep.
                  </p>
                </div>
              </div>
              <div className="mt-8 w-full">
                <div className="w-full">
                  <Image
                    data-aos="fade-up"
                    src="/test3.png"
                    alt="office"
                    width={1000}
                    height={500}
                  />
                </div>
              </div>
            </div>
            <div
              className="mt-10 flex h-full w-full items-center justify-center bg-gradient-to-l from-rose-600 to-rose-400 px-4 md:px-8 lg:px-16 xl:mt-0 xl:w-2/5"
              data-aos="fade-up"
            >
              <div className="my-10 flex flex-col items-center justify-center lg:items-start lg:justify-start">
                <div>
                  <p className="text-center text-lg font-semibold leading-normal text-white md:text-2xl lg:text-left">
                    Start building with CodeCrafty
                  </p>
                </div>
                <div className="mt-8">
                  <p className="text-center font-merriweather text-xs leading-normal text-white md:text-base lg:text-left">
                    Do you think CodeCrafty is what you are looking for and you
                    are ready to start building with this company. contact us or
                    start the process of building your best dream website.
                  </p>
                </div>
                <div className="mt-8 flex flex-row items-center justify-start space-x-4">
                  <div>
                    <Link href="build">
                      <button className="btn rounded-sm border border-white bg-white px-4 py-2 text-xs text-rose-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 md:px-8 md:py-4 lg:text-base">
                        Start Building
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link href="/about/contact"></Link>
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
        <h2 className="pb-16 text-4xl font-bold  leading-7 text-gray-800 lg:text-6xl text-center">
          The Super Simple Process
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {steps.map(({ id, title, description, imgUrl }) => (
          <div key={id} className="w-3/4 p-4 lg:w-1/4" data-aos="fade-up">
            <div className="flex flex-col items-center text-center font-merriweather">
              <div className="relative mb-4 h-64 w-full">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={imgUrl}
                  alt={title}
                  className="object-cover"
                />
              </div>

              <h2 className="mb-2 font-montserrat font-bold">{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
