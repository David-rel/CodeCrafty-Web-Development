import Image from "next/image";
import React from "react";
import Link from "next/link";
import Newsletter from "./Newsletter";

function Index() {
  return (
    <div className="pt-16">
      <div className="w-full border-t border-gray-300 font-montserrat md:mx-auto md:w-11/12 lg:mx-auto lg:w-11/12">
        <div className="container mx-auto py-12">
          <div className="pt-6 md:flex lg:flex xl:flex">
            <div className="mx-auto w-11/12 lg:mx-0 lg:w-2/5 xl:mx-0 xl:w-3/6">
              <div className="mb-6 flex items-center lg:mb-0 xl:mb-0">
                <Image src="/logo1.png" width={100} height={40} alt={""} />
                <p className="ml-3 text-3xl font-bold">Code Crafty LLC</p>
              </div>

              <h1 className="pb-4 text-xl font-bold">
                Phone:{" "}
                <Link href="tel:+17202994804" legacyBehavior>
                  <a className="text-blue-500 underline hover:text-blue-700">
                    +1 (720) 299 - 4804
                  </a>
                </Link>
              </h1>
              <h1 className="pt-4 text-xl font-bold">
                For IT help or development:{" "}
                <Link href="mailto:davidfales@codecrafty.dev" legacyBehavior>
                  <a className="text-blue-500 underline hover:text-blue-700">
                    davidfales@codecrafty.dev
                  </a>
                </Link>
              </h1>
              <h1 className="pb-8 pt-4 text-xl font-bold">
                For business and questions:{" "}
                <Link href="mailto:diego_g@codecrafty.dev" legacyBehavior>
                  <a className="text-blue-500 underline hover:text-blue-700">
                    diego_g@codecrafty.dev
                  </a>
                </Link>
              </h1>
            </div>

            <div className="mx-auto w-11/12 pl-3 pt-3 sm:pl-0 lg:mx-0 lg:w-2/5 xl:mx-0 xl:flex xl:w-1/6 xl:justify-end">
              <ul>
                <li className="mb-6 text-xl font-bold text-gray-800">
                  Getting Started
                </li>
                <li className="mb-5 text-base text-gray-600 hover:text-gray-700">
                  <Link href="/about/aboutUs">About Us</Link>
                </li>
                <li className="mb-5 text-base text-gray-600 hover:text-gray-700">
                  <Link href="/contact">Schedule a Discussion</Link>
                </li>
                <li className="mb-5 text-base text-gray-600 hover:text-gray-700">
                  <Link href="/about/team">The Team</Link>
                </li>
                <li className="mb-5 text-base text-gray-600 hover:text-gray-700">
                  <Link href="/how">How We Do It</Link>
                </li>
                <li className="mb-5 text-base text-gray-600 hover:text-gray-700">
                  <Link href="/about/portfolio">Our Portfolio</Link>
                </li>
              </ul>
            </div>
            <div className="mx-auto w-11/12 pl-3 pt-3 sm:pl-0 lg:mx-0 lg:w-2/5 xl:mx-0 xl:flex xl:w-1/6 xl:justify-end">
              <ul>
                <li className="mb-6 text-xl font-bold text-gray-800">
                  Services
                </li>
                <li className="mb-5 text-base text-gray-600 hover:text-gray-700">
                  <Link href="/services/website">Website</Link>
                </li>
                <li className="mb-5 text-base text-gray-600 hover:text-gray-700">
                  <Link href="/services/webApp">Web Application</Link>
                </li>
                <li className="mb-5 text-base text-gray-600 hover:text-gray-700">
                  <Link href="/services/domain">Domain and Hosting</Link>
                </li>
                <li className="mb-5 text-base text-gray-600 hover:text-gray-700">
                  <Link href="/services/maintenance">Web Maintenance</Link>
                </li>
                <li className="mb-5 text-base text-gray-600 hover:text-gray-700">
                  <Link href="/services/ai">AI Integration</Link>
                </li>
                <li className="mb-5 text-base text-gray-600 hover:text-gray-700">
                  <Link href="/services/analytics">Web Analytics</Link>
                </li>
                <li className="mb-5 text-base text-gray-600 hover:text-gray-700">
                  <Link href="/services/blog">Blog Integration</Link>
                </li>
                <li className="mb-5 text-base text-gray-600 hover:text-gray-700">
                  <Link href="/services/ecommerce">E-commerce</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 flex-wrap justify-between pb-6 pl-3 sm:pl-0 xl:mt-24 xl:flex">
            <div className="mx-auto mb-6 w-11/12 lg:mx-0 xl:mx-0 xl:mb-0 xl:w-2/6">
              <p className="text-base text-gray-800">
                &copy; 2024 CodeCrafty. All Rights Reserved
              </p>
            </div>
            {/* <div className="mx-auto mb-6 w-11/12 lg:mx-0 lg:mb-0 xl:mx-0 xl:mb-0 xl:w-2/6">
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
            </div> */}
          </div>
          <Newsletter />
        </div>
      </div>
    </div>
  );
}

export default Index;
