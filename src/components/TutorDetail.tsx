import { Tutor } from "@/constants/tutorsData";
import Image from "next/image";
import StarIcon from "./icons/StarIcon";
import ShieldIcon from "./icons/ShieldIcon";
import UsersIcon from "./icons/UsersIcon";
import CoursesIcon from "./icons/CoursesIcon";
import PlaylistIcon from "./icons/PlaylistIcon";
import SocialLinks from "./ui/SocialLinks";

export default function TutorDetail(props: { tutor: Tutor }) {
  const {
    about,
    role,
    tutorImgSrc,
    tutorName,
    rating,
    reviews,
    students,
    courses,
  } = props.tutor;
  return (
    <section className="flex h-full w-full flex-col items-center overflow-y-auto scroll-smooth scrollbar-webkit">
      <div className="w-full p-5 md:p-10 xl:w-3/4">
        <div className="flex h-full w-full items-center gap-5 rounded-lg bg-zinc-900 p-4 md:h-60">
          <div className="flex h-full w-full flex-col justify-between gap-6 md:flex-row md:gap-0">
            <div className="flex h-full w-full flex-row-reverse gap-8 sm:flex-row">
              <Image
                src={tutorImgSrc}
                alt={tutorName}
                width={400}
                height={400}
                className="hidden h-52 w-52 min-w-52 rounded-md object-cover object-top sm:inline-block"
              />
              <div className="flex w-full flex-col gap-4 sm:w-2/3">
                <div className="flex h-full w-full flex-col items-center sm:items-start sm:pt-6">
                  <div className="flex items-center gap-3">
                    <h2 className="py-2 text-2xl font-semibold text-zinc-200">
                      {tutorName}
                    </h2>
                    <ShieldIcon width={20} height={20} />
                  </div>
                  <p className="text-sm text-zinc-400 sm:text-base">{role}</p>
                </div>

                <div className="flex w-full flex-col justify-between gap-4 sm:flex-row md:justify-start md:gap-12">
                  <div className="flex flex-row justify-between gap-4 sm:flex-col sm:justify-center">
                    <div className="items-centers flex gap-3">
                      <StarIcon width={20} height={20} />
                      <p className="text-sm text-zinc-300 md:text-base">
                        {rating} ({reviews} Reviews)
                      </p>
                    </div>
                    <div className="items-centers flex gap-3">
                      <CoursesIcon width={20} height={20} />
                      <p className="text-sm text-zinc-300 md:text-base">
                        2nd Level
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between gap-4 sm:flex-col sm:justify-center">
                    <div className="flex items-center gap-3">
                      <UsersIcon width={20} height={20} />
                      <p className="text-sm text-zinc-300 md:text-base">
                        {students} Students
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <PlaylistIcon width={20} height={20} />
                      <p className="text-sm text-zinc-300 md:text-base">
                        {courses} Courses
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SocialLinks tutor={props.tutor} />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
