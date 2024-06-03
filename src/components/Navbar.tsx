import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import NavbarDropdown, { Props as NavbarDropdownProps } from "./NavbarDropdown";

export default function Navbar() {
  const router = useRouter();
  const isMobile = useMediaQuery({ query: "(max-width: 1395px)" });

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
            onMouseEnter={() => setdropdownOpen(true)}
            onMouseLeave={() => setdropdownOpen(false)}
            onClick={() => setdropdownOpen(!dropdownOpen)}
            className="group relative cursor-pointer"
          >
            <a
              className={`text-l m-0 cursor-pointer font-bold ${
                isActive(path, dropdown, false)
                  ? "text-rose-700 underline"
                  : "text-rose-500 hover:underline group-hover:text-rose-700"
              }`}
            >
              {name}
            </a>
            {dropdownOpen ? (
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
            ) : (
              ""
            )}
          </div>
        </>
      );
    } else {
      return (
        <>
          <Link
            href={path}
            onClick={() => {
              setSidebarOpen(false);
            }}
            className={` text-l font-bold ${
              isActive(path)
                ? "text-rose-700 underline"
                : "text-rose-500 hover:text-rose-700 hover:underline"
            }`}
          >
            {name}
          </Link>
        </>
      );
    }
  };

  const links = // dropdown navbar links
    (
      <>
        <NavbarElement name="About" path="/about" dropdown={aboutPaths} />
        <NavbarElement name="Our Services" path="/services" />
        <NavbarElement name="Build a site" path="/build" />
        <NavbarElement name="How we do it" path="/how" />
        <NavbarElement name="Get In Touch" path="/contact" />
        <NavbarElement name="Alias" path="/alias" />
        <NavbarElement name="Blog" path="/blog" />
      </>
    );

  const mobileDisplay = // the sidebar on mobile
    (
      <>
        <div
          className={`  overflow-x-clip ${
            sidebarOpen ? "fixed" : " hidden translate-x-full transform"
          }  right-0 top-0
            z-40 w-4/5  bg-white transition-all duration-200
          ease-in-out`}
        >
          <div className="flex  flex-col  ">
            {/**logo image */}
            <Link href="/">
              <div className="flex items-center justify-center">
                <Image src="/logo1.png" alt="Logo" width={150} height={150} />
              </div>
            </Link>
            <div className="flex justify-center px-4">
              <h2 className="mb-8 font-montserrat text-4xl font-bold underline">
                Navigation
              </h2>
            </div>
            <nav className=" mb-8 flex flex-1 flex-col space-y-4 px-2 font-montserrat">
              <NavbarElement name="Home" path="/" />
              {links}
              <div className=" text-rose-700 underline">
                <NavbarElement
                  name="admin@codecrafty.dev"
                  path="mailto:admin@codecrafty.dev"
                />
              </div>
              <div className=" text-rose-700 underline">
                <NavbarElement
                  name="+1 (720) 612-2979"
                  path="tel:+17206122979"
                />
              </div>
            </nav>
          </div>
          <div className="absolute right-3 top-3 text-5xl font-bold">
            <button onClick={() => setSidebarOpen(false)}>X</button>
          </div>
        </div>

        {sidebarOpen == false && ( // navbar icon for mobile
          <>
            <button
              className="fixed right-3 top-3 z-50 text-5xl font-bold"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>
          </>
        )}
      </>
    );

  const desktopDisplay = // the navbar on desktop
    (
      <nav className="sticky top-0 z-40 flex h-min items-center justify-between bg-white/60 text-black backdrop-blur-lg backdrop-filter">
        <div className="flex items-center space-x-10 ">
          <Link href="/">
            <Image src="/logo1.png" alt="Logo" width={100} height={40} />
          </Link>
          <div className="text-md flex items-center space-x-5 md:text-2xl">
            {links}
          </div>
        </div>

        <div className="justify-right flex flex-col items-center space-x-8 px-4 text-xl font-bold">
          <a href="mailto:admin@codecrafty.dev">admin@codecrafty.dev</a>
          <a href="tel:+17206122979">+1 (720) 612-2979</a>
        </div>
      </nav>
    );

  return isMobile ? mobileDisplay : desktopDisplay;
}
