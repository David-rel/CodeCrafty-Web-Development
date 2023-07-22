import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";


export default function Navbar() {
  const { data: sessionData } = useSession();
  const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-width: 1050px)" });

  const isActive = (pathname: string) => router.pathname === pathname;

    const links = (
      <>
        <Link href="/" legacyBehavior>
          <a
            className={`text-2xl font-bold ${
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
            className={`text-2xl font-bold ${
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
            className={`text-2xl font-bold ${
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
            className={`text-2xl font-bold ${
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
            className={`text-2xl font-bold ${
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
          className={`fixed right-0 top-0 bottom-0 z-40 w-full overflow-auto bg-white transition-transform duration-200 ease-in-out ${
            sidebarOpen ? "" : "translate-x-full transform"
          }`}
        >
          <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
            <div className="px-4">
              <h2 className="mb-2 text-3xl font-bold underline">
                Navigation
              </h2>
            </div>
            <nav className=" mb-8 flex-1 flex flex-col space-y-1 px-2">{links}</nav>
            <div className="px-4">
              <div className="flex items-center gap-4">
                {sessionData && (
                  <p className="text-l text-center text-black">
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
            <div className="flex items-center space-x-16">
              <Image src="/logo.png" alt="Logo" width={100} height={40} />
              {links}
            </div>
            {sessionData && <></>}
            <div className="flex items-center gap-4">
              {sessionData && (
                <p className="text-l text-center text-white">
                  <span className="text-black">
                    Welcome, <p>{sessionData.user?.email}</p>
                  </span>
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
