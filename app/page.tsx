import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center">
      <h1 className="text-6xl font-bold mb-4">Milo Financial</h1>
      <p className="text-xl mb-8">
        Boost your savings with clear, visual insights into your spending habits—start making smarter choices today!
      </p>
      <Link href="/financial/dashboard" className="px-6 py-2 bg-white text-black rounded-lg transition">
          Start Saving Now!
      </Link>
    </div>
  );
}
