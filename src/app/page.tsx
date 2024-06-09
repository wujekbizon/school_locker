import { SignedOut } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import Welcome from "@/app/_components/Welcome";

export default function HomePage() {
  const { sessionId, userId } = auth();

  if (sessionId && userId) {
    redirect("/dashboard");
  }

  return (
    <main className="flex w-full flex-col items-center text-white">
      <SignedOut>
        <Welcome />
      </SignedOut>
    </main>
  );
}
