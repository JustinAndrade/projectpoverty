import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <div className="flex flex-col justify-center min-h-screen bg-white dark:bg-gray-900">
    <header className="px-4 lg:px-6 h-16 flex items-center">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Project Poverty</h1>
      <p className="ml-2 text-sm text-gray-500 dark:text-gray-400">Your Path to Financial Freedom</p>
    </header>
    <main className="flex-1">
     <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-gray-100">
                Welcome to Project Poverty
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Take control of your finances and start your journey to financial freedom.
              </p>
              <button className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </main>
   </div>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
