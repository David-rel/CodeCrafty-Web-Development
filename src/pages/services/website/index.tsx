import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

function Website() {
  return (
    <div>
      <Navbar />
      <section className="bg-navy relative py-32 lg:py-36">
        <div className="mx-auto flex w-full flex-col gap-10 px-5 sm:px-10 md:px-12 lg:max-w-7xl lg:flex-row lg:gap-12 lg:px-5">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:w-1/2 lg:max-w-none lg:flex-1 lg:items-start lg:py-7 lg:text-left xl:py-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">
              Get the best
              <span className="via-gold bg-gradient-to-br from-rose-500 to-rose-700 bg-clip-text text-transparent">
                {" "}
                Website{" "}
              </span>
              that beats the competition
            </h1>
            <p className="mt-8 text-gray-700">
              We build websites that are fast, secure, and easy to use. We
              provide fully customizable and scalable coded websites. Our
              websites are built to be responsive, accessible, and SEO friendly.
              We can help you build a website that will help you stand out from
              the competition.
            </p>
            <div className="flex space-x-4">
              <Link href="/build">
                <button className="mt-5 transform rounded bg-rose-700 px-6 py-2 font-bold text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-rose-500">
                  Get Started
                </button>
              </Link>
              <Link href="/how">
                <button className="hover:bg-teal mt-5 transform rounded border-2 border-black bg-white px-6 py-2 font-bold text-black transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-black hover:text-white">
                  How We Do It
                </button>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex max-w-3xl flex-1 lg:mx-0 lg:h-auto lg:w-1/2 lg:max-w-none">
            <Image
              src="/webdev.jpg"
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
            Our Process
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
              <h3 className="text-2xl font-bold text-gray-900">Step 1</h3>
              <p className="mt-2 text-gray-700">
                We get your perfect idea from you through a call or messages.
                Making sure we understand your vision.
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
              <h3 className="text-2xl font-bold text-gray-900">Step 2</h3>
              <p className="mt-2 text-gray-700">
                We design your idea, taking what we learned and creating the
                idea before going to development.
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
              <h3 className="text-2xl font-bold text-gray-900">Step 3</h3>
              <p className="mt-2 text-gray-700">
                We create it using state-of-the-art coding techniques and the
                best tech stack for your site. We build your site in 2-3 weeks.
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
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Step 4</h3>
              <p className="mt-2 text-gray-700">
                We deploy your site and run maintenance checks to make sure it's
                top notch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex hidden items-center justify-center px-4 py-16 pb-40 pt-40 sm:block lg:px-8 ">
        <div className="relative z-10 text-center font-montserrat">
          <h2
            className="mb-4 text-3xl font-extrabold sm:text-5xl"
            data-aos="fade"
          >
            Worried about not being able to make edits on your own time?
          </h2>
          <p
            className="mb-6 text-lg sm:text-xl"
            data-aos="fade"
            data-aos-delay="200"
          >
            We also give you access to an admin panel to edit text, photos,
            videos, and other dynamic content you need.
          </p>
          <div className="pt-4">
            <Link href="/build" legacyBehavior>
              <a className="inline-block rounded bg-rose-600 px-6 py-3 text-lg font-bold text-white hover:bg-rose-700 sm:text-xl">
                Start Building
              </a>
            </Link>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center gap-4 px-4 md:flex-row xl:gap-40 ">
        <div
          data-aos="fade-right"
          className="flex min-h-screen flex-col justify-center "
        >
          <div className="relative py-3 sm:mx-auto sm:max-w-xl">
            <div className="relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
              <div className="mx-auto max-w-md">
                <div className="mb-4">
                  <Image
                    className="rounded-md object-contain"
                    src="/webdev2.jpg" // replace with your image path
                    alt="COE Image"
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                  <p className="text-2xl font-bold">
                    Ditch The Outdated Website
                  </p>
                  <p>
                    Revamp your online presence with a modern, sleek, and highly
                    functional website that truly represents your brand.
                  </p>
                </div>
                <div className="pt-6 text-base font-bold leading-6 sm:text-lg sm:leading-7">
                  <Link href="/build" legacyBehavior>
                    <a className="inline-block rounded bg-rose-600 px-4 py-2 text-white transition-colors hover:bg-rose-700">
                     Build a Site
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="flex min-h-screen flex-col justify-center py-6 sm:py-12 "
        >
          <div className="relative py-3 sm:mx-auto sm:max-w-xl">
            <div className="relative bg-white px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
              <div className="mx-auto max-w-md">
                <div className="mb-4">
                  <Image
                    className="rounded-md object-contain"
                    src="/about_person.jpeg" // replace with your image path
                    alt="PA Image"
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                  <p className="text-2xl font-bold">
                    Get a Website That Stands Out
                  </p>
                  <p>
                    Create a unique and memorable online presence that captures
                    the essence of your business and attracts more customers.
                  </p>
                </div>
                <div className="pt-6 text-base font-bold leading-6 sm:text-lg sm:leading-7">
                  <Link href="/contact" legacyBehavior>
                    <a className="inline-block rounded bg-rose-600 px-4 py-2 text-white transition-colors hover:bg-rose-700">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Website;


