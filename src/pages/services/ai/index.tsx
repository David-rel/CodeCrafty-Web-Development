import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import TypingText from "~/components/TypingText";

function Ai() {
  return (
    <div>
      <Navbar />
      <section className="bg-navy relative py-32 lg:py-36">
        <div className="mx-auto flex w-full flex-col gap-10 px-5 sm:px-10 md:px-12 lg:max-w-7xl lg:flex-row lg:gap-12 lg:px-5">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:w-1/2 lg:max-w-none lg:flex-1 lg:items-start lg:py-7 lg:text-left xl:py-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">
              The Next Step.
              <span className="via-gold bg-gradient-to-br from-rose-500 to-rose-700 bg-clip-text text-transparent">
                {" "}
                Artifical Intelligence{" "}
              </span>
            </h1>
            <p className="mt-8 text-gray-700">
              One aspect that separates our sites from those of the competition is AI, the next step of web development, through analysis, chatbots, and more
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
              src="/about_person.jpeg"
              alt="Hero image"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 bg-gradient-to-r to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900">
            How we use it
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <span className="inline-block rounded-full bg-white p-6 shadow-md">
                  <svg
                    className="h-12 w-12 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19V6h6v13M9 6l6-6"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Front End Site</h3>
              <p className="mt-2 text-gray-700">
                We use chatbots to help streamline the website experience, helping guide customers
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <span className="inline-block rounded-full bg-white p-6 shadow-md">
                  <svg
                    className="h-12 w-12 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 10l-2 2-2-2m2-2v8"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Back End Management</h3>
              <p className="mt-2 text-gray-700">
                We use AI to help control data, simplifying management for the user. 
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <span className="inline-block rounded-full bg-white p-6 shadow-md">
                  <svg
                    className="h-12 w-12 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v8M8 12h8"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Customer Interactions</h3>
              <p className="mt-2 text-gray-700">
                Chatbots can help minimize unnecessary customer interactions by provide a service to answer customer questions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-16 pb-8 pt-24 sm:px-6 sm:pb-40 sm:pt-40 lg:px-8">
        <div
          className="relative mx-auto max-w-screen-xl text-center"
          data-aos=""
        >
          <h2 className="font-montserrat text-2xl font-extrabold">
            <TypingText text="Streamline web developement and management with AI" />
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
      <Footer />
    </div>
  );
}

export default Ai;

