import QuickLink from "@/components/QuickLink";
import UserInfo from "@/components/UserInfo";
import { quickLinks } from "@/constants/quickLinks";
import { Suspense } from "react";
import DynamicUserName from "@/components/DynamicUserName";
import SkeletonUserName from "@/components/SkeletonUserName";
import SkeletonUserInfo from "@/components/SkeletonUserInfo";

export const experimental_ppr = true;

export default function DashboardPage() {
  return (
    <section className="flex h-full w-full flex-col px-4 pb-3 md:h-[calc(100%_-_64px)]">
      <div className="flex h-full w-full flex-col gap-4 xl:flex-row">
        <div className="flex w-full flex-col items-center justify-evenly ">
          <div className="flex w-full flex-col items-center">
            <h1 className="font-semi-bold w-full bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text py-1  text-left text-2xl text-transparent md:w-3/4 md:text-4xl">
              Hello,
              <Suspense fallback={<SkeletonUserName />}>
                <DynamicUserName />
              </Suspense>{" "}
            </h1>
            <h2 className="font-semi-bold w-full bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text py-1 text-left text-2xl text-transparent md:w-3/4 md:text-4xl">
              welcome to your personal digital locker.
            </h2>
          </div>
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
            <>
              {quickLinks.map((link) => (
                <QuickLink key={link.id} {...link} />
              ))}
            </>
          </div>
        </div>
        <Suspense fallback={<SkeletonUserInfo />}>
          <UserInfo />
        </Suspense>
      </div>
    </section>
  );
}
