import Image from "next/image";
import Link from "next/link";

export default function TutorsHero() {
  return (
    <div className="flex h-full w-full flex-col items-center  justify-around bg-zinc-950 p-5 md:p-10">
      <div className="flex w-full flex-col items-center gap-5 rounded-2xl p-0 lg:p-10 xl:w-2/3">
        <h1 className="text-center text-3xl font-bold text-zinc-200 sm:text-4xl md:text-[45px] md:leading-[50px]">
          Get Personal & Online Private Tutoring with School Locker Experts
        </h1>
        <p className="w-[90%] text-center text-sm text-zinc-500 sm:text-lg md:text-xl lg:w-full ">
          Our specialists can help you find the right tutor for you or your
          kids.
        </p>
      </div>
      <div className="relative flex h-1/2 w-[90%] items-center justify-center md:w-2/3 xl:w-1/2 ">
        <Image
          className="h-[90%] w-full rounded-3xl object-cover sm:h-full"
          src="/tutors2.jpg"
          width={500}
          height={500}
          priority
          alt="tutors"
        />
        <div className="absolute left-auto right-auto top-[-70px] animate-bounce md:top-[-70px]">
          <Link href="/courses/tutors/#tutor">
            <button className="h-16 w-52 rounded-lg border-2 border-border/50 bg-amber-400 text-xl font-bold text-zinc-950 transition-colors hover:bg-amber-500 sm:w-80 sm:text-2xl md:h-20 md:text-3xl lg:h-28 lg:w-96 lg:text-4xl">
              Get Tutor Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
