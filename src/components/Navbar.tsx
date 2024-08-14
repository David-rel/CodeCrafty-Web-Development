import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import NavbarDropdown, { Props as NavbarDropdownProps } from "./NavbarDropdown";

export default function Navbar() {
  const router = useRouter();
  const isMobile = useMediaQuery({ query: "(max-width: 1250px)" });
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const setLocalStorageSidebarState = (state: boolean) => {
    if (typeof window !== "undefined") {
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
              : "text-rose-500 hover:text-rose-700"
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
            <NavbarDropdown props={aboutPaths} />
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
            isActive("/services", servicePaths, false)
              ? "text-rose-700 underline"
              : "text-rose-500 hover:text-rose-700"
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
      : "absolute left-0 min-h-full w-96 text-xl"
  }`}
          >
            <NavbarDropdown props={servicePaths} />
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
              : "text-rose-500 hover:text-rose-700"
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
              : "text-rose-500 hover:text-rose-700"
          }`}
        >
          Our Process
        </a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a
          onClick={() => {
            setSidebarOpen(false);
          }}
          className={`text-2xl font-bold ${
            sidebarOpen ? "text-3xl" : "text-xl"
          } ${
            isActive("/contact")
              ? "text-rose-700 underline"
              : "text-rose-500 hover:text-rose-700"
          }`}
        >
          Get In Touch
        </a>
      </Link>
      <Link href="/alias" legacyBehavior>
        <a
          onClick={() => {
            setSidebarOpen(false);
          }}
          className={`text-2xl font-bold ${
            sidebarOpen ? "text-3xl" : "text-xl"
          } ${
            isActive("/alias")
              ? "text-rose-700 underline"
              : "text-rose-500 hover:text-rose-700"
          }`}
        >
          Alias
        </a>
      </Link>
      <Link href="/blog" legacyBehavior>
        <a
          onClick={() => {
            setSidebarOpen(false);
          }}
          className={`text-2xl font-bold ${
            sidebarOpen ? "text-3xl" : "text-xl"
          } ${
            isActive("/blog")
              ? "text-rose-700 underline"
              : "text-rose-500 hover:text-rose-700"
          }`}
        >
          Our Blog
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
          } fixed bottom-0 right-0 top-0 z-40 w-full overflow-auto bg-white transition-transform duration-200 ease-in-out`}
        >
          <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
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
            <nav className="mb-8 flex flex-1 flex-col space-y-8 px-2 font-montserrat">
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
                      : "text-rose-500 hover:text-rose-700"
                  }`}
                >
                  Home
                </a>
              </Link>
              {links}
            </nav>
            <div className="px-4 text-3xl font-bold">
              <div className="mt-4">
                <p className="text-rose-900">
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
            <div className="hidden space-x-1 md:flex md:space-x-10 md:text-2xl">
              {links}
            </div>
          </div>

          <div className="flex flex-col items-end space-y-1 px-4 text-xl font-bold">
            <p className="text-rose-900">
              <a href="mailto:admin@codecrafty.dev" className="text-rose-600">
                admin@codecrafty.dev
              </a>
            </p>
            <p className="text-rose-900">
              <a href="tel:+17206122979" className="text-rose-600">
                +1 (720) 612-2979
              </a>
            </p>
          </div>
        </nav>
      )}
      {isMobile && sidebarOpen === false && (
        <div className="fixed right-0 top-0 z-50 mr-3 mt-3 text-5xl font-bold">
          <button onClick={() => setSidebarOpen(true)}>☰</button>
        </div>
      )}
    </>
  );
}
