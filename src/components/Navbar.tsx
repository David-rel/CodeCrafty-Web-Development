import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
  const { data: sessionData } = useSession();
  const router = useRouter();
  const isMobile = useMediaQuery({ query: "(max-width: 1125px)" });

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

  const isActive = (pathname: string) => router.pathname === pathname;
  const links = (
    <>
      <Link href="/" legacyBehavior>
        <a
          onClick={() => {
            setSidebarOpen(false);
          }}
          className={`text-2xl font-bold ${sidebarOpen ? "text-3xl" : ""} ${
            isActive("/")
              ? "text-rose-700 underline"
              : "text-rose-500 hover:text-rose-700 hover:underline"
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a
          onClick={() => {
            setSidebarOpen(false);
          }}
          className={`text-2xl font-bold ${sidebarOpen ? "text-3xl" : ""} ${
            isActive("/about")
              ? "text-rose-700 underline"
              : "text-rose-500 hover:text-rose-700 hover:underline"
          }`}
        >
          About
        </a>
      </Link>

      <Link href="/contact" legacyBehavior>
        <a
          onClick={() => {
            setSidebarOpen(false);
          }}
          className={`text-2xl font-bold ${sidebarOpen ? "text-3xl" : ""} ${
            isActive("/contact")
              ? "text-rose-700 underline"
              : "text-rose-500 hover:text-rose-700 hover:underline"
          }`}
        >
          Contact
        </a>
      </Link>
      <Link href="/build" legacyBehavior>
        <a
          onClick={() => {
            setSidebarOpen(false);
          }}
          className={`text-2xl font-bold ${sidebarOpen ? "text-3xl" : ""} ${
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
          className={`text-2xl font-bold ${sidebarOpen ? "text-3xl" : ""} ${
            isActive("/how")
              ? "text-rose-700 underline"
              : "text-rose-500 hover:text-rose-700 hover:underline"
          }`}
        >
          How we do it
        </a>
      </Link>
       <Link href="/socials" legacyBehavior>
        <a
          onClick={() => {
            setSidebarOpen(false);
          }}
          className={`text-2xl font-bold ${sidebarOpen ? "text-3xl" : ""} ${
            isActive("/socials")
              ? "text-rose-700 underline"
              : "text-rose-500 hover:text-rose-700 hover:underline"
          }`}
        >
          Socials
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
            <div className="flex items-center justify-center">
              <Image src="/logo1.png" alt="Logo" width={150} height={40} />
            </div>

            <div className="px-4">
              <h2 className="mb-8 font-montserrat text-4xl font-bold underline">
                Navigation
              </h2>
            </div>
            <nav className=" mb-8 flex flex-1 flex-col space-y-8 px-2 font-montserrat">
              {links}
            </nav>
            <div className="px-4">
              <div className="flex items-center gap-4">
                {sessionData && (
                  <p className="text-l text-center font-montserrat text-black">
                    Welcome, <p>{sessionData.user?.email}</p>
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
        <nav className="sticky top-0 z-50 flex items-center justify-between bg-white/60 p-6 text-black backdrop-blur-lg backdrop-filter">
          <div className="flex items-center space-x-16 font-montserrat">
            <Image src="/logo1.png" alt="Logo" width={100} height={40} />
                        <div className="hidden md:flex space-x-1 md:space-x-10 text-md md:text-2xl">

            {links}
            </div>
          </div>
          {sessionData && <></>}
          <div className="flex items-center gap-4">
            {sessionData && (
              <p className="text-l text-center text-white">
                <span className="font-merriweather text-black">
                  Welcome, <p>{sessionData.user?.email}</p>
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
