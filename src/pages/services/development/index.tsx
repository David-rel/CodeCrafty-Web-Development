import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { useVisibility } from "~/hooks/useVisibility";

export default function CustomWebSolutions() {
  const [section1Visible, section1Ref] = useVisibility();
  const [startedAnimation1, setStartedAnimation1] = useState(false);

  useEffect(() => {
    console.log("Section 1 Visible:", section1Visible);
    if (section1Visible && !startedAnimation1) {
      setStartedAnimation1(true);
    }
  }, [section1Visible, startedAnimation1]); // <-- Include startedAnimation1

  const slideInFromLeft1 = useSpring({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: startedAnimation1
      ? { opacity: 1, transform: "translateX(0)" }
      : { opacity: 0, transform: "translateX(-100px)" },
  });

  const slideInFromRight1 = useSpring({
    from: { opacity: 0, transform: "translateX(100px)" },
    to: startedAnimation1
      ? { opacity: 1, transform: "translateX(0)" }
      : { opacity: 0, transform: "translateX(100px)" },
  });

  return (
    <div>
      <Navbar />

      <div className="bg-gray-100 p-12 font-montserrat">
        <Head>
          <title>Code Crafty - Custom Web Development</title>
        </Head>

        <div className="mx-auto flex max-w-7xl flex-wrap items-center">
          <div data-aos="fade-right" className="w-full lg:w-1/2">
            <h1 className="mb-8 text-5xl font-bold">
              Get Custom Web Solutions From Scratch
            </h1>

            <h2 className="mb-6 text-3xl font-semibold">Why Custom Made?</h2>
            <p className="mb-4 font-merriweather">
              In the present digital environment, it can be difficult for small
              businesses to stay relevant. You must stand out from the throng.
              To make those original custom website design a workable reality.
              to passionately narrate your story.
            </p>
            <p className="mb-4 font-merriweather">
              Instead of using generic boxed software, consider using
              professional custom website design and development services. It is
              the custom design of your website that is created from the ground
              up by custom web development consultants, using front-end and
              back-end technologies to make your site distinct, scalable,
              mobile-friendly, and ideally suited to your business needs.
            </p>
            <p className="font-merriweather font-medium">
              So why wait? Get the best web development services in the USA only
              at Code Crafty.
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="mt-12 flex w-full justify-center lg:mt-0 lg:w-1/2"
          >
            <Image
              src="/devimg.png"
              alt="Sample Image"
              width={500}
              height={700}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
      <div
        className="mx-auto flex max-w-7xl flex-wrap items-center pt-12"
        ref={section1Ref as React.RefObject<HTMLDivElement>}
      >
        <div className="mt-12 flex w-full justify-center lg:mt-0 lg:w-1/2">
          <animated.div style={slideInFromLeft1}>
            <Image
              src="/devimg2.jpeg"
              alt="Development Image"
              width={500}
              height={700}
              className="rounded-md pb-8"
            />
          </animated.div>
        </div>

        <div className="w-full p-4 font-merriweather lg:w-1/2">
          <animated.div style={slideInFromRight1}>
            <p className="mb-4 text-lg">
              As a web development company, located in Colorado, we have been
              serving our clients the best work. Specifically, we are working in
              various technological areas and platforms including Next JS,
              Azure, React, Node, and much more. We have highly proficient
              resources to work for our clients. And, We provide highly
              efficient and affordable web development solutions.
            </p>
            <p className="mb-4 text-gray-600">
              We offer a wide range of highly optimized web development
              solutions that aid startups and also brands turn their ideas into
              reality. Not only do our web development services cover various
              platforms and technology areas, but also our customers can hire a
              web developer that provides dynamic web solutions to your
              business.
            </p>
            <p className="font-medium text-gray-600">
              The benefit of having highly experienced resources is that clients
              get the best quality solutions within a given timeline. Also, we
              serve thousands of clients across the globe with our optimized web
              development solutions.
            </p>
            <div className="pt-8">
              <Link
                href="/build"
                rel="noopener noreferrer"
                className="mr-4 rounded-full bg-rose-500 px-6 py-4 text-xl font-bold text-white hover:bg-rose-700"
              >
                BUILD YOUR DREAM SITE
              </Link>
            </div>
          </animated.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
