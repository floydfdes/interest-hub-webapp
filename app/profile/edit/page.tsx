/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getMe, updateUser } from "@/app/api/api";
import { useEffect, useRef, useState } from "react";

import Avatar from "react-avatar";
import { IUser } from "@/app/types/user";
import { resizeImageToBase64 } from "@/app/api/imageUtil";
import { useRouter } from "next/navigation";

export default function EditProfilePage() {
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const [user, setUser] = useState<IUser | null>(null);
    const [form, setForm] = useState({
        name: "",
        bio: "",
        interests: "",
        profilePic: "",
    });
    const [preview, setPreview] = useState<string | null>(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) throw new Error("You must be logged in");

                const data = await getMe() as { user: IUser };
                setUser(data.user);
                setForm({
                    name: data.user.name || "",
                    bio: data.user.bio || "",
                    interests: data.user.interests?.join(", ") || "",
                    profilePic: data.user.profilePic || "",
                });
                setPreview(data.user.profilePic || "");
            } catch (err: any) {
                setError(err.message || "Failed to fetch user");
            }
        };

        fetchUser();
    }, []);

    const handleImageUpload = async (file: File) => {
        const base64 = await resizeImageToBase64(file, 200, 200);
        if (base64) {
            setForm((prev) => ({ ...prev, profilePic: base64 }));
            setPreview(base64);
        } else {
            setError("Image upload failed");
        }
    };

    const handleSubmit = async () => {
        try {
            setError("");
            const token = localStorage.getItem("token");
            if (!token) throw new Error("Unauthorized");

            const payload = {
                name: form.name,
                bio: form.bio,
                interests: form.interests.split(",").map((i) => i.trim()),
                profilePic: form.profilePic,
            };

            await updateUser(payload);
            router.push("/profile");
        } catch (err: any) {
            setError(err.message || "Failed to update profile");
        }
    };

    if (!user) return <div className="text-center mt-10 text-gray-500">Loading...</div>;

    return (
        <div className="min-h-screen bg-background flex justify-center items-center px-4 py-10">
            <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold text-primary mb-6 text-center">Edit Profile</h1>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                <div className="flex justify-center mb-4">
                    <Avatar
                        name={form.name}
                        src={preview || undefined}
                        round
                        size="80"
                        textSizeRatio={2}
                    />
                </div>

                <div className="text-center mb-6">
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleImageUpload(file);
                        }}
                    />
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
                    >
                        Upload New Profile Picture
                    </button>
                </div>

                <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                    className="mb-4 p-3 w-full border rounded-md"
                />

                <textarea
                    placeholder="Short bio"
                    value={form.bio}
                    onChange={(e) => setForm((prev) => ({ ...prev, bio: e.target.value }))}
                    className="mb-4 p-3 w-full border rounded-md min-h-[80px]"
                />

                <input
                    type="text"
                    placeholder="Interests (comma separated)"
                    value={form.interests}
                    onChange={(e) => setForm((prev) => ({ ...prev, interests: e.target.value }))}
                    className="mb-6 p-3 w-full border rounded-md"
                />

                <button
                    onClick={handleSubmit}
                    className="w-full bg-primary text-white py-3 rounded-md hover:bg-opacity-90"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}
