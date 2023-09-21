import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
  const { data: sessionData } = useSession();
  const router = useRouter();
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const setLocalStorageSidebarState = (state: boolean) => {
    if (typeof window !== "undefined") {
      // Check for server-side rendering
      localStorage.setItem("sidebarOpen", JSON.stringify(state));
    }
  };

  const getLocalStorageSidebarState = (): boolean | null => {
    if (typeof window !== "undefined") {
      const storedState: string | null = localStorage.getItem("sidebarOpen");
      if (storedState !== null) {
        try {
          const parsedState = JSON.parse(storedState) as boolean;
          if (typeof parsedState === "boolean") {
            return parsedState;
          }
        } catch (error) {
          console.error("Failed to parse stored sidebar state:", error);
        }
      }
    }
    return null;
  };

  // Initialize sidebarOpen based on screen size
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    const storedState = getLocalStorageSidebarState();
    return storedState !== null ? storedState : isMobile ? true : false;
  });

  useEffect(() => {
    setLocalStorageSidebarState(sidebarOpen);
  }, [sidebarOpen]);
  const isActive = (pathname: string, paths: string[] = [], exact = true) => {
    if (exact) {
      return router.pathname === pathname;
    } else {
      return (
        router.pathname.startsWith(pathname) || paths.includes(router.pathname)
      );
    }
  };
  const aboutPaths = [
    "/about/aboutUs",
    "/about/contact",
    "/about/team",
    "/socials",
  ];
  const productPaths = [
    "/products/development",
    "/products/design",
    "/products/ai",
    "/products/maintenance",
  ];

  const links = (
    <>
      <div
        className="group relative"
        onMouseEnter={() => setAboutDropdownOpen(true)}
        onMouseLeave={() => setAboutDropdownOpen(false)}
        onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
      >
        <a
          className={`cursor-pointer text-2xl font-bold ${
            sidebarOpen ? "text-3xl" : "text-xl"
          } ${
            isActive("/about", aboutPaths, false)
              ? "text-rose-700 underline"
              : "text-rose-500 hover:underline group-hover:text-rose-700"
          }`}
        >
          About
        </a>
        {aboutDropdownOpen && (
          <div
            className={`z-10 flex w-40 flex-col space-y-2 rounded-lg border border-gray-200 bg-gray-200 
  ${
    isMobile
      ? "w-48 border-none bg-white pl-4 text-2xl font-semibold"
      : "absolute left-0 text-xl"
  }`}
          >
            <Link href="/about/aboutUs" legacyBehavior>
              <a
                className={`p-2 ${
                  isActive("/about/aboutUs")
                    ? "text-rose-700 underline"
                    : "hover:text-rose-700 hover:underline"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                About Us
              </a>
            </Link>
            <Link href="/about/contact" legacyBehavior>
              <a
                className={`p-2 ${
                  isActive("/about/contact")
                    ? "text-rose-700 underline"
                    : "hover:text-rose-700 hover:underline"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                Contact Us
              </a>
            </Link>
            <Link href="/about/team" legacyBehavior>
              <a
                className={`p-2 ${
                  isActive("/about/team")
                    ? "text-rose-700 underline"
                    : "hover:text-rose-700 hover:underline"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                The Team
              </a>
            </Link>
            <Link href="/socials" legacyBehavior>
              <a
                className={`p-2 ${
                  isActive("/socials")
                    ? "text-rose-700 underline"
                    : "hover:text-rose-700 hover:underline"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                Our Socials
              </a>
            </Link>
          </div>
        )}
      </div>

      <div
        className="group relative"
        onMouseEnter={() => setProductsDropdownOpen(true)}
        onMouseLeave={() => setProductsDropdownOpen(false)}
        onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
      >
        <a
          className={`cursor-pointer text-2xl font-bold  ${
            sidebarOpen ? "text-3xl" : "text-xl"
          } ${
            isActive("/services", productPaths, false)
              ? "text-rose-700 underline"
              : "text-rose-500 hover:underline group-hover:text-rose-700"
          }`}
        >
          Our Services
        </a>
        {productsDropdownOpen && (
          <div
            className={`z-10 flex  w-64 flex-col space-y-2 rounded-lg border border-gray-200 bg-gray-200 
  ${
    isMobile
      ? "w-96 border-none bg-white pl-4 text-2xl font-semibold"
      : "absolute left-0 text-xl"
  }`}
          >
            <Link href="/services/development" legacyBehavior>
              <a
                className={`p-2 ${
                  isActive("/services/development")
                    ? "text-rose-700 underline"
                    : "hover:text-rose-700 hover:underline"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                Web Development
              </a>
            </Link>
            <Link href="/services/design" legacyBehavior>
              <a
                className={`p-2 ${
                  isActive("/services/design")
                    ? "text-rose-700 underline"
                    : "hover:text-rose-700 hover:underline"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                Web Design
              </a>
            </Link>
            <Link href="/services/ai" legacyBehavior>
              <a
                className={`p-2 ${
                  isActive("/services/ai")
                    ? "text-rose-700 underline"
                    : "hover:text-rose-700 hover:underline"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                AI Web Integration
              </a>
            </Link>
            <Link href="/services/maintenance" legacyBehavior>
              <a
                className={`p-2 ${
                  isActive("/services/maintenance")
                    ? "text-rose-700 underline"
                    : "hover:text-rose-700 hover:underline"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                Web Maintenance
              </a>
            </Link>
          </div>
        )}
      </div>

      <Link href="/build" legacyBehavior>
        <a
          onClick={() => {
            setSidebarOpen(false);
          }}
          className={`text-2xl font-bold ${
            sidebarOpen ? "text-3xl" : "text-xl"
          } ${
            isActive("/build")
              ? "text-rose-700 underline"
              : "text-rose-500 hover:text-rose-700 hover:underline"
          }`}
        >
          Build a site
        </a>
      </Link>
      <Link href="/how" legacyBehavior>
        <a
          onClick={() => {
            setSidebarOpen(false);
          }}
          className={`text-2xl font-bold ${
            sidebarOpen ? "text-3xl" : "text-xl"
          } ${
            isActive("/how")
              ? "text-rose-700 underline"
              : "text-rose-500 hover:text-rose-700 hover:underline"
          }`}
        >
          How we do it
        </a>
      </Link>
    </>
  );

  return (
    <>
      {isMobile ? (
        <div
          className={`${
            sidebarOpen ? "" : "translate-x-full transform"
          } fixed bottom-0 right-0
            top-0
              z-40 w-full overflow-auto bg-white transition-transform duration-200
            ease-in-out`}
        >
          <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
            {/**logog image */}
            <Link href="/">
              <div className="flex items-center justify-center">
                <Image src="/logo1.png" alt="Logo" width={150} height={40} />
              </div>
            </Link>

            <div className="px-4">
              <h2 className="mb-8 font-montserrat text-4xl font-bold underline">
                Navigation
              </h2>
            </div>
            <nav className=" mb-8 flex flex-1 flex-col space-y-8 px-2 font-montserrat">
              <Link href="/" legacyBehavior>
                <a
                  onClick={() => {
                    setSidebarOpen(false);
                  }}
                  className={`text-2xl font-bold ${
                    sidebarOpen ? "text-3xl" : ""
                  } ${
                    isActive("/")
                      ? "text-rose-700 underline"
                      : "text-rose-500 hover:text-rose-700 hover:underline"
                  }`}
                >
                  Home
                </a>
              </Link>
              {links}
            </nav>
            <div className="px-4">
              <div className="flex items-center gap-4">
                {sessionData && (
                  <p className="text-l text-center font-montserrat text-black">
                    Welcome, <p>{sessionData.user?.name}</p>
                  </p>
                )}
                <button
                  className="rounded-lg bg-rose-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-rose-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
                  onClick={
                    sessionData ? () => void signOut() : () => void signIn()
                  }
                >
                  {sessionData ? "Sign out" : "Sign in"}
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-0 mr-4 mt-4 text-3xl font-bold">
            <button onClick={() => setSidebarOpen(false)}>X</button>
          </div>
        </div>
      ) : (
        <nav className="sticky top-0 z-40 flex h-20 items-center justify-between bg-white/60 p-6 text-black backdrop-blur-lg backdrop-filter">
          <div className="flex items-center space-x-16 font-montserrat">
            <Link href="/">
              <Image src="/logo1.png" alt="Logo" width={100} height={40} />
            </Link>
            <div className="text-md hidden space-x-1 md:flex md:space-x-10 md:text-2xl">
              {links}
            </div>
          </div>
          {sessionData && <></>}
          <div className="flex items-center gap-4">
            {sessionData && (
              <p className="text-l text-center text-white">
                <span className="font-merriweather text-black">
                  Welcome, <p>{sessionData.user?.name}</p>
                </span>
              </p>
            )}
            <button
              className="rounded-lg bg-rose-700 px-5 py-2.5 text-center font-montserrat text-sm font-bold text-white hover:bg-rose-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
              onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
              {sessionData ? "Sign out" : "Sign in"}
            </button>
          </div>
        </nav>
      )}
      {isMobile && sidebarOpen == false && (
        <>
          <div className="fixed right-0 top-0 z-50 mr-3 mt-3 text-5xl font-bold">
            <button onClick={() => setSidebarOpen(true)}>☰</button>
          </div>
        </>
      )}
    </>
  );
}
