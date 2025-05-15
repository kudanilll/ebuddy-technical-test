"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/organisms/navbar";
import DisplayDataUser from "@/components/templates/display-data-user";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    // Check auth token on component mount
    const checkAuth = () => {
      // Get token from cookies
      const cookieString = document.cookie;
      const cookies = cookieString.split(";").reduce(
        (acc, cookie) => {
          const [name, value] = cookie.trim().split("=");
          return { ...acc, [name]: value };
        },
        {} as Record<string, string>
      );

      const authToken = cookies["authToken"];
      if (!authToken) {
        router.push("/login");
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="bg-white rounded-lg p-6 mt-16">
        <DisplayDataUser />
      </div>
    </div>
  );
}
