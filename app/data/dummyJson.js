export const posts = [
    {
        id: "1",
        title: "The Future of AI in Everyday Life",
        content: "Artificial intelligence is transforming how we interact with technology...",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D",
        author: { name: "Sarah Williams", profilePic: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D" },
        category: "Technology",
        likes: [
            { userId: "101", name: "Alice Johnson", profilePic: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D" },
        ],
        comments: [
            {
                id: "201",
                user: { name: "James Carter", profilePic: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D" },
                content: "AI is truly changing the world. Great insights!",
                likes: 5,
                replies: [],
            },
        ],
        createdAt: "3 hours ago",
    },
    {
        id: "2",
        title: "10 Must-Read Books for Personal Growth",
        content: "Explore books that can change your perspective on life, productivity, and success...",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D",
        author: { name: "James Carter", profilePic: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D" },
        category: "Self-Improvement",
        likes: [
            { userId: "103", name: "Sophia Lee", profilePic: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D" },
        ],
        comments: [
            {
                id: "202",
                user: { name: "Michael Adams", profilePic: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D" },
                content: "Reading has changed my life, thanks for the suggestions!",
                likes: 3,
                replies: [],
            },
        ],
        createdAt: "6 hours ago",
    },
];
