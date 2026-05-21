"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

/**
 * Higher-order component/wrapper to protect admin routes.
 * Redirects to /admin/login if not authenticated.
 */
export default function AdminAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem("token");
    const userJson = localStorage.getItem("user");
    const user = userJson ? JSON.parse(userJson) : null;

    const isLoginPage = pathname === "/admin/login";

    if (!token || !user || user.role !== "ADMIN") {
      if (!isLoginPage) {
        router.replace("/admin/login");
      } else {
        setAuthorized(true); // Allow access to login page
      }
    } else {
      if (isLoginPage) {
        router.replace("/admin/users");
      } else {
        setAuthorized(true);
      }
    }
  }, [pathname, router]);

  if (!authorized && pathname !== "/admin/login") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0A0A0A]">
        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
}
