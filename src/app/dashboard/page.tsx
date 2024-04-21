import UserInfo from "@/components/UserInfo";
import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) throw new Error("Unauthorized");

  return (
    <section className="flex h-[calc(100%_-_56px)] w-full flex-col px-4 pb-3">
      <div className="flex h-full w-full flex-row gap-4">
        <div className="flex w-full flex-col items-center justify-evenly ">
          <h1 className="font-semi-bold w-full bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text py-1  text-center text-2xl text-transparent md:w-3/4 md:text-4xl">
            Hello,{" "}
            <span className="font-bold text-amber-500"> {user?.firstName}</span>{" "}
            welcome to your personal digital locker.
          </h1>
          <div className="flex flex-col gap-4">
            <h4 className="border-b text-zinc-400 ">How to start: </h4>
            <p className="text-lg  text-zinc-500">
              1. Navigate using the side panel or quick links below.
            </p>
            <p className="text-lg  text-zinc-500">
              2. Create a motto that will be shared throughout the different
              screens of this application.
            </p>
            <p className="text-lg  text-zinc-500">
              3. Have fun and enjoy learning new things.
            </p>
          </div>
          <div className="flex  w-full flex-row items-center justify-center gap-10">
            <div className="flex h-32 w-32 rounded border">B</div>
            <div className="flex h-32 w-32 rounded border ">C</div>
            <div className="flex h-32 w-32 rounded border ">A</div>
          </div>
        </div>
        <UserInfo />
      </div>
    </section>
  );
}
