/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FiEdit, FiMessageCircle, FiPlus, FiThumbsUp, FiTrash } from "react-icons/fi";
import { deletePost, getAllPosts } from "../api/api";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { formatDistanceToNow } from "date-fns";

export default function Explore() {
  const [posts, setPosts] = useState<any[]>([]);
  const [error, setError] = useState("");

  const currentUser = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("You must be logged in to view posts.");
        }
        const data: any = await getAllPosts();
        setPosts(data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch posts.");
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (postId: string) => {
    const result = await Swal.fire({
      title: "Delete this post?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#e53935",
      cancelButtonColor: "#3085d6",
    });

    if (result.isConfirmed) {
      try {
        await deletePost(postId);
        setPosts((prev) => prev.filter((p) => p._id !== postId));
        Swal.fire("Deleted!", "Your post has been removed.", "success");
      } catch (err: any) {
        Swal.fire("Error", err.message || "Failed to delete post", "error");
      }
    }
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        <h1 className="text-2xl text-red-600 font-semibold mb-4">Error</h1>
        <p className="text-gray-700">{error}</p>
        <Link href="/login" className="mt-4 text-primary underline">
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-background p-8">
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-primary">Explore</h1>
          <p className="mt-2 text-lg text-text">
            Discover new topics and interests
          </p>
        </div>

        <Link
          href="/create"
          className="mt-4 md:mt-0 flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition"
        >
          <FiPlus size={18} />
          Create Post
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {posts.map((post: any) => (
          <Link
            key={post._id}
            href={`/explore/post/${post._id}`}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={post.images?.[0] || "/Placeholder.png"}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-sm text-secondary font-semibold">
                {post.category}
              </span>
              <h2 className="text-xl font-semibold text-primary mt-1">
                {post.title}
              </h2>
              <p className="mt-2 text-gray-600 line-clamp-3">{post.content}</p>

              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <Image
                  src={post.author?.profilePic || "/DefaultAvatar.png"}
                  alt={post.author?.name || "User"}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <span>{post.author?.name || "Unknown"}</span>
                <span className="ml-auto text-xs">
                  {formatDistanceToNow(new Date(post.createdAt), {
                    addSuffix: true,
                  })}
                </span>
              </div>

              <div className="mt-2 flex justify-between text-gray-500 text-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <FiThumbsUp className="text-primary" size={16} />
                    <span className="hidden sm:inline">Likes</span>
                    <span>{post.likes?.length || 0}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiMessageCircle className="text-primary" size={16} />
                    <span className="hidden sm:inline">Comments</span>
                    <span>{post.comments?.length || 0}</span>
                  </div>
                </div>

                {post.author?._id === currentUser?.id && (
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/explore/post/${post._id}/edit`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      <FiEdit size={16} />
                      <span className="hidden sm:inline">Edit</span>
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleDelete(post._id);
                      }}
                      className="text-red-500 hover:underline flex items-center gap-1"
                    >
                      <FiTrash size={16} />
                      <span className="hidden sm:inline">Delete</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
