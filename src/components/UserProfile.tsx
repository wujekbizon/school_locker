import { currentUser } from "@clerk/nextjs/server";
import { displayMemberSince } from "@/helpers/displayMemberSince";

import EditIcon from "@/components/icons/Edit";
import Image from "next/image";
import UserMottoForm from "./UserMottoForm";
import { coursesData } from "@/constants/coursesData";
import CourseCard from "./CourseCard";

export default async function UserProfile() {
  const user = await currentUser();

  if (!user) throw new Error("Unauthorized");

  return (
    <section className="flex w-full flex-col items-center gap-20 overflow-y-auto p-2 md:p-10">
      <div className=" h-80 w-full rounded-2xl bg-amber-400 pb-4 text-center xl:w-3/4">
        <div className="flex h-72 flex-col-reverse items-center rounded-xl rounded-b-none bg-zinc-900 md:flex-row">
          <div className="flex flex-auto items-center justify-center">
            <h1 className="text-base md:text-3xl">Student profile</h1>
          </div>

          <div className="relative flex h-[90%] w-full rounded-lg  p-0 md:h-full md:w-1/2 md:p-4 lg:w-1/3">
            <Image
              className="h-full w-full rounded-lg rounded-b-none object-cover object-top md:rounded-b-lg"
              src={user.imageUrl}
              alt="user"
              width={500}
              height={500}
              priority
            />
            <EditIcon />
          </div>
        </div>
        <p className="text-xl font-bold text-zinc-900">{user.fullName}</p>
      </div>

      <div className="flex h-full w-full flex-col gap-8 lg:flex-row xl:w-3/4">
        <div className="h-full w-full flex-col p-2 lg:w-2/3">
          <p className="w-full pb-2 text-base">Courses</p>
          <div className="flex w-full flex-col gap-10 md:flex-row">
            {coursesData.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
        <div className="h-full w-full bg-slate-600 md:w-1/3 ">
          <p className="w-full pb-2 text-base">Courses Tutor</p>
        </div>
        {/* <div className="flex flex-col gap-3">
          <UserMottoForm />
        </div>
        <p className="text-md pb-2 text-zinc-300">
          Member {displayMemberSince(user)}
        </p> */}
      </div>
    </section>
  );
}
