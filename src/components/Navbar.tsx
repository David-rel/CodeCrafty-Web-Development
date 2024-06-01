import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import NavbarDropdown, { Props as NavbarDropdownProps } from "./NavbarDropdown";

export default function Navbar() {
  const router = useRouter();
  const isMobile = useMediaQuery({ query: "(max-width: 1250px)" });

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
  const isActive = (
    pathname: string,
    paths: NavbarDropdownProps = [],
    exact = true
  ) => {
    if (exact) {
      return router.pathname === pathname;
    } else {
      return (
        router.pathname.startsWith(pathname) ||
        paths.map((path) => path.path).includes(router.pathname)
      );
    }
  };
  const aboutPaths = [
    {
      name: "About Us",
      path: "/about/aboutUs",
    },
    {
      name: "The Team",
      path: "/about/team",
    },
    {
      name: "Our Socials",
      path: "/socials",
    },
    {
      name: "Our Portfolio",
      path: "/about/portfolio",
    },
  ];

  const servicePaths = [
    {
      name: "Website Development",
      path: "/services/website",
    },
    {
      name: "Web Application Development",
      path: "/services/webApp",
    },
    {
      name: "Domain and Hosting",
      path: "/services/domain",
    },
    {
      name: "Web Maintenance",
      path: "/services/maintenance",
    },
    {
      name: "AI Integration",
      path: "/services/ai",
    },
    {
      name: "Web Analytics",
      path: "/services/analytics",
    },
    {
      name: "Blog Integration",
      path: "/services/blog",
    },
    {
      name: "E-commerce Integration",
      path: "/services/ecommerce",
    },
  ];

  const NavbarElement: React.FC<{
    name: string;
    path: string;
    dropdown?: NavbarDropdownProps;
  }> = ({ name, path, dropdown }) => {
    if (dropdown) {
      const [dropdownOpen, setdropdownOpen] = useState(false);
      return (
        <>
          <div
            className="group relative"
            onMouseEnter={() => setdropdownOpen(true)}
            onMouseLeave={() => setdropdownOpen(false)}
            onClick={() => setdropdownOpen(!dropdownOpen)}
          >
            <a
              className={`cursor-pointer text-2xl font-bold ${
                sidebarOpen ? "text-3xl" : "text-xl"
              } ${
                isActive(path, dropdown, false)
                  ? "text-rose-700 underline"
                  : "text-rose-500 hover:underline group-hover:text-rose-700"
              }`}
            >
              {name}
            </a>
            {dropdownOpen && (
              <div
                className={`z-10 flex w-max flex-col space-y-2 rounded-lg border border-gray-200 bg-gray-200 
  ${
    isMobile
      ? "border-none bg-white pl-4 text-2xl font-semibold"
      : "absolute left-0 text-xl"
  }`}
              >
                <NavbarDropdown props={dropdown} />
              </div>
            )}
          </div>
        </>
      );
    } else {
      return (
        <>
          <Link href={path} legacyBehavior>
            <a
              onClick={() => {
                setSidebarOpen(false);
              }}
              className={`text-2xl font-bold ${
                sidebarOpen ? "text-3xl" : "text-xl"
              } ${
                isActive(path)
                  ? "text-rose-700 underline"
                  : "text-rose-500 hover:text-rose-700 hover:underline"
              }`}
            >
              {name}
            </a>
          </Link>
        </>
      );
    }
  };

  const links = // dropdown navbar links
    (
      <>
        <NavbarElement name="About" path="/about" dropdown={aboutPaths} />
        <NavbarElement
          name="Our Services"
          path="/services"
          dropdown={servicePaths}
        />
        <NavbarElement name="Build a site" path="/build" />
        <NavbarElement name="How we do it" path="/how" />
        <NavbarElement name="Get In Touch" path="/contact" />
        <NavbarElement name="Alias" path="/alias" />
        <NavbarElement name="Blog" path="/blog" />
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
            {/**logo image */}
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
            <div className="px-4 text-3xl font-bold">
              <div className="mt-4">
                <p className="pb-14 text-rose-900">
                  email:{" "}
                  <a
                    href="mailto:admin@codecrafty.dev"
                    className="text-rose-600 underline"
                  >
                    admin@codecrafty.dev
                  </a>
                </p>
                <p className="text-rose-900">
                  phone:{" "}
                  <a
                    href="tel:+17206122979"
                    className="text-rose-600 underline"
                  >
                    +1 (720) 612-2979
                  </a>
                </p>
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

          <div className="px-4 text-xl font-bold">
            <div className=" flex flex-col items-center space-x-8">
              <p className="text-rose-900">
                <a
                  href="mailto:admin@codecrafty.dev"
                  className="text-rose-600 underline"
                >
                  admin@codecrafty.dev
                </a>
              </p>
              <p className="text-rose-900">
                <a href="tel:+17206122979" className="text-rose-600 underline">
                  +1 (720) 612-2979
                </a>
              </p>
            </div>
          </div>
        </nav>
      )}
      {isMobile && sidebarOpen == false && (
        <>
          {/* <div className="fixed left-0 top-0 z-50 ml-3 mt-3">
            <Link href="/">
              <Image src="/logo1.png" alt="Logo" width={75} height={40} />
            </Link>
          </div> */}

          <div className="fixed right-0 top-0 z-50 mr-3 mt-3 text-5xl font-bold">
            <button onClick={() => setSidebarOpen(true)}>☰</button>
          </div>
        </>
      )}
    </>
  );
}
