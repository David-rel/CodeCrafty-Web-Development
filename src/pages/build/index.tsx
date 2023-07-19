import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'
import Footer from '~/components/Footer'
import Navbar from '~/components/Navbar'

function Build() {

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
      <div className="px-6 py-20 xl:container xl:mx-auto 2xl:px-0">
        <div className="items-center justify-between lg:flex">
          <div className=" w-full lg:w-1/2">
            <p className="text-base leading-4 text-gray-600">
              Choose your plan
            </p>
            <h1
              role="heading"
              className="mt-3 text-3xl font-bold leading-10 text-gray-800 md:text-5xl"
            >
              Our pricing plan
            </h1>
            <p
              role="contentinfo"
              className="mt-5 text-base leading-5 text-gray-600"
            >
              We have several plans to showcase your Business. Get everything
              you need
            </p>
          </div>
          <div
            className="relative mt-12 w-full md:px-8 lg:mt-0 lg:w-7/12 xl:w-1/2"
            role="list"
          >
            <img
              src="https://i.ibb.co/0n6DSS3/bgimg.png"
              className="absolute -ml-12 mt-24 w-full"
              alt="background circle images"
            />
            <div
              role="listitem"
              className="relative z-30 cursor-pointer rounded-lg bg-white p-8 shadow"
            >
              <div className="items-center justify-between md:flex">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                  Basic
                </h2>
                <p className="mt-4 text-2xl font-semibold leading-6 text-gray-800 md:mt-0">
                  $400
                </p>
              </div>
              <p className="mt-4 text-base leading-6 text-gray-600 md:w-80">
                This is for your basic portfolio and personal website
              </p>
              <button className="mt-5 w-full rounded bg-gray-200 px-8 py-3 py-3 text-base font-semibold text-rose-700 transition duration-150 ease-in-out hover:bg-gray-300 focus:outline-none">
                Choose
              </button>
            </div>
<<<<<<< HEAD
            <div className="flex w-full items-center justify-center">
              <div className="pt-12">
                <div className="container mx-auto">
                  <div className="-mx-6 mb-12 flex flex-wrap justify-between sm:justify-center">
                    <div className="mb-4 w-full px-6 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
                      <div className="border-gray-200shadow rounded-lg border bg-white px-4 py-5 text-left">
                        <h4 className="pb-8 text-2xl font-semibold text-rose-700">
                          Basic
                        </h4>
                        <ul className="mb-6 flex flex-col">
                          <li className="mb-2.5 flex items-center">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-base font-normal text-gray-800">
                              24/7 access
                            </p>
                          </li>
                          <li className="mb-2.5 flex items-center">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-base font-normal text-gray-800">
                              Order labs + Results
                            </p>
                          </li>
                          <li className="mb-2.5 flex items-center">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4 opacity-0"
                              alt="check-mark"
                            />
                            <p className="text-base font-normal text-gray-400">
                              Radiology tests + Results
                            </p>
                          </li>
                          <li className="mb-2.5 flex items-center">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4 opacity-0"
                              alt="check-mark"
                            />
                            <p className="text-base font-normal text-gray-400">
                              Partnership + Discounts
                            </p>
                          </li>
                          <li className="mb-2.5 flex items-center">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4 opacity-0"
                              alt="check-mark"
                            />
                            <p className="text-base font-normal text-gray-400">
                              Direct doctor phone number
                            </p>
                          </li>
                          <li className="mb-2.5 flex items-center">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4 opacity-0"
                              alt="check-mark"
                            />
                            <p className="text-base font-normal text-gray-400">
                              Specialists appoinments
                            </p>
                          </li>
                        </ul>
                        <p className="relative pl-3 text-base text-rose-700">
                          <span className="text-2xl font-light">$</span>
                          <span className="text-4xl font-semibold">200</span>
                        </p>
                        <Link href="/build/customize/basic">
                        <button className="mt-5 w-full rounded bg-gray-200 px-8 py-3 py-3 text-base font-semibold text-rose-700 transition duration-150 ease-in-out hover:bg-gray-300 focus:outline-none">
                          Choose
                        </button>
                        </Link>
                      </div>
                    </div>
                    <div className="mb-4 w-full px-6 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
                      <div className="rounded-lg border border-gray-200 bg-rose-700 px-4 py-5 text-left shadow">
                        <h4 className="pb-8 text-2xl font-semibold text-white">
                          Pro
                        </h4>
                        <ul className="mb-6 flex flex-col">
                          <li className="mb-2.5 flex items-center">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-base font-normal text-white">
                              24/7 access
                            </p>
                          </li>
                          <li className="mb-2.5 flex items-center">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-base font-normal text-white">
                              Order labs + Results
                            </p>
                          </li>
                          <li className="mb-2.5 flex items-center">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-base font-normal text-white">
                              Radiology tests + Results
                            </p>
                          </li>
                          <li className="mb-2.5 flex items-center">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-base font-normal text-white">
                              Partnership + Discounts
                            </p>
                          </li>
                          <li className="mb-2.5 flex items-center">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4 opacity-0"
                              alt="check-mark"
                            />
                            <p className="text-base font-normal text-rose-700">
                              Direct doctor phone number
                            </p>
                          </li>
                          <li className="mb-2.5 flex items-center">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4 opacity-0"
                              alt="check-mark"
                            />
                            <p className="text-base font-normal text-rose-700">
                              Specialists appoinments
                            </p>
                          </li>
                        </ul>
                        <p className="relative pl-3 text-base text-white">
                          <span className="text-2xl font-light">$</span>
                          <span className="text-4xl font-semibold">200</span>
                        </p>
                        <Link href="/build/customize/pro">
                        <button className="mt-5 w-full rounded bg-white px-8 py-3 py-3 text-base font-semibold text-rose-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none">
                          Choose
                        </button>
                        </Link>
                      </div>
                    </div>
                    <div className="mb-4 w-full px-6 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
                      <div className="border-gray-200shadow rounded-lg border bg-white px-4 py-5 text-left">
                        <h4 className="pb-8 text-2xl font-semibold text-rose-700">
                          Enterprise
                        </h4>
                        <ul className="mb-6 flex flex-col">
                          <li className="mb-2.5 flex items-center">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-base font-normal text-gray-800">
                              24/7 access
                            </p>
                          </li>
                          <li className="mb-2.5 flex items-center">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-base font-normal text-gray-800">
                              Order labs + Results
                            </p>
                          </li>
                          <li className="mb-2.5 flex items-center">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-base font-normal text-gray-800">
                              Radiology tests + Results
                            </p>
                          </li>
                          <li className="mb-2.5 flex items-center">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-base font-normal text-gray-800">
                              Partnership + Discounts
                            </p>
                          </li>
                          <li className="mb-2.5 flex items-center">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-base font-normal text-gray-800">
                              Direct doctor phone number
                            </p>
                          </li>
                          <li className="mb-2.5 flex items-center">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-base font-normal text-gray-800">
                              Specialists appoinments
                            </p>
                          </li>
                        </ul>
                        <p className="relative pl-3 text-base text-rose-700">
                          <span className="text-2xl font-light">$</span>
                          <span className="text-4xl font-semibold">200</span>
                        </p>
                        <Link href="/build/customize/enterprise">
                        <button className="mt-5 w-full rounded bg-gray-200 px-8 py-3 text-base font-semibold text-rose-700 transition duration-150 ease-in-out hover:bg-gray-300 focus:outline-none">
                          Choose
                        </button>
                        </Link>
                      </div>
                    </div>
                  </div>
=======
            <div
              role="listitem"
              className="relative z-30 mt-3 flex cursor-pointer rounded-lg bg-white shadow"
            >
              <div className="h-auto  w-2.5 rounded-bl-md rounded-tl-md bg-rose-700" />
              <div className="w-full p-8">
                <div className="items-center justify-between md:flex">
                  <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                    Pro
                  </h2>
                  <p className="mt-4 text-2xl font-semibold leading-6 text-gray-800 md:mt-0">
                    $600
                  </p>
>>>>>>> 01b8341b3392934ca5373769e453b6648cf1b5b5
                </div>
                <p className="mt-4 text-base leading-6 text-gray-600 md:w-80">
                  This is for more complex sites like blogs, education sites,
                  etc...
                </p>
                <button className="mt-5 w-full rounded bg-rose-700 px-8 py-3 py-3 text-base font-semibold text-white transition duration-150 ease-in-out hover:bg-rose-600 focus:outline-none">
                  Choose
                </button>
              </div>
            </div>
            <div
              role="listitem"
              className="relative z-30 mt-7 cursor-pointer rounded-lg bg-white p-8 shadow"
            >
              <div className="items-center justify-between md:flex">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                  Enterprise
                </h2>
                <p className="mt-4 text-2xl font-semibold leading-6 text-gray-800 md:mt-0">
                  $800
                </p>
              </div>
              <p className="mt-4 text-base leading-6 text-gray-600 md:w-80">
                This is where businesses and startups will get the best value. A
                subscription based site, e-commerce, media
              </p>
              <button className="mt-5 w-full rounded bg-gray-200 px-8 py-3 py-3 text-base font-semibold text-rose-700 transition duration-150 ease-in-out hover:bg-gray-300 focus:outline-none">
                Choose
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <div className="w-full bg-gray-100 py-12">
          <div className="container mx-auto">
            <div className="mx-auto mb-12 w-4/5">
              <h1 className="mb-4 text-center text-3xl font-extrabold text-gray-800 xl:text-4xl">
                Simple &amp; Transparent Pricing
              </h1>
              <p className="text-center text-xl font-normal text-gray-600">
                Focus on your business goals and we take care of the rest. From
                ready-made components to perfect templates to highly
                customizable design. All you need to do is choose your plan
                according to your next project.
              </p>
            </div>
            <div className="mx-auto w-11/12">
              <div className="items-end lg:flex xl:flex">
                <div className="mb-2 flex flex-wrap items-center justify-center bg-white pb-8 pt-8 shadow sm:mb-2 md:mb-2 lg:mb-0 xl:mb-0 xl:w-1/4">
                  <Image width={213} height={50} src="/logo.png" alt="" />
                </div>
                <div className="shadow sm:flex md:flex lg:flex xl:flex">
                  <div className="mb-2 flex flex-col items-center justify-center border-l border-r border-gray-200 bg-white pb-8 pl-6 pr-6 pt-8 sm:mb-0 md:mb-0 lg:mb-0 lg:w-1/3 xl:mb-0 xl:w-1/3">
                    <div className="mb-6">
                      <img
                        src="https://cdn.tuk.dev/assets/paper-plane.png"
                        alt=""
                      />
                    </div>
                    <p className="mb-3 text-center text-2xl font-bold text-gray-800">
                      Basic
                    </p>
                    <p className="mb-6 w-full text-center text-sm font-normal text-gray-600">
                      Basic resources for a starter site. Individuals and small
                      teams.
                    </p>
                    <button className="rounded border border-rose-600 bg-white px-6 py-2 text-sm text-rose-600 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none">
                      Choose
                    </button>
                  </div>
                  <div className="mb-2 flex flex-col items-center justify-center border-l border-r border-gray-200 bg-white pb-8 pl-6 pr-6 pt-8 sm:mb-0 md:mb-0 lg:mb-0 lg:w-1/3 xl:mb-0 xl:w-1/3">
                    <div className="mb-5">
                      <img src="https://cdn.tuk.dev/assets/plane.png" alt="" />
                    </div>
                    <p className="mb-3 text-center text-2xl font-bold text-gray-800">
                      Pro
                    </p>
                    <p className="mb-6 w-full text-center text-sm font-normal text-gray-600">
                      More power for company sites and heavy traffic. Growing
                      business.
                    </p>
                    <button className="rounded border bg-rose-700 px-6 py-2 text-sm text-white transition duration-150 ease-in-out hover:bg-rose-600 focus:outline-none">
                      Choose
                    </button>
                  </div>
                  <div className="mb-2 flex flex-col items-center justify-center border-l border-r border-gray-200 bg-white pb-8 pl-6 pr-6 pt-8 sm:mb-0 md:mb-0 lg:mb-0 lg:w-1/3 xl:mb-0 xl:w-1/3">
                    <div className="mb-6">
                      <img
                        src="https://cdn.tuk.dev/assets/start-button.png"
                        alt=""
                      />
                    </div>
                    <p className="mb-3 text-center text-2xl font-bold text-gray-800">
                      Enterprise
                    </p>
                    <p className="mb-6 w-full text-center text-sm font-normal text-gray-600">
                      Support multi-complex sites and high-resolution photos and
                      videos.
                    </p>
                    <button className="rounded border border-rose-600 bg-white px-6 py-2 text-sm text-rose-600 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none">
                      Choose
                    </button>
                  </div>
                </div>
              </div>
              <div className="shadow">
                <div>
                  <div className="flex w-full items-center">
                    <p className="w-3/12 pb-3 pl-4 pt-3 text-sm font-bold text-gray-600">
                      Pricing
                    </p>
                    <p className="w-3/12 text-center text-sm font-bold text-gray-800 lg:hidden">
                      Professional
                    </p>
                    <p className="w-3/12 text-center text-sm font-bold text-gray-800 lg:hidden">
                      Pro Plus
                    </p>
                    <p className="w-3/12 text-center text-sm font-bold text-gray-800 lg:hidden">
                      Enterprise
                    </p>
                  </div>
                  <table className="w-full table-auto bg-white sm:table-fixed">
                    <tbody>
                      <tr>
                        <td className="w-3/12 break-words border border-gray-200 p-2 text-xs text-gray-800 sm:p-4 sm:text-sm">
                          Plan Cost
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          $400
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          $600
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          $800
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <p className="pb-3 pl-4 pt-3 text-sm font-bold text-gray-600">
                    Features
                  </p>
                  <table className="w-full table-auto bg-white sm:table-fixed">
                    <tbody>
                      <tr>
                        <td className="w-3/12 break-words border border-gray-200 p-2 text-xs text-gray-800 sm:p-4 sm:text-sm">
                          Full Stack Features
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>
                      </tr>
                      <tr>
                        <td className="w-3/12 break-words border border-gray-200 p-2 text-xs text-gray-800 sm:p-4 sm:text-sm">
                          Design Consultancy
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>
                      </tr>
                      <tr>
                        <td className="w-3/12 break-words border border-gray-200 p-2 text-xs text-gray-800 sm:p-4 sm:text-sm">
                          SEO Package
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>
                      </tr>
                      <tr>
                        <td className="w-3/12 break-words border border-gray-200 p-2 text-xs text-gray-800 sm:p-4 sm:text-sm">
                          Development Team
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>{" "}
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>
                      </tr>
                      <tr>
                        <td className="w-3/12 break-words border border-gray-200 p-2 text-xs text-gray-800 sm:p-4 sm:text-sm">
                          Scalability Access
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>{" "}
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>
                      </tr>
                      <tr>
                        <td className="w-3/12 break-words border border-gray-200 p-2 text-xs text-gray-800 sm:p-4 sm:text-sm">
                          On-Call Support
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>{" "}
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>{" "}
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>
                      </tr>
                      <tr>
                        <td className="w-3/12 break-words border border-gray-200 p-2 text-xs text-gray-800 sm:p-4 sm:text-sm">
                          up to 4 pages of info
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>{" "}
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>{" "}
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>
                      </tr>
                      <tr>
                        <td className="w-3/12 break-words border border-gray-200 p-2 text-xs text-gray-800 sm:p-4 sm:text-sm">
                          up to 3 revisions
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>{" "}
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>{" "}
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>
                      </tr>
                      <tr>
                        <td className="w-3/12 break-words border border-gray-200 p-2 text-xs text-gray-800 sm:p-4 sm:text-sm">
                          up to 8 pages of info
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm" />
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>{" "}
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>
                      </tr>
                      <tr>
                        <td className="w-3/12 break-words border border-gray-200 p-2 text-xs text-gray-800 sm:p-4 sm:text-sm">
                          up to 4 revisions
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm" />
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>{" "}
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>
                      </tr>
                      <tr>
                        <td className="w-3/12 break-words border border-gray-200 p-2 text-xs text-gray-800 sm:p-4 sm:text-sm">
                          up to 12 pages of info
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm" />
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm" />
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>
                      </tr>
                      <tr>
                        <td className="w-3/12 break-words border border-gray-200 p-2 text-xs text-gray-800 sm:p-4 sm:text-sm">
                          up to 6 revisions
                        </td>
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm" />
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm" />
                        <td className="w-3/12 border border-gray-200 p-2 text-center text-xs text-gray-800 sm:p-4 sm:text-sm">
                          <div className="mx-auto h-2 w-2 rounded-full bg-rose-700" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Build