import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-rose-200 px-4 py-10 text-black sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        <div className="w-full lg:w-1/3">
          <h2 className="text-xl font-semibold">Links</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/home" legacyBehavior>
                <a className="hover:text-rose-500">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a className="hover:text-rose-500">About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className="hover:text-rose-500">Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/build" legacyBehavior>
                <a className="hover:text-rose-500">Build a site</a>
              </Link>
            </li>
            <li>
              <Link href="/how" legacyBehavior>
                <a className="hover:text-rose-500">How we do it</a>
              </Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>

        <div className="mb-4 w-full text-center lg:mb-0 lg:w-1/3">
          <Image src="/logo.png" alt="Logo" width={300} height={40} />
          <p className="pr-28 text-xl">davidfalesct@gmail.com</p>
          <p className="mt-2 pr-28">(720) 612-2979</p>
        </div>

        <div className="w-full lg:w-1/4">
          <p>
            &copy; {new Date().getFullYear()} CodeCrafty. All rights reserved.
            <br />
            Please see our{" "}
            <Link href="/disclaimer" legacyBehavior>
              <a className="text-rose-500 underline">Disclaimer</a>
            </Link>{" "}
            for more information.
          </p>
        </div>
      </div>
    </footer>
  );
}
