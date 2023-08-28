import React, { useEffect } from "react";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import Image from "next/image";

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
      "Every great website starts with a great idea. Think about what you want your website to achieve, and what design elements can help you reach those goals. Start with a spark. Share your vision, your goals, and your inspiration with us. We're all ears.",
    imgUrl: "/idea.jpeg",
  },
  {
    id: 2,
    title: "Step 2: Design",
    description:
      "A well-designed website is an inviting one. Ensure your design is clean, modern, and easy to navigate. We translate your idea into a visually engaging and functional blueprint, tailored to your unique needs.",
    imgUrl: "/download.jpg",
  },
  {
    id: 3,
    title: "Step 3: Development",
    description:
      "The development stage is where your website comes to life. Good development practices ensure your site is functional, fast, and reliable. Our skilled developers bring the design to life, incorporating the latest technology to build a responsive, efficient website.",
    imgUrl: "/download-1.jpg",
  },
  {
    id: 3,
    title: "Step 4: Deployment",
    description:
      "Once the site has been thoroughly tested and perfected, we launch it to the world. Your idea is now a fully-functional, live website. Enjoy the view!",
    imgUrl: "/images.jpg",
  },

  // add more steps as needed...
];

export default function Index() {
    useEffect(() => {
      // Importing and initializing AOS
      import("aos")
        .then((Aos) => {
          Aos.init({ duration: 2000 });
        })
        .catch((error) => console.error(error));
    }, []);

  return (
    <>
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
              <div className="w-full">
                {" "}
                <Image
                  src="https://i.ibb.co/181DvLN/Project-Cover-6.png"
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
                <p className="font-merriweather text-sm leading-normal  text-gray-800 lg:text-base">
                  At CodeCrafty, we believe that creating a website should be a
                  hassle-free experience. That&apos;s why we&apos;ve made it
                  incredibly simple for you to submit your design requirements.
                  Once we receive your submission, our talented team of
                  developers gets straight to work, handling every aspect of
                  your project with care and speed. We&apos;re committed to
                  delivering not only a visually stunning website but also a
                  seamless user experience, all within a quick turnaround time.
                  At CodeCrafty, we craft the web - with you and for you.
                </p>
              </div>
              <div className="mt-8 w-full">
                <div className="w-full">
                  <Image
                    data-aos="fade-up"
                    src="https://i.ibb.co/X5br8Zg/Rectangle-44.png"
                    alt="office"
                    width={1000}
                    height={500}
                  />
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
                  <p className="text-center font-merriweather text-xs leading-normal text-white md:text-base lg:text-left">
                    Do you think CodeCrafty is what you are looking for and you
                    are ready to start building with this company. contact us or
                    start the process of building your best dream website.
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
