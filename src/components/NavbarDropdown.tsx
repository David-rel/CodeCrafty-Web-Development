import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export type Props = {
  path: string;
  name: string;
}[];

const NavbarDropdown: React.FC<{ props: Props }> = ({ props }) => {
  const router = useRouter();
  const isActive = (pathname: string, paths: Props = [], exact = true) => {
    if (exact) {
      return router.pathname === pathname;
    } else {
      return (
        router.pathname.startsWith(pathname) ||
        paths.map((path) => path.path).includes(router.pathname)
      );
    }
  };
  return (
    <>
      {props.map(({ path, name }) => (
        <Link href={path} legacyBehavior>
          <a
            className={`p-2 text-xl ${
              isActive(path)
                ? "text-rose-700 underline"
                : "hover:text-rose-700 hover:underline"
            }`}
          >
            {name}
          </a>
        </Link>
      ))}
    </>
  );
};

export default NavbarDropdown;
