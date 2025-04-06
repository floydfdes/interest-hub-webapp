"use client";

import { useEffect, useState } from "react";

import Avatar from "react-avatar";
import { IUser } from "../types/user";
import { getMe } from "../api/api";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const [user, setUser] = useState<IUser | null>(null);
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) throw new Error("You must be logged in");

                const userData = await getMe() as { user: IUser };
                setUser(userData.user);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Failed to fetch user");
                }
            }
        };

        fetchUser();
    }, []);

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
                <h1 className="text-2xl text-red-600 font-semibold mb-4">Error</h1>
                <p className="text-gray-700">{error}</p>
            </div>
        );
    }

    if (!user) {
        return <div className="text-center mt-12 text-gray-500">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-background flex justify-center items-center px-4 py-10">
            <div className="w-full max-w-2xl bg-white shadow-xl rounded-lg p-8 text-center relative">

                {/* Avatar */}
                <div className="flex justify-center mb-4">
                    <Avatar
                        name={user.name}
                        src={user.profilePic || undefined}
                        round
                        size="100"
                        textSizeRatio={2}
                    />
                </div>

                {/* Name & Email */}
                <h1 className="text-2xl font-bold text-primary mb-1">{user.name}</h1>
                <p className="text-gray-500 mb-4">{user.email}</p>

                {/* Bio */}
                {user.bio && (
                    <p className="mt-2 text-gray-700 italic max-w-lg mx-auto">{user.bio}</p>
                )}

                {/* Interests */}
                {user.interests?.length > 0 && (
                    <div className="mt-4">
                        <h3 className="text-primary font-semibold mb-2">Interests</h3>
                        <div className="flex flex-wrap justify-center gap-2">
                            {user.interests.map((interest) => (
                                <span
                                    key={interest}
                                    className="bg-secondary text-white text-sm px-3 py-1 rounded-full shadow-sm"
                                >
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Optional Stats */}
                <div className="mt-6 flex justify-center gap-8 text-sm text-gray-600">
                    <div className="text-center">
                        <p className="font-semibold text-lg">{user.followers?.length || 0}</p>
                        <p>Followers</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold text-lg">{user.following?.length || 0}</p>
                        <p>Following</p>
                    </div>
                </div>

                {/* Edit Button */}
                <button
                    onClick={() => router.push("/profile/edit")}
                    className="mt-8 bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition transform hover:scale-105"
                >
                    Edit Profile
                </button>
            </div>
        </div>
    );
}
