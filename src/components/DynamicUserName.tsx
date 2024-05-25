import { currentUser } from "@clerk/nextjs/server";

export default async function DynamicUserName() {
  const user = await currentUser();
  if (!user) throw new Error("Unauthorized");

  return (
    <span className="font-bold text-amber-500/80"> {user?.firstName}</span>
  );
}
