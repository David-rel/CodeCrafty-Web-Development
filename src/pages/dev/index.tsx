import { useEffect } from "react";
import { useRouter } from "next/router";
import cookies from "js-cookie";

export default function Dev() {
  const router = useRouter();

  useEffect(() => {
    const token = cookies.get("token");
    if (token === "loggedin") {
      router.push("/dev/dashboard");
    } else {
      router.push("/dev/login");
    }
  }, [router]);

  return null;
}
