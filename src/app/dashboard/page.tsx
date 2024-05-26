import { Suspense } from "react";
import Guide from "@/components/Guide";
import UserInfo from "@/components/UserInfo";
import DynamicUserName from "@/components/DynamicUserName";
import SkeletonUserName from "@/components/SkeletonUserName";
import SkeletonUserInfo from "@/components/SkeletonUserInfo";

// export const experimental_ppr = true;

export default function DashboardPage() {
  return (
    <section className="flex h-full w-full flex-col px-4 md:h-[calc(100%_-_64px)]">
      <div className="flex h-full w-full flex-col gap-4 xl:flex-row">
        <div className="flex w-full flex-col items-center justify-around">
          <div className="flex w-full flex-col items-center px-4 py-16 md:px-8">
            <h1 className="font-semi-bold w-full bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text py-1 text-left  text-2xl text-transparent md:w-3/4 lg:text-4xl">
              Hello,
              <Suspense fallback={<SkeletonUserName />}>
                <DynamicUserName />
              </Suspense>
            </h1>
            <h2 className="font-semi-bold w-full bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text py-1 text-right text-2xl text-transparent md:w-3/4 lg:text-4xl">
              welcome to your personal digital locker.
            </h2>
          </div>
          <Guide />
        </div>
        <Suspense fallback={<SkeletonUserInfo />}>
          <UserInfo />
        </Suspense>
      </div>
    </section>
  );
}
