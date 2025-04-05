import { IPost } from "@/app/types/user";
import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { getPostById } from "@/app/api/api";

export default async function PostPage({ params }: { params: { id: string } }) {
    const post = await getPostById(params.id) as IPost;

    if (!post) {
        return <div className="text-center text-red-500 text-lg">Post not found</div>;
    }

    return (
        <div className="flex flex-col items-center min-h-screen bg-background p-8">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-6">
                <Image
                    src={post.images?.[0] || "/Placeholder.png"}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover rounded-md"
                />

                <div className="mt-4 flex items-center gap-3">
                    <Image
                        src={post.author.profilePic || "DefaultAvatar.png"}
                        alt={post.author.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div>
                        <h2 className="text-lg font-semibold text-primary">{post.author.name}</h2>
                        <p className="text-sm text-gray-500">
                            {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                        </p>
                    </div>
                </div>

                <span className="mt-4 text-sm text-secondary font-semibold block">{post.category}</span>
                <h1 className="text-3xl font-bold text-primary mt-2">{post.title}</h1>
                <p className="mt-2 text-gray-600">{post.content}</p>

                <div className="mt-4">
                    <p className="text-gray-600 font-medium">Likes: {post.likes?.length || 0}</p>
                </div>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-primary">Comments</h3>
                    <div className="mt-4 space-y-6">
                        {post.comments.map((comment) => (
                            <div key={comment._id} className="p-4 bg-gray-100 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={comment.user.profilePic || "DefaultAvatar.png"}
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
                                    <span>👍 {comment.likes?.length || 0} Likes</span>
                                    <span>💬 {comment.replies?.length || 0} Replies</span>
                                </div>

                                {comment.replies?.length > 0 && (
                                    <div className="mt-3 pl-6 border-l border-gray-300 space-y-3">
                                        {comment.replies.map((reply) => (
                                            <div key={reply._id} className="p-3 bg-white rounded-md">
                                                <div className="flex items-center gap-3">
                                                    <Image
                                                        src={reply.user.profilePic || "DefaultAvatar.png"}
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
                                                <div className="mt-1 text-sm text-gray-500">
                                                    👍 {reply.likes?.length || 0} Likes
                                                </div>
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
