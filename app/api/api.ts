import { posts } from "../data/dummyJson";
//const API_BASE = process.env.API_URL || "https://api.example.com";

// Global loader dispatch
function startLoader() {
    if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("loader:start"));
    }
}

function stopLoader() {
    if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("loader:stop"));
    }
}

// Generic GET method (loader wrapped)
async function get<T>(url: string): Promise<T> {
    startLoader();
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch");
        return await res.json();
    } finally {
        stopLoader();
    }
}

// Simulated delay for dummy API
function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// -------- Post APIs --------

export async function getAllPostPreviews() {
    startLoader();
    try {
        await sleep(10000);

        // Real API call example:
        // const res = await fetch(`${API_BASE}/posts`, { next: { revalidate: 60 } });
        // if (!res.ok) throw new Error("Failed to fetch posts");
        // return await res.json();

        return posts;
    } finally {
        stopLoader();
    }
}

export async function getPostById(id: string) {
    startLoader();
    try {
        await sleep(1000);

        // Real API call example:
        // const res = await fetch(`${API_BASE}/posts/${id}`, { cache: "no-store" });
        // if (!res.ok) throw new Error("Post not found");
        // return await res.json();

        const post = posts.find((p) => p.id === id);
        if (!post) throw new Error("Post not found");
        return post;
    } finally {
        stopLoader();
    }
}
