import Image from "next/image";
import Link from "next/link";
import { getAllPostPreviews } from "../api/api";

export default async function Explore() {
  const posts = await getAllPostPreviews();

  return (
    <div className="flex flex-col items-center min-h-screen bg-background p-8">
      <h1 className="text-4xl font-bold text-primary">Explore</h1>
      <p className="mt-4 text-lg text-text">Discover new topics and interests</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/explore/post/${post.id}`}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={post.image}
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
                  src={post.author.profilePic}
                  alt={post.author.name}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <span>{post.author.name}</span>
                <span className="ml-auto">{post.createdAt}</span>
              </div>

              <div className="mt-2 flex justify-between text-gray-500 text-sm">
                <span>👍 {post.likes.length} Likes</span>
                <span>💬 {post.comments.length} Comments</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
