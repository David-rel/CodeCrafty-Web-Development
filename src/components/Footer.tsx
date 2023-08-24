import Image from "next/image";
import React from "react";
import Link from "next/link";

function Index() {
  return (
    <div className="pt-16">
      <div className="w-full border-t border-gray-300 font-montserrat md:mx-auto md:w-11/12 lg:mx-auto lg:w-11/12">
        <div className="container mx-auto py-12">
          <div className="pt-6 md:flex lg:flex xl:flex">
            <div className="mx-auto w-11/12 lg:mx-0 lg:w-2/5 xl:mx-0 xl:w-3/6">
              <div className="mb-6 flex items-center lg:mb-0 xl:mb-0">
                <Image src="/logo1.png" width={100} height={40} alt={""} />
                <p className="ml-3 text-xl font-bold">CodeCrafty</p>
              </div>

              <h1 className="pb-4 text-xl font-bold">
                Phone: +1 (720) 612 2979
              </h1>
              <h1 className="text-xl font-bold">
                Dev Email: davidfales@codecrafty.dev
              </h1>
              <h1 className="text-xl font-bold">
                Marketing Email: diego@codecrafty.dev
              </h1>
            </div>

            <div className="mx-auto w-11/12 pl-3 pt-3 sm:pl-0 lg:mx-0 lg:w-2/5 xl:mx-0 xl:flex xl:w-1/6 xl:justify-end">
              <ul>
                <li className="mb-6 text-xl font-bold text-gray-800">
                  Getting Started
                </li>
                <li className="mb-5 text-base text-gray-600 hover:text-gray-700">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="mb-5 text-base text-gray-600 hover:text-gray-700">
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li className="mb-5 text-base text-gray-600 hover:text-gray-700">
                  <Link href="/build">Build A Site</Link>
                </li>
                <li className="mb-5 text-base text-gray-600 hover:text-gray-700">
                  <Link href="/how">How We Do It</Link>
                </li>
              </ul>
            </div>
            <div className="mx-auto w-11/12 pl-3 pt-3 sm:pl-0 lg:mx-0 lg:w-2/5 xl:mx-0 xl:flex xl:w-1/6 xl:justify-end">
              <ul>
                <li className="mb-6 text-xl font-bold text-gray-800">
                  Resources
                </li>
                <li className="mb-5 text-base text-gray-600 hover:text-gray-700">
                  <Link href="#">Accessibility</Link>
                </li>
                <li className="mb-5 text-base text-gray-600 hover:text-gray-700">
                  <Link href="#">Usability</Link>
                </li>
                <li className="mb-5 text-base text-gray-600 hover:text-gray-700">
                  <Link href="#">Marketplace</Link>
                </li>
                <li className="mb-5 text-base text-gray-600 hover:text-gray-700">
                  <Link href="#">Design &amp; Dev</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 flex-wrap justify-between pb-6 pl-3 sm:pl-0 xl:mt-24 xl:flex">
            <div className="mx-auto mb-6 w-11/12 lg:mx-0 xl:mx-0 xl:mb-0 xl:w-2/6">
              <p className="text-base text-gray-800">
                2023 CodeCrafty. All Rights Reserved
              </p>
            </div>
            <div className="mx-auto mb-6 w-11/12 lg:mx-0 lg:mb-0 xl:mx-0 xl:mb-0 xl:w-2/6">
              <ul className="justify-between sm:flex md:flex lg:flex xl:flex">
                <li className="mb-4 text-base text-gray-800 hover:text-gray-900 sm:mb-0">
                  <Link href="#">Terms of service</Link>
                </li>
                <li className="mb-4 text-base text-gray-800 hover:text-gray-900 sm:mb-0">
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li className="mb-4 text-base text-gray-800 hover:text-gray-900 sm:mb-0">
                  <Link href="#">Security</Link>
                </li>
              </ul>
            </div>
            <div className="mx-auto mb-6 mt-8 w-11/12 sm:w-11/12 lg:mx-0 lg:mb-0 lg:mt-8 lg:w-1/6 xl:mx-0 xl:mb-0 xl:mt-0 xl:w-1/6">
              <div className="flex justify-start space-x-6 pr-2 sm:justify-start sm:pr-0 md:pr-0 lg:pr-0 xl:justify-end xl:pr-0">
                <div>
                  <Link href="#">
                    <svg
                      aria-label="Twitter"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#718096"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-twitter"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </Link>
                </div>
                <div>
                  <Link href="#">
                    <svg
                      aria-label="Instagram"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#718096"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-instagram"
                    >
                      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </Link>
                </div>

                <div>
                  <Link href="#">
                    <svg
                      aria-label="Github"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#718096"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </Link>
                </div>
                <div>
                  <Link href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-facebook cursor-pointer"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#718096"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
