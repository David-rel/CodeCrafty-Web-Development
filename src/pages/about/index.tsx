import Link from "next/link";
import React, { useEffect } from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function About() {
  useEffect(() => {
    // Importing and initializing AOS
    import("aos")
      .then((Aos) => {
        Aos.init({ duration: 2000 });
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="px-4 py-9 2xl:container md:px-6 md:py-12 lg:px-20 lg:py-16 2xl:mx-auto">
        <div
          className="flex flex-col gap-12 sm:gap-10 lg:flex-row lg:gap-8"
          data-aos="fade"
        >
          <div className="w-full lg:w-6/12">
            <h2 className="w-full text-3xl font-bold leading-9 lg:text-4xl lg:leading-10">
              We are here to make building your dream website hassle free
            </h2>

            <p className="mt-6 pb-8 text-base font-normal leading-6 text-gray-600">
              Welcome to CodeCrafty, your one-stop shop for comprehensive web
              design and development services. We&apos;re a creative powerhouse with
              a passion for transforming your ideas into beautifully designed,
              fully functional websites. With a keen understanding of the
              digital landscape, our experts take the complexity out of website
              design, streamlining the process to ensure your online presence is
              built swiftly, efficiently, and aligned with your unique vision.
            </p>

            <Link
              href="/how"
              rel="noopener noreferrer"
              className="mr-4 rounded-full bg-rose-500 px-6 py-4 text-xl font-bold text-white hover:bg-rose-700"
            >
              How we do it
            </Link>
          </div>

          <div className="w-full lg:w-6/12">
            <img
              className="hidden w-full lg:block"
              src="./about_opener.jpeg"
              alt="people discussing on board"
            />
            <img
              className="hidden w-full sm:block lg:hidden"
              src="./about_opener.jpeg"
              alt="people discussing on board"
            />
            <img
              className="block w-full sm:hidden"
              src="./about_opener.jpeg"
              alt="people discussing on board"
            />
          </div>
        </div>

        <div className="relative mt-24">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8">
            <div className="z-20 flex h-12 w-12 items-center justify-center rounded-full bg-rose-600">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 5V21"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 5V14"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 4.99984C5.93464 4.08371 7.19124 3.57056 8.5 3.57056C9.80876 3.57056 11.0654 4.08371 12 4.99984C12.9346 5.91598 14.1912 6.42913 15.5 6.42913C16.8088 6.42913 18.0654 5.91598 19 4.99984"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 14.0001C5.93464 13.084 7.19124 12.5708 8.5 12.5708C9.80876 12.5708 11.0654 13.084 12 14.0001C12.9346 14.9162 14.1912 15.4294 15.5 15.4294C16.8088 15.4294 18.0654 14.9162 19 14.0001"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <svg
              className="z-20 "
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="24" fill="#EC3F56" />
              <path
                d="M26 15V19C26 19.2652 26.1054 19.5196 26.2929 19.7071C26.4804 19.8946 26.7348 20 27 20H31"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31 30V31C31 31.5304 30.7893 32.0391 30.4142 32.4142C30.0391 32.7893 29.5304 33 29 33H19C18.4696 33 17.9609 32.7893 17.5858 32.4142C17.2107 32.0391 17 31.5304 17 31V30"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30 26H33M15 26H18H15ZM22.5 26H25.5H22.5Z"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 22V17C17 16.4696 17.2107 15.9609 17.5858 15.5858C17.9609 15.2107 18.4696 15 19 15H26L31 20V22"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <svg
              className="z-20 hidden sm:block"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="24" fill="#EC3F56" />
              <path
                d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <hr className="absolute top-2/4 z-10 w-full bg-gray-200" />
        </div>
        <div
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8"
          data-aos="fade"
        >
          <div>
            <p className="mt-6 text-xl font-semibold leading-5 text-gray-800 lg:text-2xl lg:leading-6">
              Founded
            </p>
            <p className="mt-6 text-base font-normal leading-6 text-gray-600">
              We were founded in 2023 by David Fales a aspiring full stack web
              developer. His goal was to make websites easy to build for
              clients.
            </p>
          </div>
          <div>
            <p className="mt-6 text-xl font-semibold leading-5 text-gray-800 lg:text-2xl lg:leading-6">
              Creation
            </p>
            <p className="mt-6 text-base font-normal leading-6 text-gray-600">
              The creation process we use to create websites takes your ideas
              and creates a site based on your likeness. The design and
              development is controlled by you we do the heavy lifting.
            </p>
          </div>
          <div className="hidden sm:block">
            <p className="mt-6 text-xl font-semibold leading-5 text-gray-800 lg:text-2xl lg:leading-6">
              Users
            </p>
            <p className="mt-6 text-base font-normal leading-6 text-gray-600">
              Starting off as a new company we have reached out and created
              websites for 8 different people/companies.
            </p>
          </div>
        </div>
        <div className="relative mt-8 block sm:hidden">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8">
            <svg
              className="z-20"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="24" fill="#EC3F56" />
              <path
                d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501"
                stroke="white"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <hr className="absolute top-2/4 z-10 w-full bg-gray-200" />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:hidden sm:grid-cols-3 sm:gap-8">
          <div>
            <p className="mt-6 text-xl font-semibold leading-5 text-gray-800 lg:text-2xl lg:leading-6">
              400k User
            </p>
            <p className="mt-6 text-base font-normal leading-6 text-gray-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-16 md:gap-14 lg:mt-20 lg:flex-row">
          <div className="w-full lg:w-6/12">
            <h2 className="text-3xl font-bold leading-7 text-gray-800 lg:text-4xl lg:leading-9">
              Our Mission
            </h2>
            <p className="mt-6 w-full text-base font-normal leading-6 text-gray-600 lg:w-10/12 xl:w-9/12">
              Our mission at CodeCrafty is to revolutionize the web development
              industry by making website design and development an accessible,
              effortless, and efficient process for all. We&apos;re here to empower
              businesses, organizations, and individuals to create a powerful
              online presence, without the hurdles that are typically associated
              with web development.
            </p>
            <p className="mt-10 w-full pb-8 text-base font-normal leading-6 text-gray-600 lg:w-10/12 xl:w-9/12">
              Beyond just creating stunning websites, we&apos;re passionate about
              bringing your vision to life quickly and hassle-free. We&apos;re
              committed to providing our clients with a robust digital platform
              that serves their unique needs and amplifies their online
              influence. At CodeCrafty, our mission is to craft the web in a way
              that fosters your growth and success.
            </p>
            <Link
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 rounded-full bg-rose-500 px-6 py-4 text-xl font-bold text-white hover:bg-rose-700"
            >
              Contact Us
            </Link>
          </div>

          <div className="w-full lg:w-6/12">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12">
              {/* <!-- Team Card --> */}
              <div className="flex p-4 shadow-md" data-aos="fade-up">
                <div className="mr-6">
                  <svg
                    className="mr-6"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 15C20.4853 15 22.5 12.9853 22.5 10.5C22.5 8.01472 20.4853 6 18 6C15.5147 6 13.5 8.01472 13.5 10.5C13.5 12.9853 15.5147 15 18 15Z"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.5 28.5C27.9853 28.5 30 26.4853 30 24C30 21.5147 27.9853 19.5 25.5 19.5C23.0147 19.5 21 21.5147 21 24C21 26.4853 23.0147 28.5 25.5 28.5Z"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 28.5C12.9853 28.5 15 26.4853 15 24C15 21.5147 12.9853 19.5 10.5 19.5C8.01472 19.5 6 21.5147 6 24C6 26.4853 8.01472 28.5 10.5 28.5Z"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="">
                  <p className="text-xl font-semibold leading-5 text-gray-800 lg:text-2xl lg:leading-6">
                    Building
                  </p>
                  <p className="mt-2 text-base font-normal leading-6 text-gray-600">
                    We build fast making your website UI and UX design look
                    still look perfect with your great ideas.
                  </p>
                </div>
              </div>

              {/* <!-- Board Card --> */}
              <div className="flex p-4 shadow-md" data-aos="fade-up">
                <div className="mr-6">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 10.5C12.1569 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 12.1569 4.5 10.5 4.5C8.84315 4.5 7.5 5.84315 7.5 7.5C7.5 9.15685 8.84315 10.5 10.5 10.5Z"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 33V25.5L6 24V18C6 17.6022 6.15804 17.2206 6.43934 16.9393C6.72064 16.658 7.10218 16.5 7.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V24L13.5 25.5V33"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.5 10.5C27.1569 10.5 28.5 9.15685 28.5 7.5C28.5 5.84315 27.1569 4.5 25.5 4.5C23.8431 4.5 22.5 5.84315 22.5 7.5C22.5 9.15685 23.8431 10.5 25.5 10.5Z"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.5 33V27H19.5L22.5 18C22.5 17.6022 22.658 17.2206 22.9393 16.9393C23.2206 16.658 23.6022 16.5 24 16.5H27C27.3978 16.5 27.7794 16.658 28.0607 16.9393C28.342 17.2206 28.5 17.6022 28.5 18L31.5 27H28.5V33"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="">
                  <p className="text-xl font-semibold leading-5 text-gray-800 lg:text-2xl lg:leading-6">
                    Connection
                  </p>
                  <p className="mt-2 text-base font-normal leading-6 text-gray-600">
                    We want to establish connections with our clients that puts
                    them under the control of their site.
                  </p>
                </div>
              </div>

              {/* <!-- Press Card --> */}
              <div className="flex p-4 shadow-md" data-aos="fade-up">
                <div className="mr-6">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.5 7.5H7.5C5.84315 7.5 4.5 8.84315 4.5 10.5V25.5C4.5 27.1569 5.84315 28.5 7.5 28.5H28.5C30.1569 28.5 31.5 27.1569 31.5 25.5V10.5C31.5 8.84315 30.1569 7.5 28.5 7.5Z"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.5 10.5L18 19.5L31.5 10.5"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="">
                  <p className="text-xl font-semibold leading-5 text-gray-800 lg:text-2xl lg:leading-6">
                    Contact
                  </p>
                  <p className="mt-2 text-base font-normal leading-6 text-gray-600">
                    Being able to contact us whenever is one of our biggest
                    importance&apos;s. Making sure that if you have a edit you want
                    to make you can reach us immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-9 2xl:container md:px-6 md:py-12 lg:px-20 lg:py-16 2xl:mx-auto">
        <div className="mt-12 sm:mt-10 lg:mt-14">
          <img
            className="hidden w-full lg:block"
            src="./about_banner.png"
            alt="Group of people Chilling"
          />
          <img
            className="hidden w-full sm:block lg:hidden"
            src="./about_banner.png"
            alt="Group of people Chilling"
          />
          <img
            className="block w-full sm:hidden"
            src="./about_banner.png"
            alt="Group of people Chilling"
          />
        </div>

        <div
          className="mt-16 flex flex-col justify-between gap-12 sm:mt-12 lg:mt-16 lg:flex-row lg:gap-8"
          data-aos="fade-up"
        >
          <div className="w-full lg:w-6/12 xl:w-5/12">
            <h2 className="text-3xl font-bold leading-7 text-gray-800 lg:text-4xl lg:leading-9">
              Our Story
            </h2>
            <p className="mt-4 text-base font-normal leading-6 text-gray-600">
              CodeCrafty was born out of a desire to make website design and
              development accessible and seamless for everyone. We noticed a gap
              in the market - the process of getting a website from conception
              to live was often long, complex, and fraught with challenges.
              There was a need for a service that not only provided technical
              expertise but also a client-centered approach, ensuring each
              project was crafted with care, speed, and a deep understanding of
              the client&apos;s vision.
            </p>
            <p className="mt-6 pb-8 text-base font-normal leading-6 text-gray-600">
              Our journey began with a passionate, experienced, and
              forward-thinking web developer and designer who had this vision.
              Today, CodeCrafty has grown into a trusted platform, providing
              efficient and easy-to-use web development services for a diverse
              range of clients. Our story is one of innovation, customer
              dedication, and an unending commitment to creating a smoother,
              more user-friendly digital world. We&apos;re excited to write the next
              chapters of our story with you and your success at the heart of
              our narrative.
            </p>
            <Link
              href="/build"
              rel="noopener noreferrer"
              className="mr-4 rounded-full bg-rose-500 px-6 py-4 text-xl font-bold text-white hover:bg-rose-700"
            >
              Build a site
            </Link>
          </div>
          <div className="w-full items-center lg:flex lg:w-1/2 ">
            <img
              className="hidden w-full lg:block"
              src="./about_person.jpeg"
              alt="people discussing on board"
            />
            <img
              className="hidden h-3/4 w-full rounded sm:block lg:hidden"
              src="./about_person.jpeg"
              alt="people discussing on board"
            />
            <img
              className="block w-full rounded sm:hidden"
              src="./about_person.jpeg"
              alt="people discussing on board"
            />
          </div>
        </div>
      </div>
      <CarouselProvider
        isIntrinsicHeight={true}
        totalSlides={3}
        naturalSlideWidth={200} // Replace 100 with your desired width
        naturalSlideHeight={50} // Replace 50 with your desired height
      >
        {" "}
        <div className="overflow-y-hidden px-6 lg:hidden xl:px-0">
          <div className="container mx-auto">
            <div className="flex w-full flex-col justify-center py-1  lg:items-center">
              <h1 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                Our Work
              </h1>
            </div>
            <div className="flex w-full flex-col items-end justify-center">
              <p className="text-lg text-gray-100">
                <span id="current"></span>
                <span className="text-gray-800"></span>
              </p>
              <div className="my-4 flex items-center">
                <ButtonBack>
                  <button
                    aria-controls="slide"
                    aria-label="slide back"
                    className="mr-4 flex cursor-pointer items-center justify-center rounded-full p-2 hover:bg-gray-200 focus:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-arrow-narrow-left"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="5" y1="12" x2="9" y2="16" />
                      <line x1="5" y1="12" x2="9" y2="8" />
                    </svg>
                  </button>
                </ButtonBack>
                <ButtonNext>
                  <div
                    aria-controls="slide"
                    aria-label="slide forward"
                    className="flex cursor-pointer items-center justify-center rounded-full hover:bg-gray-200 focus:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-arrow-narrow-right"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#4338CA"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="15" y1="16" x2="19" y2="12" />
                      <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                  </div>
                </ButtonNext>
              </div>
            </div>
            <div className="flex justify-between">
              <Slider>
                <Slide index={0}>
                  <div className="w-full px-5">
                    <div className="flex w-full flex-col items-center justify-center rounded-md">
                      <div
                        style={{
                          backgroundImage: "url('/ai.png')",
                        }}
                        className="relative  flex w-full flex-col justify-center  rounded-md bg-cover "
                      >
                        <h1 className="absolute relative left-0 ml-7 mt-7 h-64 w-40 rounded text-lg  font-semibold text-white">
                          Who doesn’t love a good swim
                        </h1>

                        <button className="absolute bottom-7 right-10 rounded-full bg-white p-2 hover:opacity-75 focus:outline-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="w-full px-5">
                    <div className=" flex w-full flex-col items-center justify-center rounded-md">
                      <div
                        style={{
                          backgroundImage:
                            "url('https://i.ibb.co/M6jV7ty/Rectangle-28.png');",
                        }}
                        className="relative flex w-full flex-col justify-center  rounded-md bg-cover "
                      >
                        <h1 className="absolute relative left-0 ml-7 mt-7 h-64 w-40 rounded text-lg  font-semibold text-white">
                          A truly immersive experience like never before
                        </h1>

                        <button className="absolute bottom-7 right-10 rounded-full bg-white p-2 hover:opacity-75 focus:outline-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="w-full px-5">
                    <div className="flex w-full flex-col items-center justify-center rounded-md">
                      <div
                        style={{
                          backgroundImage:
                            "url('https://i.ibb.co/Lgjy80Y/Content-image-1.png');",
                        }}
                        className="relative flex w-full flex-col justify-center rounded-md bg-cover "
                      >
                        <h1 className="absolute relative left-0 ml-7 mt-7 h-64 w-40 rounded text-lg  font-semibold text-white">
                          Maybe a walk on the beach could help
                        </h1>

                        <button className="absolute bottom-7 right-10 rounded-full bg-white p-2 hover:opacity-75 focus:outline-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </Slide>
              </Slider>
            </div>
          </div>
        </div>
      </CarouselProvider>
      <CarouselProvider
        isIntrinsicHeight={true}
        totalSlides={3}
        naturalSlideWidth={200} // Replace 100 with your desired width
        naturalSlideHeight={100} // Replace 50 with your desired height
      >
        <div className="hidden px-6 lg:block xl:px-0 ">
          <div className="container mx-auto">
            <div className="flex flex-row">
              <div
                role="article"
                className="items-left flex w-full flex-col justify-center py-10"
              >
                <h1 className="text-3xl font-bold text-gray-800 md:text-5xl">
                  Our Work
                </h1>
              </div>
              <div className="my-3 flex w-full flex-col items-end justify-end pr-24">
                <p className="text-lg text-gray-100">
                  <span id="current3"></span>
                  <span className="text-gray-800"></span>
                </p>
              </div>
              <div className="my-4 flex items-center">
                <ButtonBack>
                  <button
                    aria-controls="slide"
                    aria-label="slide back"
                    className="mr-4 flex cursor-pointer items-center justify-center rounded-full p-2 hover:bg-gray-200 focus:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-arrow-narrow-left"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="5" y1="12" x2="9" y2="16" />
                      <line x1="5" y1="12" x2="9" y2="8" />
                    </svg>
                  </button>
                </ButtonBack>
                <ButtonNext>
                  <div
                    aria-controls="slide"
                    aria-label="slide forward"
                    className="flex cursor-pointer items-center justify-center rounded-full hover:bg-gray-200 focus:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-arrow-narrow-right"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#4338CA"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="15" y1="16" x2="19" y2="12" />
                      <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                  </div>
                </ButtonNext>
              </div>
            </div>
            <div
              id="slide"
              aria-roledescription="carousel"
              aria-label="about healt care"
              className="slider3"
            >
              <div className="slide-ana3">
                <Slider>
                  <Slide index={0}>
                    <div className="grid grid-cols-2  gap-6">
                      <div
                        aria-live="off"
                        aria-roledescription="slide1"
                        className=""
                      >
                        <div
                          style={{
                            backgroundImage: "url('/ai.png')",
                          }}
                          className="relative  flex w-full flex-col justify-center  rounded-md bg-cover "
                        >
                          <h1 className="absolute relative left-0 ml-7 mt-7 h-64 w-40 rounded text-left text-lg  font-semibold text-black"></h1>

                          <button className="absolute bottom-7 right-10 rounded-full bg-white p-2 hover:opacity-75 focus:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-gray-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="">
                        <div
                          aria-live="off"
                          aria-roledescription="slide2"
                          className=" flex-colrounded-md flex w-full items-center justify-center "
                        >
                          <div
                            style={{
                              backgroundImage: "url('/portDavid.png')",
                            }}
                            className="relative  flex w-full flex-col justify-center  rounded-md bg-cover "
                          >
                            <h1 className="absolute relative left-0 ml-7 mt-7 h-64 w-40 rounded text-lg  font-semibold text-white"></h1>

                            <button className="absolute bottom-7 right-10 rounded-full bg-white p-2 hover:opacity-75 focus:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="grid grid-cols-2 gap-6">
                      <div className=" ">
                        <div
                          aria-live="off"
                          aria-roledescription="slide4"
                          className="flex w-full flex-col items-center justify-center rounded-md  bg-white "
                        >
                          <div
                            style={{
                              backgroundImage: "url('/litline.png')",
                            }}
                            className="relative  flex w-full flex-col justify-center  rounded-md  bg-cover "
                          >
                            <h1 className="absolute relative left-0 ml-7 mt-7 h-64 w-40 rounded text-lg  font-semibold text-white">
                            </h1>

                            <button className="absolute bottom-7 right-10 rounded-full bg-white p-2 hover:opacity-75 focus:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className=" ">
                        <div
                          aria-live="off"
                          aria-roledescription="slide5"
                          className="flex w-full flex-col items-center justify-center rounded-md  bg-white"
                        >
                          <div
                            style={{
                              backgroundImage: "url('/photo.png')",
                            }}
                            className="relative  flex w-full flex-col justify-center  rounded-md  bg-cover "
                          >
                            <h1 className="absolute relative left-0 ml-7 mt-7 h-64 w-40 rounded text-lg  font-semibold text-white">
                            </h1>

                            <button className="absolute bottom-7 right-10 rounded-full bg-white p-2 hover:opacity-75 focus:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="grid grid-cols-2 gap-6">
                      <div className=" ">
                        <div
                          aria-live="off"
                          aria-roledescription="slide7"
                          className="flex w-full flex-col items-center justify-center rounded-md  bg-white"
                        >
                          <div
                            style={{
                              backgroundImage:
                                "url('/codecrafty.png')",
                            }}
                            className="relative  flex w-full flex-col justify-center  rounded-md  bg-cover "
                          >
                            <h1 className="absolute relative left-0 ml-7 mt-7 h-64 w-40 rounded text-lg  font-semibold text-white">
                              Who doesn’t love a good swim
                            </h1>

                            <button className="absolute bottom-7 right-10 rounded-full bg-white p-2 hover:opacity-75 focus:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className=" ">
                        <div
                          aria-live="off"
                          aria-roledescription="slide8"
                          className="flex w-full flex-col items-center justify-center rounded-md  bg-white"
                        >
                          <div
                            style={{
                              backgroundImage: "url('/rjrobo.png')",
                            }}
                            className="relative  flex w-full flex-col justify-center  rounded-md  bg-cover "
                          >
                            <h1 className="absolute relative left-0 ml-7 mt-7 h-64 w-40 rounded text-lg  font-semibold text-white">
                            </h1>

                            <button className="absolute bottom-7 right-10 rounded-full bg-white p-2 hover:opacity-75 focus:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slide>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </CarouselProvider>

      <Footer />
    </div>
  );
}

export default About;
