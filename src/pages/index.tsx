import Image from "next/image";
import Link from "next/link";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import TypingText from "~/components/TypingText";
import { useVisibility } from "../hooks/useVisibility";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { Carousel } from "~/components/Carousel";
import PdfViewer from "~/components/PdfViewer";




export default function Home() {
  const [section1Visible, section1Ref] = useVisibility();
  const [section2Visible, section2Ref] = useVisibility();
  const [startedAnimation1, setStartedAnimation1] = useState(false);
  const [startedAnimation2, setStartedAnimation2] = useState(false);

  useEffect(() => {
    console.log("Section 1 Visible:", section1Visible);
    if (section1Visible && !startedAnimation1) {
      setStartedAnimation1(true);
    }
  }, [section1Visible, startedAnimation1]); // <-- Include startedAnimation1

  useEffect(() => {
    console.log("Section 2 Visible:", section2Visible);
    if (section2Visible && !startedAnimation2) {
      setStartedAnimation2(true);
    }
  }, [section2Visible, startedAnimation2]); // <-- Include startedAnimation2

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

  const slideInFromLeft2 = useSpring({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: startedAnimation2
      ? { opacity: 1, transform: "translateX(0)" }
      : { opacity: 0, transform: "translateX(-100px)" },
  });

  const slideInFromRight2 = useSpring({
    from: { opacity: 0, transform: "translateX(100px)" },
    to: startedAnimation2
      ? { opacity: 1, transform: "translateX(0)" }
      : { opacity: 0, transform: "translateX(100px)" },
  });

  return (
    <div className="">
      <Navbar />

      <section className="relative bg-cover bg-center h-[80vh] bg-no-repeat">
        <Image
          src="/banner.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="CodeCrafty Banner"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div data-aos="fade" className="max-w-xl text-center sm:text-left">
            <h1 className="font-montserrat text-4xl font-extrabold sm:text-5xl ">
              Code Crafty
              <strong className="block text-3xl font-extrabold text-rose-700 sm:text-4xl">
                Web Development and Design
              </strong>
            </h1>

            <p className="mt-4 max-w-lg pb-8 font-merriweather text-lg font-semibold sm:text-xl sm:leading-relaxed">
              Welcome to Code Crafty Web Design, Development, and AI
              Integration.
            </p>

            <Link href="/build" legacyBehavior>
              <a className="text-m rounded bg-rose-700 px-6 py-4 font-montserrat font-bold text-white hover:bg-rose-600 sm:text-lg">
                Build Your Dream Site
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="px-4 py-16 pb-8 pt-24 sm:px-6 sm:pb-40 sm:pt-40 lg:px-8">
        <div
          className="relative mx-auto max-w-screen-xl text-center"
          data-aos=""
        >
          <h2 className="font-montserrat text-4xl font-extrabold">
            <TypingText
              text="Design and develop your modern-day website and AI Integration with our team with at Affordable
            Prices"
            />
          </h2>
        </div>
      </section>
      <section
        className="bg-white px-4 py-16 sm:px-6 lg:px-8"
        ref={section1Ref}
      >
        <div className="relative mx-auto max-w-screen-xl lg:flex lg:items-center">
          <animated.div style={slideInFromLeft1} className="w-full lg:w-1/2">
            <Image
              className="rounded-full object-cover p-4"
              src="/test5.png"
              alt="About us"
              layout="responsive"
              width={200}
              height={300}
            />
          </animated.div>
          <animated.div
            style={slideInFromRight1}
            className="mt-8 lg:ml-8 lg:mt-0 lg:w-1/2"
          >
            <h2 className="mt-8 font-montserrat text-3xl font-extrabold sm:text-left sm:text-5xl">
              Who We Are
            </h2>
            <p className="mt-2 font-merriweather text-sm text-gray-700 sm:mt-4 sm:text-left sm:text-xl">
              At CodeCrafty, our passion is building digital experiences that
              truly stand out. We believe in crafting solutions that not only
              look great but also function seamlessly. From design to
              deployment, our team ensures that each project receives the
              attention to detail it deserves. Our commitment to quality,
              coupled with a touch of AI integration, ensures that every website
              we deliver is primed to exceed expectations.
            </p>

            <Link href="/about/aboutUs" legacyBehavior>
              <a className="mt-4 inline-block rounded bg-rose-600 px-4 py-2 font-montserrat font-bold text-white hover:bg-rose-700">
                Learn More
              </a>
            </Link>
          </animated.div>
        </div>
      </section>
      <section
        className="bg-white px-4 py-16 sm:px-6 lg:px-8"
        ref={section2Ref}
      >
        <div className="relative mx-auto max-w-screen-xl lg:flex lg:items-center">
          <animated.div
            style={slideInFromLeft2}
            className="mt-8 lg:ml-8 lg:mt-0 lg:w-1/2"
          >
            <h2 className="mt-8 font-montserrat text-3xl font-extrabold sm:text-left sm:text-5xl">
              The Process
            </h2>
            <p className="mt-2 font-merriweather text-sm text-gray-700 sm:mt-4 sm:text-left sm:text-xl">
              Our process at CodeCrafty is a blend of creativity and technology.
              We kick off with a deep dive into your requirements, ensuring we
              fully grasp your vision. From there, our designers craft visual
              experiences that captivate, while our developers bring those
              designs to life using the latest in web technology. With an
              emphasis on continuous maintenance and leveraging AI, we ensure
              that your website stays modern, functional, and ahead of the
              curve.
            </p>

            <div className="pb-4">
              {" "}
              <Link href="/how" legacyBehavior>
                <a className="mt-4 inline-block rounded bg-rose-600 px-4 py-2 font-montserrat font-bold text-white hover:bg-rose-700">
                  How We Do It
                </a>
              </Link>
            </div>
          </animated.div>
          <animated.div
            style={slideInFromRight2}
            className="w-full pl-4 lg:w-1/2"
          >
            <Image
              className="rounded-full object-cover p-4"
              src="/test.jpeg"
              alt="About us"
              layout="responsive"
              width={500}
              height={300}
            />
          </animated.div>
        </div>
      </section>
      <div className="my-2">
        <div className="App">
          <Carousel />
        </div>
      </div>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-screen-md text-center">
          <Image
            className="mx-auto rounded-full object-cover p-4 shadow-lg"
            src="/team4.jpeg"
            alt="Meet the Team"
            layout="responsive"
            width={300}
            height={300}
          />

          {/* Title */}
          <h2 className="mt-8 font-montserrat text-3xl font-extrabold sm:text-5xl">
            Meet the Team
          </h2>

          {/* Description */}
          <p className="text-md mt-2 font-merriweather text-gray-700 sm:mt-4 sm:text-left sm:text-xl">
            Our team is composed of passionate professionals dedicated to
            creating outstanding digital experiences. With expertise ranging
            from design to development, each member brings a unique perspective
            and set of skills to the table.
          </p>

          {/* Button */}
          <div className="mt-4 sm:mt-8">
            <Link href="/about/team" legacyBehavior>
              <a className="inline-block rounded bg-rose-600 px-6 py-3 font-montserrat font-bold text-white hover:bg-rose-700">
                Get to Know Us
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* PDF Display Section */}
      <section className="flex flex-wrap items-center justify-center space-x-4 px-4 py-16">
        <PdfViewer
          imageSrc="/pdfs/webPhoto.png" // Path to your image file
          pdfSrc="/pdfs/web.pdf" // Path to your PDF file
          title="The Web Dev One Pager"
          altText="Web Development One Pager Preview"
        />
        <PdfViewer
          imageSrc="/pdfs/aiPhoto.png" // Path to your image file
          pdfSrc="/pdfs/ai.pdf" // Path to your PDF file
          title="The AI Integration One Pager"
          altText="AI Integration One Pager Preview"
        />
      </section>

      <section className="bg-rose-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-screen-xl lg:flex lg:items-center">
          <div className="lg:w-1/2 pr-20">
            <h2 className="mb-4 font-merriweather text-3xl font-extrabold">
              Coming Soon: Alias The All In One Online Business Platform
            </h2>
            <p className="mb-4 font-merriweather text-lg text-gray-700">
              Alias is an all-in-one online business platform that combines the
              power of AI with the flexibility of web development. With Alias,
              you can create, manage, and grow your online business with ease.
              Stay tuned for more updates!

            </p>
            <Link href="/alias" legacyBehavior>
              <a className="inline-block rounded bg-rose-600 px-6 py-3 font-bold text-white hover:bg-rose-700">
                Learn More
              </a>
            </Link>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            {/* Placeholder for Image */}
            <Image
              src="/aliasLogo.png" // Replace with your image path
              alt="CodeCatalyst AI"
              width={500}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>
      </section>

      <section
        className="relative flex hidden items-center justify-center px-4 py-16 pb-40 pt-40 sm:block lg:px-8"
        data-aos="fade-up"
      >
       
        <div className="relative z-10 text-center font-montserrat">
          <h2
            className="mb-4 text-4xl font-extrabold sm:text-7xl"
            data-aos="fade"
          >
            Ready to start building your dream site?
          </h2>
          <div className="pt-4">
            <Link href="/build" legacyBehavior>
              <a className="inline-block rounded bg-rose-600 px-6 py-3 text-xl font-bold text-white hover:bg-rose-700 sm:text-3xl">
                Start Building
              </a>
            </Link>
          </div>
        </div>
      </section>



      <section className="bg-white px-4 py-16 font-montserrat sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-screen-xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
            Have a question?
          </h2>
          <Link href="/contact" legacyBehavior>
            <a className="text-md inline-block rounded bg-rose-600 px-6 py-3 font-bold text-white hover:bg-rose-700 sm:text-lg">
              Contact Us
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
