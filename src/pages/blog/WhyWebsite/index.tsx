import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import Head from "next/head";

function WhyCodedWebsite() {
  return (
    <div>
      <Head>
        <title>Code Crafty - Why Coded Websites</title>
      </Head>
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-12 text-center text-4xl font-bold">
          Why Companies Should Get a Coded Website
        </h1>

        {/* Introductory section with image */}
        <div className="mb-8">
          <div className="relative mb-4 h-96 w-full">
            <Image
              src="/blogs/whyCoded1.webp"
              alt="Custom Coded Website"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="text-lg">
            In the competitive digital arena, a company&apos;s online presence is
            paramount. While drag-and-drop builders like WordPress or Wix offer
            quick solutions, they often fall short in customization,
            performance, and scalability. A custom-coded website, crafted from
            the ground up, provides unparalleled advantages in terms of
            flexibility, security, and functionality. This post delves into the
            myriad reasons why investing in a custom-coded website is a
            strategic move for businesses aiming to stand out in a crowded
            market.
          </p>
        </div>

        {/* Bullet points section */}
        <div className="mb-8">
          <h2 className="mb-4 text-4xl font-semibold">
            Benefits of a Custom-Coded Website
          </h2>
          <div className="relative mb-4 mt-10 h-96 w-full">
            <Image
              src="/blogs/whyCoded2.webp"
              alt="Custom Coding"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="mb-2 text-lg">
            Custom-coded websites offer a range of benefits that drag-and-drop
            builders simply can&apos;t match. Here are some key advantages:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>Performance Optimization:</strong> Custom-coded websites
              are optimized for performance, ensuring faster load times and a
              smoother user experience.
            </li>
            <li>
              <strong>SEO Benefits:</strong> With clean, custom code, SEO
              strategies can be implemented more effectively, leading to better
              search engine rankings.
            </li>
            <li>
              <strong>Scalability:</strong> Custom websites are built to scale,
              allowing businesses to grow and add new features without being
              constrained by platform limitations.
            </li>
            <li>
              <strong>Security:</strong> Custom coding reduces vulnerabilities
              and allows for the implementation of advanced security measures,
              protecting sensitive data.
            </li>
            <li>
              <strong>Unique Branding:</strong> Custom websites offer unlimited
              design possibilities, enabling businesses to create a unique
              online identity that truly reflects their brand.
            </li>
          </ul>
        </div>

        {/* Mixed content section */}
        <div className="mb-8">
          <h2 className="mb-4 text-4xl font-semibold">
            Enhanced User Experience through Custom Solutions
          </h2>
          <div className="relative mb-4 h-96 w-full pt-10">
            <Image
              src="/blogs/whyCoded3.webp"
              alt="Enhanced User Experience"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="mb-4 text-lg">
            Custom-coded websites provide a superior user experience by offering
            features and functionalities that are tailored to the specific needs
            of the business and its customers. These bespoke solutions ensure
            that users enjoy a seamless, intuitive, and engaging interaction
            with the website, which can lead to increased customer satisfaction
            and higher conversion rates.
          </p>

          <p className="mb-4 text-lg">
            Custom websites also allow for the integration of advanced
            technologies and third-party services, such as AI-driven analytics,
            personalized content recommendations, and interactive elements,
            which can significantly enhance user engagement and drive business
            growth.
          </p>
          {/* Example of an external link */}
          <Link
            href="/services/custom-websites"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Learn more about our custom website development services
          </Link>
        </div>

        {/* Outro */}
        <div className="text-center">
          <p className="text-lg">
            Thank you for reading! Stay tuned for more insights into the
            advantages of custom-coded websites and how they can elevate your
            business.
          </p>
          {/* Example of an internal link */}
          <Link href="/contact" passHref legacyBehavior>
            <a className="text-blue-600 hover:underline">Contact us</a>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WhyCodedWebsite;
