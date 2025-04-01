/* eslint-disable @typescript-eslint/no-explicit-any */
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4300/api";

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

const request = async <T>(
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    endpoint: string,
    options: {
        token?: string;
        body?: any;
        queryParams?: Record<string, any>;
    } = {}
): Promise<T> => {
    startLoader();
    try {
        const { token, body, queryParams } = options;
        const url = new URL(`${API_BASE}${endpoint}`);

        if (queryParams) {
            Object.entries(queryParams).forEach(([key, value]) =>
                url.searchParams.append(key, String(value))
            );
        }

        const headers: Record<string, string> = {
            "Content-Type": "application/json",
        };
        if (token) headers["Authorization"] = `Bearer ${token}`;

        const res = await fetch(url.toString(), {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
        });

        if (!res.ok) throw new Error((await res.json()).message || "Request failed");
        return await res.json();
    } finally {
        stopLoader();
    }
};

// Auth
export const registerUser = (data: any) => request("POST", "/auth/register", { body: data });
export const loginUser = (data: any) => request("POST", "/auth/login", { body: data });
export const refreshToken = () => request("POST", "/auth/refresh");
export const logoutUser = () => request("POST", "/auth/logout");
export const changePassword = (data: any, token: string) =>
    request("PATCH", "/auth/change-password", { body: data, token });
export const forgotPassword = (email: string) =>
    request("POST", "/auth/forgot-password", { body: { email } });
export const resetPassword = (data: any) =>
    request("POST", "/auth/reset-password", { body: data });

// Posts
export const getAllPosts = () => request("GET", "/posts");
export const getPostById = (id: string) => request("GET", `/posts/${id}`);
export const createPost = (data: any, token: string) =>
    request("POST", "/posts", { body: data, token });
export const updatePost = (id: string, data: any, token: string) =>
    request("PUT", `/posts/${id}`, { body: data, token });
export const deletePost = (id: string, token: string) =>
    request("DELETE", `/posts/${id}`, { token });

// Users
export const getMe = (token: string) => request("GET", "/users/me", { token });
export const getUserProfile = (id: string) => request("GET", `/users/${id}`);
export const updateUser = (data: any, token: string) =>
    request("PATCH", "/users/update", { body: data, token });
export const deleteUser = (token: string) => request("DELETE", "/users/delete", { token });
export const followUser = (id: string, token: string) =>
    request("POST", `/users/follow/${id}`, { token });
export const unfollowUser = (id: string, token: string) =>
    request("POST", `/users/unfollow/${id}`, { token });
export const getFollowers = (id: string) => request("GET", `/users/${id}/followers`);
export const getFollowing = (id: string) => request("GET", `/users/${id}/following`);
export const blockUser = (id: string, token: string) =>
    request("POST", `/users/block/${id}`, { token });
export const unblockUser = (id: string, token: string) =>
    request("POST", `/users/unblock/${id}`, { token });
export const searchUsers = (query: string) =>
    request("GET", `/users/search`, { queryParams: { q: query } });
