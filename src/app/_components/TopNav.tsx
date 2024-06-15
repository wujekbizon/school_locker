import Logo from "@/components/Logo";
import NavButton from "@/components/NavButton";
import {
  SignedIn,
  SignInButton,
  SignedOut,
  UserButton,
  ClerkLoading,
} from "@clerk/nextjs";

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 flex w-full border-b border-border/40 bg-background/95  backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center gap-4">
        <Logo />
        <NavButton />
        <div className="flex flex-1 items-center justify-between gap-4 md:justify-end">
          <div className="flex w-20 items-center justify-center text-white">
            <ClerkLoading>Sign in</ClerkLoading>
            <SignedOut>
              <SignInButton forceRedirectUrl="/dashboard" />
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}
