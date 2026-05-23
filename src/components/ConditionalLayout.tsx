"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * A client component to conditionally render Navbar and Footer
 * based on the current pathname.
 */
export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");
  const isTradeOS = pathname?.startsWith("/tradeos");
  const hideChrome = isAdminRoute || isTradeOS;

  return (
    <>
      {!isAdminRoute && <Navbar />}
      {children}
      {!hideChrome && <Footer />}
    </>
  );
}
