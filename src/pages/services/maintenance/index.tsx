import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export default function DesignPage() {
  return (
    <div>
      <Navbar />

      <div className="bg-white p-12">
        <Head>
          <title>Code Crafty - Web Maintenance</title>
        </Head>

        <div
          data-aos="fade-up"
          className="mx-auto max-w-7xl flex-wrap items-center"
        >
          <div className="w-full pb-6 text-center font-montserrat">
            <h2 className="text-xl text-gray-500">
              Were here for you even after we build
            </h2>
            <h1 className="mb-8 text-4xl font-bold md:text-7xl lg:text-8xl">
              Web Maintenance
            </h1>
          </div>
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="w-full p-4 pr-12 font-merriweather lg:w-2/3">
              <p className="mb-4 text-xl">
                At Code Crafty, our web maintenance service goes beyond the
                ordinary. We believe in proactive care for your digital
                presence. Not only do we keep comprehensive logs of your
                website&apos;s activity and updates, but we also ensure that
                everything runs smoothly and efficiently.
              </p>
              <p className="mb-4 text-lg text-gray-700">
                From tidying up redundant data to implementing crucial updates,
                our team is committed to providing rapid and responsive
                solutions. But our services don&apos;t stop at just maintenance.
                We recognize the dynamic nature of the digital world. Whether
                you need to modify existing content or introduce new projects
                and subjects, we&apos;re here to help.
              </p>
              <p className="mb-4 text-lg text-gray-700">
                Our platform is designed with flexibility in mind, allowing you
                to seamlessly go back, edit text, and integrate new elements,
                ensuring your website remains relevant and reflective of your
                evolving needs.
              </p>
              <div className="pt-4">
                <Link
                  href="/build"
                  rel="noopener noreferrer"
                  className="rounded-full bg-rose-500  px-2 py-4 text-sm font-bold text-white hover:bg-rose-700 lg:px-4 xl:text-lg"
                >
                  BUILD YOUR DREAM SITE
                </Link>
              </div>
            </div>
            <div className="flex w-full justify-center pb-6 lg:w-2/3">
              <Image
                src="/maintenance.png" // replace with your image path
                alt="Design Services"
                width={500}
                height={500}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
