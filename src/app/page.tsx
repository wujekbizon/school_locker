import { SignedIn, SignedOut } from "@clerk/nextjs";
import Welcome from "@/components/screens/Welcome";

export default function HomePage() {
  return (
    <main className="flex w-full flex-col items-center overflow-y-scroll text-white">
      <SignedOut>
        <Welcome />
      </SignedOut>
      <SignedIn>
        <h1>Dashboard</h1>
      </SignedIn>
    </main>
  );
}
