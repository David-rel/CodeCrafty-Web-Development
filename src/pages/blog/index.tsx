import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
function IndexPage() {
  return (
    <>
      <Head>
        <title>Code Crafty - Blog</title>
      </Head>
      <Navbar />
      <div id="blog" className="bg-gray-100 px-4 py-12 xl:px-0">
        <div className="container mx-auto">
          <h1 className="text-center font-montserrat text-3xl tracking-wider text-gray-900 lg:text-5xl">
            The Code Crafty Blog
          </h1>
          <div className="mt-12 lg:mt-24">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
              <div className="overflow-hidden rounded-xl bg-white shadow-lg">
                <div className="relative h-96 w-full">
                  {" "}
                  {/* Container with a set height */}
                  <Image
                    src="/blogs/whyCoded1.webp"
                    alt="Descriptive Text"
                    layout="fill"
                    objectFit="cover" // Cover will ensure the image covers the whole area
                  />
                </div>
                <div className="flex w-full justify-between bg-rose-700 px-8 py-4">
                  <p className="text-sm font-semibold tracking-wide text-white">
                    David Fales (CEO)
                  </p>
                  <p className="text-sm font-semibold tracking-wide text-white">
                    27th May, 2024
                  </p>
                </div>
                <div className="rounded-bl-3xl rounded-br-3xl bg-white px-10 py-6">
                  <h1 className="text-4xl font-semibold tracking-wider text-gray-900">
                    (NEW) Why Companies Should Get a Coded Website
                  </h1>
                  <p className="mt-6 w-11/12 text-base  tracking-wide text-gray-700 lg:text-lg lg:leading-8">
                    Discover why companies should invest in custom-coded
                    websites instead of using drag-and-drop builders like
                    WordPress or Wix. Learn about the benefits of performance
                    optimization, SEO, scalability, security, and unique
                    branding that custom coding offers.
                  </p>
                  <Link href="/blog/WhyWebsite">
                    <div className="mt-4 flex w-full cursor-pointer items-center justify-end">
                      <p className="text-base tracking-wide text-rose-500">
                        Read more
                      </p>
                      <svg
                        className="ml-3 lg:ml-6"
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={18}
                        viewBox="0 0 20 18"
                        fill="none"
                      >
                        <path
                          d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
                          stroke="#E95350"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 8.53662H19"
                          stroke="#E95350"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>

                  <div className="h-5 w-2" />
                </div>
              </div>
              <div>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                  <div>
                    <div className="relative h-56 w-full rounded-lg">
                      {" "}
                      {/* Container with a set height */}
<Image
  src="/blogs/whyAI1.png"
  alt="Descriptive Text"
  width={500}
  height={500}
  style={{ objectFit: "cover", width: "100%", height: "100%" }}
   // Cover will ensure the image covers the whole area
/>
                    </div>
                    <div className="flex w-full justify-between bg-rose-700 px-4 py-2">
                      <p className="text-sm font-semibold tracking-wide text-white">
                        David Fales (CEO)
                      </p>
                      <p className="text-sm font-semibold tracking-wide text-white">
                        4th December, 2023
                      </p>
                    </div>
                    <div className="rounded-bl-3xl rounded-br-3xl  bg-white px-3 py-4 lg:px-6">
                      <h1 className="text-lg font-semibold tracking-wider text-gray-900">
                        How can AI help your website?
                      </h1>
                      <p className="mt-2 pr-4  text-sm  tracking-wide text-gray-700 lg:text-base lg:leading-8">
                        In the ever-evolving digital landscape, Artificial
                        Intelligence (AI) has emerged as a revolutionary force,
                        redefining the way we interact with the world wide web.
                        It&apos;s the silent engine powering a new era of user
                        experience, driving personalized content, and
                        streamlining processes in a way that once seemed the
                        stuff of science fiction.
                      </p>
                      <Link href="/blog/WhyAI">
                        <div className="mt-4 flex w-full cursor-pointer items-center justify-end">
                          <p className="text-base tracking-wide text-rose-500">
                            Read more
                          </p>
                          <svg
                            className="ml-3 lg:ml-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={18}
                            viewBox="0 0 20 18"
                            fill="none"
                          >
                            <path
                              d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
                              stroke="#E95350"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1 8.53662H19"
                              stroke="#E95350"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                  {/* <div>
                    <img
                      className="w-full"
                      src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(3).png"
                      alt="notes"
                    />
                    <div className="flex w-full justify-between bg-indigo-700 px-4 py-2">
                      <p className="text-sm font-semibold tracking-wide text-white">
                        Bruce Wayne
                      </p>
                      <p className="text-sm font-semibold tracking-wide text-white">
                        13TH Oct, 2020
                      </p>
                    </div>
                    <div className="rounded-bl-3xl rounded-br-3xl  bg-white px-3 py-4 lg:px-6">
                      <h1 className="text-lg font-semibold tracking-wider text-gray-900">
                        Transactions
                      </h1>
                      <p className="mt-2 pr-4  text-sm  tracking-wide text-gray-700 lg:text-base lg:leading-8">
                        Find the latest events updates or create events,
                        concerts, conferences, workshops...
                      </p>
                    </div>
                  </div> */}
                </div>
                {/* <div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                  <div>
                    <img
                      className="w-full"
                      src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png"
                      alt="laptop"
                    />
                    <div className="flex w-full justify-between bg-indigo-700 px-4 py-2">
                      <p className="text-sm font-semibold tracking-wide text-white">
                        Bruce Wayne
                      </p>
                      <p className="text-sm font-semibold tracking-wide text-white">
                        13TH Oct, 2020
                      </p>
                    </div>
                    <div className="rounded-bl-3xl rounded-br-3xl  bg-white px-3 py-4 lg:px-6">
                      <h1 className="text-lg font-semibold tracking-wider text-gray-900">
                        Transactions
                      </h1>
                      <p className="mt-2 pr-4  text-sm  tracking-wide text-gray-700 lg:text-base lg:leading-8">
                        Find the latest events updates or create events,
                        concerts, conferences, workshops...
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      className="w-full"
                      src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(5).png"
                      alt="worker"
                    />
                    <div className="flex w-full justify-between bg-indigo-700 px-4 py-2">
                      <p className="text-sm font-semibold tracking-wide text-white">
                        Bruce Wayne
                      </p>
                      <p className="text-sm font-semibold tracking-wide text-white">
                        13TH Oct, 2020
                      </p>
                    </div>
                    <div className="rounded-bl-3xl rounded-br-3xl  bg-white px-3 py-4 lg:px-6">
                      <h1 className="text-lg font-semibold tracking-wider text-gray-900">
                        Transactions
                      </h1>
                      <p className="mt-2 pr-4  text-sm  tracking-wide text-gray-700 lg:text-base lg:leading-8">
                        Find the latest events updates or create events,
                        concerts, conferences, workshops...
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default IndexPage;
