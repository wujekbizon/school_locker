import { User } from "@clerk/nextjs/server";

export function displayMemberSince(user: User) {
  const createdAtInMs = user.createdAt;
  const now = Date.now();
  const differenceInMs = now - createdAtInMs;

  const oneDayInMs = 1000 * 60 * 60 * 24;
  const oneMonthInMs = oneDayInMs * 30;

  let memberSinceText;
  if (differenceInMs < oneDayInMs) {
    memberSinceText = "Member joined just now";
  } else if (differenceInMs < oneMonthInMs) {
    const days = Math.floor(differenceInMs / oneDayInMs);
    memberSinceText = days === 1 ? `Member since 1 day` : `${days} days ago`;
  } else {
    const months = Math.floor(differenceInMs / oneMonthInMs);
    memberSinceText =
      months === 1 ? `Memeber since 1 month` : `${months} months ago`;
  }

  return memberSinceText;
}
