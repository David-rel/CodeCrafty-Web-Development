import Image from "next/image";
import Link from "next/link";
import React from "react";
import TypingText from "~/components/TypingText";

function Analytics() {
  return (
    <div>
      <section className="bg-navy relative py-32 lg:py-36">
        <div className="mx-auto flex w-full flex-col gap-10 px-5 sm:px-10 md:px-12 lg:max-w-7xl lg:flex-row lg:gap-12 lg:px-5">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:w-1/2 lg:max-w-none lg:flex-1 lg:items-start lg:py-7 lg:text-left xl:py-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">
              Boost your website with a
              <span className="via-gold bg-gradient-to-br from-rose-500 to-rose-700 bg-clip-text text-transparent">
                {" "}
                Blog{" "}
              </span>
            </h1>
            <p className="mt-8 text-gray-700">
              One of the most often overlooked aspect of website visibility.
            </p>
            <div className="flex space-x-4">
              <Link href="/start">
                <button className="mt-5 transform rounded bg-rose-700 px-6 py-2 font-bold text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-rose-500">
                  Get Started
                </button>
              </Link>
              <Link href="/contact">
                <button className="hover:bg-teal mt-5 transform rounded border-2 border-black bg-white px-6 py-2 font-bold text-black transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-black hover:text-white">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex max-w-3xl flex-1 lg:mx-0 lg:h-auto lg:w-1/2 lg:max-w-none">
            <Image
              src="/7PxxTD.png"
              alt="Hero image"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        </div>
      </section>
      <div
        data-aos="fade"
        className="mx-auto max-w-7xl flex-wrap items-center pt-16"
      >
        <div className="w-full pb-6 text-center">
          <h2 className="text-xl text-gray-500">
            {" "}
            {/* It's more than just building a site and being done. We know that. */}
          </h2>
          <h1 className="mb-8 text-5xl font-bold md:text-6xl xl:text-7xl">
            Benefits of a Blog
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full p-4 pr-12 font-merriweather lg:w-2/3">
            <p className="mb-4 text-xl">
              While blogs are a great way to communicate your endevours and plans as a business, 
              they actually play an even more important role of boosting the visibility of your website.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              Through the use of particular keywords and ideas, blogs can make the difference in 
              where your website is placed by the search algorithm.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              Despite being overlooked, the impact of a blog can be immense and should never be overlooked
            </p>

            <div className="flex justify-center space-x-4">
              <Link href="/contact" legacyBehavior>
                <a className="inline-block rounded bg-rose-700 px-6 py-2 text-white transition-colors duration-300 hover:bg-rose-600">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
          <div className="flex w-full justify-center pb-6 lg:w-2/3">
            <Image
              src="/4Pxx1C.jpg"
              alt="Web Maintenance Services"
              width={600}
              height={500}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
      <section className="px-4 py-16 pb-8 pt-24 sm:px-6 sm:pb-40 sm:pt-40 lg:px-8">
        <div
          className="relative mx-auto max-w-screen-xl text-center"
          data-aos=""
        >
          <h2 className="font-montserrat text-2xl font-extrabold">
            <TypingText text="The difference between those of the top and the bottom" />
          </h2>
        </div>
        <div className="pt-4 text-center">
          <Link href="/custom" legacyBehavior>
            <a className="inline-block rounded bg-rose-600 px-6 py-3 text-lg font-bold text-white hover:bg-rose-700 sm:text-xl">
              Contact Us
            </a>
          </Link>
        </div>
      </section>
      ;
    </div>
  );
}

export default Analytics;

