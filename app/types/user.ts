// types/user.ts
export interface IUser {
    id: string;
    name: string;
    email: string;
    profilePic: string;
}


// Reusable preview type for users
export interface IUserPreview {
    _id: string;
    name: string;
    profilePic: string;
}

// Reply interface (used inside Comment)
export interface IReply {
    _id?: string;
    user: IUserPreview;
    content: string;
    likes: string[];
    createdAt: string;
}

// Comment interface (used inside Post)
export interface IComment {
    _id: string;
    user: IUserPreview;
    post: string;
    content: string;
    likes: string[];
    replies: IReply[];
    createdAt: string;
    updatedAt: string;
}

// Full Post interface
export interface IPost {
    _id: string;
    title: string;
    content: string;
    images: string[];
    category: string;
    tags: string[];
    author: IUserPreview;
    likes: string[];
    comments: IComment[];
    visibility: "public" | "private" | "followersOnly";
    viewCount: number;
    sharedFrom: string | null;
    isEdited: boolean;
    createdAt: string;
    updatedAt: string;
}

