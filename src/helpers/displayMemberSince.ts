import { User } from "@clerk/nextjs/server";

export function displayMemberSince(user: User) {
  const createdAtInMs = user.createdAt;
  const now = Date.now();
  const differenceInMs = now - createdAtInMs;

  const oneDayInMs = 1000 * 60 * 60 * 24;
  const oneMonthInMs = oneDayInMs * 30;

  let memberSinceText;
  if (differenceInMs < oneDayInMs) {
    memberSinceText = "joined just now";
  } else if (differenceInMs < oneMonthInMs) {
    const days = Math.floor(differenceInMs / oneDayInMs);
    console.log(days);
    memberSinceText =
      days === 1 ? `joined ${days} day ago` : `joined ${days} days ago`;
  } else {
    const months = Math.floor(differenceInMs / oneMonthInMs);
    memberSinceText =
      months === 1 ? `joined month ago` : `joined ${months} months ago`;
  }

  return memberSinceText;
}
