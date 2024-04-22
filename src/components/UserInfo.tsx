import { displayMemberSince } from "@/helpers/displayMemberSince";
import { Textarea } from "./ui/textarea";
import { currentUser } from "@clerk/nextjs/server";
import EditIcon from "./icons/Edit";
import Image from "next/image";

export default async function UserInfo() {
  const user = await currentUser();

  if (!user) throw new Error("Unauthorized");

  return (
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
            priority
          />
          <EditIcon />
        </div>
        <div>
          <p className="text-sm text-zinc-300">Full name:</p>
          <p className="text-xl">{user.fullName}</p>
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
          Member {displayMemberSince(user)}
        </p>
        <button className="mb-2 rounded bg-gradient-to-r from-red-400 to-red-700 py-1 hover:from-red-600 hover:to-red-200">
          Close Account
        </button>
      </div>
    </div>
  );
}
