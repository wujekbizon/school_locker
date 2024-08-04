import { currentUser } from "@clerk/nextjs/server";
import { displayMemberSince } from "@/helpers/displayMemberSince";

import EditIcon from "@/components/icons/Edit";
import Image from "next/image";
import UserMottoForm from "./UserMottoForm";
import { coursesData } from "@/constants/coursesData";
import CourseCard from "./CourseCard";
import Link from "next/link";
import { tutorsData } from "@/constants/tutorsData";
import TutorsList from "./TutorsList";
import AddIcon from "./icons/AddIcon";
import AssignmentsList from "./AssignmentsList";
import { assignmentsData } from "@/constants/assignmentData";

export default async function UserProfile() {
  const user = await currentUser();

  if (!user) throw new Error("Unauthorized");

  return (
    <section className="flex w-full flex-col items-center gap-24 overflow-y-auto p-2 md:p-10">
      <div className=" h-80 w-full rounded-2xl bg-amber-400 pb-4 text-center xl:w-[90%]">
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
        {/* <p className="text-md text-zinc-900">
            Member {displayMemberSince(user)}
          </p> */}
      </div>

      <div className="flex h-full w-full flex-col gap-6 lg:flex-row xl:w-[90%] xl:gap-10">
        <div className="h-full w-full flex-col lg:w-[60%]">
          <p className="w-full pb-2 text-base">Courses</p>
          <div className="flex w-full flex-col gap-6 overflow-x-auto scrollbar-webkit md:flex-row">
            {coursesData.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <p className="w-full pb-2 pt-6 text-base">Reminders</p>
          <div className="flex w-full flex-col justify-between gap-4 rounded-xl bg-zinc-950 p-3">
            <p className="w-full pb-2 text-base text-zinc-200">
              Exam Schedules - TO DO GREG
            </p>
            <p className="relative w-full pb-2 text-base text-zinc-300">
              Easily manage your tasks and deadlines with our built-in reminder
              system. Set custom alerts for important events, appointments, or
              bills. Choose from a variety of notification options, including
              push notifications, email, or in-app alerts. Stay organized and
              never miss a thing!
            </p>
          </div>
        </div>
        <div className="h-full w-full lg:w-[40%]">
          <div className="flex w-full items-center justify-between">
            <p className="w-full pb-2 text-base">Courses Tutor</p>
            <Link
              href="/courses/tutors"
              className="flex w-full items-center justify-end pb-2"
            >
              <p className="text-xs hover:text-amber-400/80">
                Know more {">>"}
              </p>
            </Link>
          </div>
          <TutorsList tutors={tutorsData} />

          <UserMottoForm />
          <div className="flex w-full items-center justify-between py-4">
            <p className="w-full pb-2 text-base">Assignment</p>
            <Link
              href="/courses"
              className="flex w-full items-center justify-end pb-2"
            >
              <AddIcon />
            </Link>
          </div>
          <AssignmentsList assignments={assignmentsData} />
        </div>
      </div>
    </section>
  );
}
