import { currentUser } from "@clerk/nextjs/server";
import { displayMemberSince } from "@/helpers/displayMemberSince";

import EditIcon from "@/components/icons/Edit";
import Image from "next/image";
import UserMottoForm from "./UserMottoForm";
import { coursesData } from "@/constants/coursesData";
import CourseCard from "./CourseCard";
import Link from "next/link";
import { tutorsData } from "@/constants/tutorsData";

export default async function UserProfile() {
  const user = await currentUser();

  if (!user) throw new Error("Unauthorized");

  return (
    <section className="flex w-full flex-col items-center gap-24 overflow-y-auto p-2 md:p-10">
      <div className=" h-80 w-full rounded-2xl bg-amber-400 pb-4 text-center xl:w-[85%]">
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

      <div className="flex h-full w-full flex-col gap-10 lg:flex-row xl:w-[85%]">
        <div className="h-full w-full flex-col lg:w-[65%]">
          <p className="w-full pb-2 text-base">Courses</p>
          <div className="flex w-full flex-col gap-10 overflow-x-auto scrollbar-webkit md:flex-row">
            {coursesData.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <p className="w-full pb-2 pt-6 text-base">Reminders</p>
          <div className="flex w-full flex-col justify-between gap-4 rounded-xl bg-zinc-300 p-3">
            <p className="w-full pb-2 text-base text-zinc-900">
              Exam Schedules - TO DO GREG
            </p>
            <p className="relative w-full pb-2 text-base text-zinc-900">
              Easily manage your tasks and deadlines with our built-in reminder
              system. Set custom alerts for important events, appointments, or
              bills. Choose from a variety of notification options, including
              push notifications, email, or in-app alerts. Stay organized and
              never miss a thing!
            </p>
          </div>
        </div>
        <div className="h-full w-full lg:w-[35%]">
          <div className="flex w-full items-center justify-between">
            <p className="w-full pb-2 text-base">Courses Tutor</p>
            <Link
              href="/courses/tutors"
              className="flex w-full items-center justify-end pb-2"
            >
              <p className="text-xs">Know more</p>
              <span>{">>"}</span>
            </Link>
          </div>
          <div className="flex h-28 w-full overflow-x-auto rounded-xl bg-zinc-900 p-2  scrollbar-webkit">
            <div className="flex h-full w-full flex-row items-center justify-around rounded-md bg-zinc-950">
              {tutorsData.map((tutor) => (
                <Link
                  className="transition ease-in-out hover:scale-105"
                  href={`/courses/tutors/${tutor.id}`}
                  key={tutor.id}
                >
                  <Image
                    className="h-[80px] w-[80px] rounded-full object-cover"
                    src={tutor.tutorImgSrc}
                    alt="user"
                    width={200}
                    height={200}
                    priority
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-6 flex w-full rounded-xl bg-zinc-900 p-2">
            <UserMottoForm />
          </div>
          <div className="flex w-full items-center justify-between py-4">
            <p className="w-full pb-2 text-base">Assignment</p>
            <Link
              href="/courses"
              className="flex w-full items-center justify-end pb-2"
            >
              <svg
                fill="#ffffff"
                height="26px"
                width="26px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M491.841,156.427c-19.471-45.946-51.936-85.013-92.786-112.637C358.217,16.166,308.893-0.007,256,0 c-35.254-0.002-68.946,7.18-99.571,20.158C110.484,39.63,71.416,72.093,43.791,112.943C16.167,153.779-0.007,203.104,0,256 c-0.002,35.255,7.181,68.948,20.159,99.573c19.471,45.946,51.937,85.013,92.786,112.637C153.783,495.834,203.107,512.007,256,512 c35.253,0.002,68.946-7.18,99.571-20.158c45.945-19.471,85.013-51.935,112.638-92.785C495.834,358.22,512.007,308.894,512,256 C512.002,220.744,504.819,187.052,491.841,156.427z M460.413,342.257c-16.851,39.781-45.045,73.723-80.476,97.676 c-35.443,23.953-78.02,37.926-123.936,37.933c-30.619-0.002-59.729-6.218-86.255-17.454 c-39.781-16.851-73.724-45.044-97.677-80.475C48.114,344.495,34.14,301.917,34.133,256c0.002-30.62,6.219-59.731,17.454-86.257 c16.851-39.781,45.045-73.724,80.476-97.676C167.506,48.113,210.084,34.14,256,34.133c30.619,0.002,59.729,6.218,86.255,17.454 c39.781,16.85,73.724,45.044,97.677,80.475c23.953,35.443,37.927,78.02,37.934,123.939 C477.864,286.62,471.648,315.731,460.413,342.257z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M389.594,239.301H272.699V122.406c0-9.222-7.477-16.699-16.699-16.699c-9.222,0-16.699,7.477-16.699,16.699v116.895 H122.406c-9.222,0-16.699,7.477-16.699,16.699s7.477,16.699,16.699,16.699h116.895v116.895c0,9.222,7.477,16.699,16.699,16.699 c9.222,0,16.699-7.477,16.699-16.699V272.699h116.895c9.222,0,16.699-7.477,16.699-16.699S398.817,239.301,389.594,239.301z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </Link>
          </div>
          <div className="flex h-full  w-full flex-col gap-6">
            <div className="flex min-h-28 w-full items-center justify-between gap-2 rounded-xl bg-zinc-300 p-2">
              <Image
                className="h-24 w-32 rounded-lg object-cover"
                src="/plans.png"
                alt="user"
                width={200}
                height={200}
                priority
              />
              <div className="flex flex-col gap-4">
                <h2 className="text-md font-bold text-zinc-900">Case Study</h2>
                <p className="text-sm text-zinc-900">9th July 12:00pm</p>
              </div>
              <div className="flex items-center justify-center rounded-sm bg-green-600 p-1">
                <p className="text-md text-zinc-200">In Progress</p>
              </div>
            </div>
            <div className="flex min-h-28 w-full items-center justify-between gap-2 rounded-xl bg-zinc-300 p-2">
              <Image
                className="h-24 w-32 rounded-lg object-cover"
                src="/plans.png"
                alt="user"
                width={200}
                height={200}
                priority
              />
              <div className="flex flex-col gap-4">
                <h2 className="text-md font-bold text-zinc-900">Case Study</h2>
                <p className="text-sm text-zinc-900">9th July 12:00pm</p>
              </div>
              <div className="flex items-center justify-center rounded-sm bg-green-600 p-1">
                <p className="text-md text-zinc-200">In Progress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
