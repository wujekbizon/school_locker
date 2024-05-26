import { currentUser } from "@clerk/nextjs/server";
import Guide from "@/components/Guide";

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) throw new Error("Unauthorized");

  return (
    <section className="flex h-full w-full flex-col px-4 md:h-[calc(100%_-_64px)]">
      <div className="flex h-full w-full flex-col items-center justify-between py-12">
        <div className="flex h-full w-full items-center justify-center">
          <h1 className="w-full bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text py-1 text-center text-2xl font-bold text-transparent md:text-3xl lg:text-4xl">
            Hello{" "}
            <span className="font-bold text-amber-400/80">
              {user?.firstName}
            </span>
            , welcome to your personal digital locker.
          </h1>
        </div>
        <Guide />
      </div>
    </section>
  );
}
