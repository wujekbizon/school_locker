import EditIcon from "@/components/icons/Edit";
import { Textarea } from "@/components/ui/textarea";
import { displayMemberSince } from "@/helpers/displayMemberSince";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) throw new Error("Unauthorized");

  return (
    <section className="flex h-[calc(100%_-_56px)] w-full flex-col px-4 pb-3">
      <div className="flex h-full w-full flex-row">
        <div className="flex w-full flex-col items-center pt-28">
          <h1 className="font-semi-bold w-1/2 bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text py-2 text-center text-4xl text-transparent">
            Hello,{" "}
            <span className="font-bold text-amber-500"> {user?.firstName}</span>{" "}
            welcome in your personal digital locker.
          </h1>
          <h2 className="text-center text-lg font-semibold text-zinc-500"></h2>
        </div>
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-3">
            <p className="border-b text-sm text-zinc-300">User info:</p>
            <div className="w-45 h-45 relative ">
              <Image
                className="rounded-xl object-contain"
                src={user.imageUrl}
                alt="user"
                width={300}
                height={300}
              />
              <EditIcon />
            </div>
            <div>
              <p>{user.fullName}</p>
            </div>
            <div>
              <p className="text-sm text-zinc-300">Email:</p>
              <p className="blur-sm hover:blur-none">
                {user.emailAddresses[0]?.emailAddress}
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-20">
              <p className="text-sm text-zinc-300">Motto:</p>
              <Textarea
                className="resize-none border-border/40 bg-transparent"
                placeholder="Share your learning motto, one that will motivate you every day."
              />
              <div className="flex w-full justify-end ">
                <button className="rounded bg-gradient-to-r from-gray-600 to-gray-800 px-3 py-1 text-center text-sm text-white hover:from-gray-600 hover:to-gray-400">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3">
            <p className="text-md border-b  text-zinc-300">
              {displayMemberSince(user)}
            </p>
            <button className="mb-2 rounded bg-gradient-to-r from-red-400 to-red-700 py-1 hover:from-red-600 hover:to-red-200">
              Close Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
