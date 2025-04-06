/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { forgotPassword, loginUser } from "../api/api";

import { IUser } from "../types/user";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Modal state
    const [showForgotModal, setShowForgotModal] = useState(false);
    const [forgotEmail, setForgotEmail] = useState("");
    const [forgotStatus, setForgotStatus] = useState("");

    const handleLogin = async () => {
        try {
            setError("");
            const data = await loginUser({ email, password }) as { token: string, user: IUser };
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            router.push("/explore");
        } catch (err) {
            console.log(err);
            setError("Invalid email or password");
        }
    };

    const handleForgotPassword = async () => {
        try {
            setForgotStatus("");
            await forgotPassword(forgotEmail);
            setForgotStatus("Reset link sent to your email.");
        } catch (err: any) {
            setForgotStatus("Error: " + err.message);
        }
    };

    return (
        <div className="min-h-screen bg-background flex">
            {/* Left Info */}
            <div className="w-1/2 hidden md:flex flex-col justify-center items-start p-16 bg-primary text-white">
                <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
                <p className="text-lg mb-6">Log in to continue exploring and sharing your interests.</p>
                <ul className="space-y-4 text-base">
                    <li>✔ View and engage with content</li>
                    <li>✔ Stay updated with your community</li>
                    <li>✔ Access personalized recommendations</li>
                </ul>
            </div>

            {/* Right Login Form */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold text-primary mb-6 text-center">Log In</h1>

                    <input
                        className="mb-4 p-3 w-full rounded-md border border-gray-300 focus:outline-primary"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="mb-4 p-3 w-full rounded-md border border-gray-300 focus:outline-primary"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p className="text-red-500 mb-3 text-center">{error}</p>}

                    <button
                        onClick={handleLogin}
                        className="bg-primary text-white px-6 py-3 w-full rounded-md hover:bg-opacity-90"
                    >
                        Log In
                    </button>

                    {/* Forgot + Register Links */}
                    <div className="flex justify-between items-center text-sm mt-4">
                        <button
                            onClick={() => setShowForgotModal(true)}
                            className="text-primary hover:underline"
                        >
                            Forgot Password?
                        </button>
                        <a href="/register" className="text-primary hover:underline">
                            Don&#39;t have an account? Register
                        </a>
                    </div>
                </div>
            </div>

            {/* Forgot Password Modal */}
            {showForgotModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm">
                    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold text-primary mb-4">Reset Password</h2>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-md p-3 mb-3"
                            value={forgotEmail}
                            onChange={(e) => setForgotEmail(e.target.value)}
                        />

                        {forgotStatus && (
                            <p className={`text-sm mb-2 ${forgotStatus.startsWith("Error") ? "text-red-500" : "text-green-600"}`}>
                                {forgotStatus}
                            </p>
                        )}

                        <div className="flex justify-end space-x-2 mt-4">
                            <button
                                onClick={() => {
                                    setShowForgotModal(false);
                                    setForgotEmail("");
                                    setForgotStatus("");
                                }}
                                className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleForgotPassword}
                                className="px-4 py-2 rounded-md bg-primary text-white hover:bg-opacity-90"
                            >
                                Send Reset Link
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
