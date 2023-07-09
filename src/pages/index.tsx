import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamic Import of AOS


export default function Home() {
  const { data: sessionData } = useSession();

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

      <section className="relative bg-[url(../../public/banner.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Code Crafty
              <strong className="block font-extrabold text-rose-700">
                Web Development and Design
              </strong>
            </h1>

            <p className="mt-4 max-w-lg pb-8 font-semibold sm:text-xl sm:leading-relaxed">
              Welcome to the official CodeCrafty Web Development and Design
              website.
            </p>

            <Link href="/login" legacyBehavior>
              <a className="rounded bg-rose-700 px-6 py-4 text-lg font-bold text-white hover:bg-rose-600">
                Build Your Dream Site
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="px-4 py-16 pb-40 pt-40 sm:px-6 lg:px-8">
        <div
          className="relative mx-auto max-w-screen-xl text-center"
          data-aos="fade-up"
        >
          <h2 className="text-5xl font-extrabold">
            Transform your online presence with our exceptional web solutions,
            crafted to outshine competitors in speed, affordability, and
            quality.
          </h2>
        </div>
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-screen-xl lg:flex lg:items-center">
          <div className="w-full lg:w-1/2">
            <Image
              className="rounded-full object-cover shadow-lg"
              src="/about_photo.jpg"
              alt="About us"
              layout="responsive"
              width={500}
              height={300}
            />
          </div>
          <div className="mt-8 lg:ml-8 lg:mt-0 lg:w-1/2">
            <p className="mt-4 text-xl">
              At CodeCrafty, we specialize in delivering swift and
              budget-friendly website solutions. Our mission is to simplify the
              entire process, ensuring that building your dream website is a
              hassle-free experience. Trust us to bring your vision to life with
              efficiency, affordability, and utmost ease.
            </p>
            <Link href="/about" legacyBehavior>
              <a className="mt-4 inline-block rounded bg-rose-600 px-4 py-2 font-bold text-white hover:bg-rose-700">
                Learn More
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-screen-xl lg:flex lg:items-center">
          <div className="mt-8 lg:ml-8 lg:mt-0 lg:w-1/2">
            <p className="mt-4 text-xl">
              Our development approach at CodeCrafty is centered around
              cutting-edge technology. We harness the power of the latest
              JavaScript frameworks to ensure rapid website development, always
              staying up to date with industry trends. Additionally, we leverage
              the capabilities of cloud platforms for seamless backend
              development, guaranteeing robustness and scalability. With our
              tech-forward methodology, we bring you websites that are not only
              fast and efficient but also equipped to adapt to your evolving
              business needs.
            </p>
            <Link href="/how" legacyBehavior>
              <a className="mt-4 inline-block rounded bg-rose-600 px-4 py-2 font-bold text-white hover:bg-rose-700">
                Learn More
              </a>
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              className="rounded-full object-cover shadow-lg"
              src="/work.jpg"
              alt="About us"
              layout="responsive"
              width={500}
              height={300}
            />
          </div>
        </div>
      </section>

      <section className="relative flex items-center justify-center px-4 py-16 pb-40 pt-40 sm:px-6 lg:px-8">
        <div
          className="absolute h-96 w-96 translate-y-1/4 transform rounded-full bg-rose-200 opacity-50"
          data-aos="fade-up"
        />
        <div
          className="absolute left-0 h-96 w-96 translate-x-1/4 translate-y-1/4 transform rounded-full bg-rose-200 opacity-50"
          data-aos="fade-right"
        />
        <div
          className="absolute right-0 h-96 w-96 -translate-x-1/4 translate-y-1/4 transform rounded-full bg-rose-200 opacity-50"
          data-aos="fade-left"
        />
        <div className="relative z-10 text-center">
          <h2 className="mb-4 text-7xl font-extrabold" data-aos="fade">
            Ready to start building your dream site?
          </h2>
          <Link href="/build" legacyBehavior>
            <a className="inline-block rounded bg-rose-600 px-6 py-3 text-3xl font-bold text-white hover:bg-rose-700">
              Start Building
            </a>
          </Link>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-screen-xl text-center">
          <h2 className="mb-4 text-4xl font-extrabold">Have a question?</h2>
          <Link href="/contact" legacyBehavior>
            <a className="inline-block rounded bg-rose-600 px-6 py-3 text-lg font-bold text-white hover:bg-rose-700">
              Contact Us
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
