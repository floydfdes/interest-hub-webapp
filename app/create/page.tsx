/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef, useState } from "react";

import { createPost } from "../api/api";
import { useRouter } from "next/navigation";

const categories = ["Tech", "Health", "Travel", "Design", "Education"];
const visibilities = ["public", "private", "followersOnly"];

export default function CreatePostPage() {
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const [form, setForm] = useState({
        title: "",
        content: "",
        category: "",
        tags: "",
        images: [""],
        visibility: "public",
    });

    const [error, setError] = useState("");
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleChange = (field: string, value: string | string[]) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleImageURL = async (url: string) => {
        try {
            const base64 = await compressAndConvertToBase64(url);
            if (base64) {
                setImagePreview(base64);
                handleChange("images", [base64]);
            } else {
                setError("Failed to load image from URL");
            }
        } catch (e: any) {
            console.log(e);
            setError("Invalid image URL");
        }
    };

    const handleImageUpload = async (file: File) => {
        const base64 = await compressAndConvertToBase64(file);
        if (base64) {
            setImagePreview(base64);
            handleChange("images", [base64]);
        }
    };

    const handleSubmit = async () => {
        try {
            setError("");
            const token = localStorage.getItem("token");
            if (!token) throw new Error("You must be logged in");

            const payload = {
                ...form,
                tags: form.tags.split(",").map((tag) => tag.trim()),
            };

            await createPost(payload);
            router.push("/explore");
        } catch (err: any) {
            setError(err.message || "Failed to create post");
        }
    };

    return (
        <div className="min-h-screen bg-background flex justify-center items-center px-4 py-10">
            <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold text-primary mb-6 text-center">
                    Create a New Post
                </h1>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                <input
                    type="text"
                    placeholder="Post Title"
                    className="mb-4 p-3 w-full border rounded-md"
                    value={form.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                />

                <textarea
                    placeholder="Content"
                    className="mb-4 p-3 w-full border rounded-md min-h-[120px]"
                    value={form.content}
                    onChange={(e) => handleChange("content", e.target.value)}
                />

                <select
                    className="mb-4 p-3 w-full border rounded-md"
                    value={form.category}
                    onChange={(e) => handleChange("category", e.target.value)}
                >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                        <option key={cat}>{cat}</option>
                    ))}
                </select>

                <input
                    type="text"
                    placeholder="Tags (comma-separated)"
                    className="mb-4 p-3 w-full border rounded-md"
                    value={form.tags}
                    onChange={(e) => handleChange("tags", e.target.value)}
                />

                <div className="mb-4">
                    <p className="text-sm font-medium mb-2 text-gray-700">Upload Image or paste URL</p>
                    <div className="flex gap-4 flex-col sm:flex-row">
                        <input
                            type="text"
                            placeholder="Paste Image URL"
                            className="p-3 border w-full rounded-md"
                            onBlur={(e) => handleImageURL(e.target.value)}
                        />
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
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
                        >
                            Upload
                        </button>
                    </div>
                </div>

                {imagePreview && (
                    <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-52 object-cover rounded-md mb-4 border"
                    />
                )}

                <select
                    className="mb-6 p-3 w-full border rounded-md"
                    value={form.visibility}
                    onChange={(e) => handleChange("visibility", e.target.value)}
                >
                    {visibilities.map((option) => (
                        <option key={option} value={option}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                        </option>
                    ))}
                </select>

                <button
                    onClick={handleSubmit}
                    className="w-full bg-primary text-white py-3 rounded-md hover:bg-opacity-90"
                >
                    Publish Post
                </button>
            </div>
        </div>
    );
}

// 🌟 Universal Compressor + Converter
const compressAndConvertToBase64 = async (
    input: File | string
): Promise<string | null> => {
    try {
        let file: File;

        if (typeof input === "string") {
            const res = await fetch(input);
            const blob = await res.blob();
            file = new File([blob], "image.jpg", { type: blob.type });
        } else {
            file = input;
        }

        const resized = await resizeImageToBase64(file, 400, 250);
        return resized;
    } catch (err) {
        console.error("Compression error:", err);
        return null;
    }
};

// 📐 Resize + convert to base64
const resizeImageToBase64 = (
    file: File,
    maxWidth: number,
    maxHeight: number
): Promise<string | null> => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = maxWidth;
                canvas.height = maxHeight;
                const ctx = canvas.getContext("2d");
                if (!ctx) return resolve(null);
                ctx.drawImage(img, 0, 0, maxWidth, maxHeight);
                const base64 = canvas.toDataURL("image/jpeg", 0.8);
                resolve(base64);
            };
            if (event.target?.result) {
                img.src = event.target.result as string;
            }
        };
        reader.readAsDataURL(file);
    });
};
