import type { Metadata } from "next";
import { DM_Sans, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neeyum Lab — BTC & ETH F&O Discipline Simulator",
  description: "Neeyum Lab is a behaviour-first crypto derivatives simulation platform. Master BTC & ETH F&O without risking real capital.",
  openGraph: {
    title: "Neeyum Lab — Master Crypto F&O Without Real Risk",
    description: "Not an exchange. Not a signal service. A behaviour-first BTC & ETH F&O simulator that builds real trading discipline.",
    url: "https://neeyum.in",
  }
};

import ConditionalLayout from "../components/ConditionalLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${syne.variable} ${jetbrainsMono.variable} antialiased`}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
