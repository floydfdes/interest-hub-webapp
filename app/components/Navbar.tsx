"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-primary text-text-light p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    InterestHub
                </Link>
                <div className="hidden md:flex space-x-4">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <Link href="/explore" className="hover:underline">
                        Explore
                    </Link>
                    <Link href="/register" className="hover:underline">
                        Register
                    </Link>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <button className="hover:underline">Notifications</button>
                    {/* <div className="relative">
            <button className="hover:underline">Profile</button>
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2">
              <Link href="/profile">
                <a className="block px-4 py-2 hover:bg-gray-200">Profile</a>
              </Link>
              <Link href="/settings">
                <a className="block px-4 py-2 hover:bg-gray-200">Settings</a>
              </Link>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                Sign out
              </button>
            </div>
          </div> */}
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-primary bg-opacity-90 z-50 flex flex-col items-start p-4 space-y-4">
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="self-end focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                    <Link href="/" className="block hover:underline">
                        Home
                    </Link>
                    <Link href="/explore" className="block hover:underline">
                        Explore
                    </Link>
                    <Link href="/register" className="block hover:underline">
                        Register
                    </Link>
                    <button className="block hover:underline">Notifications</button>
                    {/* <div className="relative">
            <button className="block hover:underline">Profile</button>
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2">
              <Link href="/profile">
                <a className="block px-4 py-2 hover:bg-gray-200">Profile</a>
              </Link>
              <Link href="/settings">
                <a className="block px-4 py-2 hover:bg-gray-200">Settings</a>
              </Link>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                Sign out
              </button>
            </div>
          </div> */}
                </div>
            )}
        </nav>
    );
}