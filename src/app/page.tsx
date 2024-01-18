import { api } from "~/trpc/server";
import { LandingPage } from "~/@/components/landing-page";
import NavigationLayout from "~/@/components/navigation-layout";


export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <div className="flex flex-col justify-center min-h-screen bg-white dark:bg-gray-900">
    <main className="flex-1">
      <NavigationLayout>
      <LandingPage/>
      </NavigationLayout>
      </main>
   </div>
  );
}
