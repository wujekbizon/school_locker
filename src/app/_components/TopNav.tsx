import NavButton from "@/components/ui/NavButton";
import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 flex w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center gap-4">
        <div className="mr-4 hidden flex-1 md:flex">
          <h1 className="border border-amber-200/10 border-zinc-800 px-4 text-2xl font-bold text-white">
            School <span className="font-bold text-amber-500">Locker</span>{" "}
          </h1>
        </div>
        <NavButton />
        <div className="flex flex-1 items-center justify-between gap-4 md:justify-end">
          <div className="relative flex w-full items-center justify-end ">
            <input
              type="text"
              className="inline-flex h-8 w-full items-center justify-start whitespace-nowrap rounded-[0.5rem] border border-input bg-transparent  px-4 py-2 text-sm font-normal text-muted-foreground shadow-none transition-colors hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:pr-12 md:w-40 lg:w-64"
              placeholder="Search..."
            />
            <kbd className="pointer-events-none absolute right-[0.4rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border-black bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
          <div className="flex w-20 items-center justify-center text-white">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}
