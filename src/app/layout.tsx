import "@/styles/globals.css";

import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import TopNav from "@/app/_components/TopNav";
import ToastProvider from "./_components/ToastProvider";
import Providers from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
  title: "School-Locker",
  description:
    "Ready to level up your learning? Create engaging tests, access digital learning resources, and track your progress. Sign up for free today and experience a smarter way to learn!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark],
      }}
    >
      <html lang="en">
        <body className={`${poppins.className} dark h-screen overflow-hidden`}>
          <TopNav />
          <main className="relative flex h-[calc(100vh_-_64px)]">
            <Providers>
              <ToastProvider>{children}</ToastProvider>
            </Providers>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
