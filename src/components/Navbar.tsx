import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const { data: sessionData } = useSession();
  const router = useRouter();

  const isActive = (pathname: string) => router.pathname === pathname;

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white/60 p-6 text-black backdrop-blur-lg backdrop-filter">
      <div className="flex items-center space-x-16">
        <Image src="/logo.png" alt="Logo" width={100} height={40} />
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
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {sessionData ? "Sign out" : "Sign in"}
        </button>
      </div>
    </nav>
  );
}
