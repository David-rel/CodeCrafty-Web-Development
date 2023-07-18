import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function IndexPage() {
  const [email, setEmail] = useState("");
  const [full_name, setFullName] = useState("");
  const [message, setMessage] = useState("");

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
      <div className="relative py-4  lg:py-8">
        <img
          src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
          className="absolute inset-0 hidden h-2/5 w-full rounded object-cover object-center lg:h-full lg:w-1/2 xl:block"
          alt="map"
        />
        <div className="relative xl:container  xl:mx-auto ">
          <div className="flex flex-wrap xl:container xl:mx-auto">
            <div className="relative mb-10 w-full pl-0 lg:w-1/2 xl:mt-10 xl:pl-12 2xl:pl-0 2xl:pr-24 " data-aos="fade-right">
              <img
                src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
                className="absolute inset-0 h-full w-full rounded bg-cover bg-center xl:hidden xl:w-1/2"
                alt="map"
              />
              <div className="relative z-20 flex w-full  flex-col  items-start px-4 py-4 xl:justify-start xl:px-0 xl:py-0">
                <div className="w-full xl:pt-1 2xl:pl-48">
                  <h1 className="text-4xl font-bold tracking-wider text-gray-800 md:text-5xl lg:text-7xl">
                    We’re Here
                  </h1>
                  <div className="mt-3 w-full md:w-10/12">
                    <h2 className="text-base leading-8 tracking-wider text-gray-800 md:text-lg">
                      We believe digital innovation is at the heart of every
                      business success
                    </h2>
                    <div className="mt-4 md:mt-8">
                      <h2 className="text-sm font-semibold text-rose-700 md:text-base">
                        Location
                      </h2>
                      <h2 className="mt-2 text-base leading-8 tracking-wider text-gray-800 md:text-lg">
                        Denver, CO
                      </h2>
                    </div>
                    <div className="mt-4 md:mt-8">
                      <h2 className="text-sm font-semibold text-rose-700 md:text-base">
                        Contact
                      </h2>
                      <h2 className="mt-2 text-base leading-8 tracking-wider text-gray-800 md:text-lg">
                        +1 720 612 2979 (Phone)
                      </h2>
                    </div>
                    <div className="mt-4 md:mt-8">
                      <h2 className="text-sm font-semibold text-rose-700 md:text-base">
                        Email
                      </h2>
                      <h2 className="mt-2 text-base leading-8 tracking-wider text-gray-800 md:text-lg">
                        davidfalesct@gmail.com
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-24 xl:pt-10" data-aos="fade-left">
              <div className="pl-2">
                <h1 className="text-4xl font-bold tracking-wider text-rose-600 md:text-5xl lg:text-7xl">
                  Let’s Talk
                </h1>
                <form
                  id="contact"
                  action="https://formspree.io/f/xeqbqzja"
                  method="POST"
                >
                  <div className="mt-3 w-full 2xl:w-8/12">
                    <h2 className="text-base leading-8 tracking-wider text-gray-800 md:text-lg">
                      For enquiries, please email us using the form below
                    </h2>
                    <div className="mt-4 md:mt-8">
                      <p className="text-base font-medium text-gray-800">
                        Name
                      </p>
                      <input
                        className="mt-3 w-11/12 border-2 border-black py-5 pl-4 text-base text-gray-800 hover:border-rose-600 focus:border-rose-600 focus:outline-none lg:w-full xl:w-10/12"
                        type="text"
                        name="full_name"
                        placeholder="Elon Musk"
                        value={full_name || ""}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                    <div className="mt-4 md:mt-8">
                      <p className="text-base font-medium text-gray-800">
                        Email Address
                      </p>
                      <input
                        className="mt-3 w-11/12 border-2 border-black py-5 pl-4 text-base text-gray-800 hover:border-rose-600 focus:border-rose-600 focus:outline-none lg:w-full xl:w-10/12"
                        type="email"
                        name="email"
                        placeholder="example@mail.com"
                        value={email || ""}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mt-4 md:mt-8">
                      <p className="text-base font-medium text-gray-800">
                        Message
                      </p>
                      <textarea
                        className="mt-3 w-11/12 resize-none border-2 border-black py-5 pl-4 text-base text-gray-800 hover:border-rose-600 focus:border-rose-600 focus:outline-none lg:w-full xl:h-40 xl:w-10/12"
                        name="message"
                        placeholder="Write us something..."
                        defaultValue={""}
                        value={message || ""}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    <div className="py-5">
                      <button
                        type="submit"
                        className="rounded-lg bg-rose-600 px-5 py-3 text-sm font-semibold tracking-wider text-white duration-150 ease-in hover:opacity-90 md:px-10 md:py-5 md:text-lg"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
