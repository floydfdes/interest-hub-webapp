import { FaListAlt, FaPenNib, FaSearch, FaShareAlt, FaUsers } from "react-icons/fa";

import { MdPersonAdd } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-background">
      {/* Hero Section */}
      <header className="w-full flex flex-col items-center justify-center text-center py-16 bg-primary text-white">
        <h1 className="text-5xl font-bold">Welcome to Interest Hub</h1>
        <p className="mt-4 text-lg max-w-xl">
          Discover, share, and engage with your favorite topics.
        </p>
        <button className="mt-6 px-6 py-3 bg-secondary text-white rounded-full hover:bg-opacity-80">
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <section className="w-full py-16 text-center">
        <h2 className="text-3xl font-semibold text-primary">What We Offer</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 bg-white text-gray-800 shadow-md rounded-lg">
              <feature.icon className="w-12 h-12 text-primary mx-auto" />
              <h3 className="mt-4 text-xl font-medium">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section (bg-secondary added) */}
      <section className="w-full py-16 bg-secondary text-white text-center">
        <h2 className="text-3xl font-semibold">How It Works</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="p-6 bg-white text-gray-800 shadow-md rounded-lg">
              <step.icon className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">{step.step}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="w-full py-16 text-center bg-primary text-white">
        <h2 className="text-3xl font-semibold">Join Interest Hub Today</h2>
        <p className="mt-2 text-lg">Start exploring and sharing your interests with the world.</p>
        <button className="mt-6 px-6 py-3 bg-secondary text-white rounded-full hover:bg-opacity-80">
          Sign Up Now
        </button>
      </section>
    </div>
  );
}

/* Updated Feature Data with Icons */
const features = [
  {
    title: "Explore Topics",
    description:
      "Browse through a vast collection of topics and discover content tailored to your interests. Engage with discussions, read insightful posts, and stay updated on your favorite subjects.",
    icon: FaSearch,
  },
  {
    title: "Engage with Community",
    description:
      "Connect with like-minded individuals by commenting, liking, and sharing content. Build meaningful discussions and expand your network with our engaging community features.",
    icon: FaUsers,
  },
  {
    title: "Create & Share",
    description:
      "Express your thoughts and creativity by posting your own content. Share ideas, stories, and experiences with an audience that values your perspective.",
    icon: FaPenNib,
  },
];

/* Updated Steps Data with Icons */
const steps = [
  { step: "Sign Up", description: "Create your free Interest Hub account and get started.", icon: MdPersonAdd },
  { step: "Choose Interests", description: "Follow topics that excite you and personalize your feed.", icon: FaListAlt },
  { step: "Engage & Share", description: "Start posting, commenting, and connecting with the community!", icon: FaShareAlt },
];
