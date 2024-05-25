import { currentUser } from "@clerk/nextjs/server";
import { displayMemberSince } from "@/helpers/displayMemberSince";
import { Textarea } from "@/components/ui/textarea";
import EditIcon from "@/components/icons/Edit";
import Image from "next/image";
import Label from "@/components/Label";

export default async function UserInfo() {
  const user = await currentUser();

  if (!user) throw new Error("Unauthorized");

  return (
    <div className="flex h-full w-full flex-col justify-between lg:w-64">
      <div className="flex flex-col gap-3">
        <p className="border-b text-sm text-zinc-300">User info:</p>
        <div className="relative h-64 w-64 ">
          <Image
            className="rounded-xl object-contain"
            src={user.imageUrl}
            alt="user"
            width={256}
            height={256}
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
          <Label htmlFor="motto" label="Motto:" />
          <Textarea
            id="motto"
            name="motto"
            className="resize-none border-border/40 bg-transparent"
            placeholder="Share your learning motto, one that will motivate you every day."
          />
          <div className="flex w-full justify-end">
            <button className="rounded bg-gradient-to-r from-gray-600 to-gray-800 px-3 py-1 text-center text-sm text-white hover:from-gray-600 hover:to-gray-400">
              Submit
            </button>
          </div>
        </div>
      </div>
      <p className="text-md border-b pb-2 text-zinc-300">
        Member {displayMemberSince(user)}
      </p>
    </div>
  );
}
