import { posts } from "@/app/data/dummyJson";
import Image from "next/image";
import Link from "next/link";

export default function PostPage({ params }: { params: { id: string } }) {
    const post = posts.find((p) => p.id === params.id);

    if (!post) {
        return <div className="text-center text-red-500 text-lg">Post not found</div>;
    }

    return (
        <div className="flex flex-col items-center min-h-screen bg-background p-8">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-6">
                <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover rounded-md"
                />

                {/* Post Header */}
                <div className="mt-4 flex items-center gap-3">
                    <Image
                        src={post.author.profilePic}
                        alt={post.author.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div>
                        <h2 className="text-lg font-semibold text-primary">{post.author.name}</h2>
                        <p className="text-sm text-gray-500">{post.createdAt}</p>
                    </div>
                </div>

                {/* Post Content */}
                <span className="mt-4 text-sm text-secondary font-semibold">{post.category}</span>
                <h1 className="text-3xl font-bold text-primary mt-2">{post.title}</h1>
                <p className="mt-2 text-gray-600">{post.content}</p>

                {/* Likes Section */}
                <div className="mt-4">
                    <p className="text-gray-600 font-medium">Liked by:</p>
                    <div className="flex flex-wrap mt-2 gap-3">
                        {post.likes.map((user) => (
                            <div key={user.userId} className="flex items-center gap-2">
                                <Image
                                    src={user.profilePic}
                                    alt={user.name}
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <p className="text-sm text-gray-700">{user.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Comments Section */}
                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-primary">Comments</h3>
                    <div className="mt-4 space-y-6">
                        {post.comments.map((comment) => (
                            <div key={comment.id} className="p-4 bg-gray-100 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={comment.user.profilePic}
                                        alt={comment.user.name}
                                        width={30}
                                        height={30}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <h4 className="text-sm font-semibold">{comment.user.name}</h4>
                                        <p className="text-gray-600">{comment.content}</p>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
                                    <span>👍 {comment.likes} Likes</span>
                                    <span>💬 {comment.replies.length} Replies</span>
                                </div>

                                {/* Nested Replies */}
                                {comment.replies.length > 0 && (
                                    <div className="mt-3 pl-6 border-l border-gray-300 space-y-3">
                                        {comment.replies.map((reply) => (
                                            <div key={reply.id} className="p-3 bg-white rounded-md">
                                                <div className="flex items-center gap-3">
                                                    <Image
                                                        src={reply.user.profilePic}
                                                        alt={reply.user.name}
                                                        width={25}
                                                        height={25}
                                                        className="rounded-full"
                                                    />
                                                    <div>
                                                        <h4 className="text-sm font-semibold">{reply.user.name}</h4>
                                                        <p className="text-gray-600">{reply.content}</p>
                                                    </div>
                                                </div>
                                                <div className="mt-1 text-sm text-gray-500">👍 {reply.likes} Likes</div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Link href="/explore" className="mt-6 bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-80">
                ← Back to Explore
            </Link>
        </div>
    );
}
