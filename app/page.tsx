export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <header className="w-full py-8 bg-primary text-text-light text-center">
        <h1 className="text-4xl font-bold">Welcome to InterestHub</h1>
        <p className="mt-2 text-lg">Your hub for all your interests</p>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 p-8">
        <h2 className="mt-8 text-2xl font-semibold text-primary">Discover Your Interests</h2>
        <button className="mt-8 px-6 py-3 bg-secondary text-text-light rounded-full hover:bg-green-700">
          Get Started
        </button>
      </main>
    </div>
  );
}
