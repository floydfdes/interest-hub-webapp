"use client";

import { useEffect, useState } from "react";

import Avatar from "react-avatar";
import Link from "next/link";
import { getUserFromLocalStorage } from "../api/auth";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const storedUser = getUserFromLocalStorage();
        setUser(storedUser);
    }, []);

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
                    {!user && (
                        <Link href="/login" className="hover:underline">
                            Login
                        </Link>
                    )}
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <button className="hover:underline">Notifications</button>
                    {user && (
                        <div className="flex items-center space-x-2">
                            <Avatar
                                name={user.name}
                                src={user.profilePic || undefined}
                                round
                                size="35"
                                textSizeRatio={2}
                            />
                            <span>{user.name}</span>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
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
                    {!user && (
                        <Link href="/login" className="block hover:underline">
                            Login
                        </Link>
                    )}
                    <button className="block hover:underline">Notifications</button>
                    {user && (
                        <div className="flex items-center space-x-2">
                            <Avatar
                                name={user.name}
                                src={user.profilePic || undefined}
                                round
                                size="30"
                                textSizeRatio={2}
                            />
                            <span>{user.name}</span>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
}
