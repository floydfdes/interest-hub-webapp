"use client";

import { IUser } from "../types/user";
import { registerUser } from "../api/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
    const router = useRouter();
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");

    const handleRegister = async () => {
        try {
            setError("");
            const data = await registerUser(form) as { token: string, user: IUser };
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            router.push("/explore");
        } catch (err) {
            console.log(err);
            setError("Registration failed");
        }
    };

    return (
        <div className="min-h-screen bg-background flex">
            <div className="w-1/2 hidden md:flex flex-col justify-center items-start p-16 bg-primary text-white">
                <h2 className="text-4xl font-bold mb-4">Welcome to InterestHub</h2>
                <p className="text-lg mb-6">Join a vibrant community built around your interests.</p>
                <ul className="space-y-4 text-base">
                    <li>✔ Discover new posts and creators</li>
                    <li>✔ Share your own thoughts and content</li>
                    <li>✔ Connect through comments and likes</li>
                </ul>
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold text-primary mb-6 text-center">Create an Account</h1>
                    <input
                        className="mb-4 p-3 w-full rounded-md border border-gray-300 focus:outline-primary"
                        type="text"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <input
                        className="mb-4 p-3 w-full rounded-md border border-gray-300 focus:outline-primary"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <input
                        className="mb-4 p-3 w-full rounded-md border border-gray-300 focus:outline-primary"
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                    {error && <p className="text-red-500 mb-3">{error}</p>}
                    <button
                        onClick={handleRegister}
                        className="bg-primary text-white px-6 py-3 w-full rounded-md hover:bg-opacity-90"
                    >
                        Sign Up
                    </button>
                    <div className="mt-4 text-center">
                        <p className="text-sm">
                            Already have an account?{" "}
                            <a href="/login" className="text-primary font-medium hover:underline">
                                Log in
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
