import { SignedOut } from "@clerk/nextjs";
import Welcome from "@/app/_components/Welcome";

export default function HomePage() {
  return (
    <main className="flex w-full flex-col items-center overflow-y-scroll text-white">
      <SignedOut>
        <Welcome />
      </SignedOut>
    </main>
  );
}
