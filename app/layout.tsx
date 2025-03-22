import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";
import Footer from "./components/Footer";
import GlobalLoader from "./components/GlobalLoader";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InterestHub",
  description: "Your hub for all your interests",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen`}>
        <Navbar />
        <GlobalLoader />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
