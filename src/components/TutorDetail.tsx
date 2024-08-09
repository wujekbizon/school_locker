import { Tutor } from "@/constants/tutorsData";
import Image from "next/image";
import StarIcon from "./icons/StarIcon";
import ShieldIcon from "./icons/ShieldIcon";
import UsersIcon from "./icons/UsersIcon";
import CoursesIcon from "./icons/CoursesIcon";
import PlaylistIcon from "./icons/PlaylistIcon";

export default function TutorDetail(props: { tutor: Tutor }) {
  const { about, role, tutorImgSrc, tutorName, id, rating, reviews, students } =
    props.tutor;
  return (
    <section className="flex h-full w-full flex-col items-center overflow-y-auto scroll-smooth scrollbar-webkit">
      <div className="w-3/4 py-10">
        <div className="flex h-60 w-full items-center gap-5 rounded-lg bg-zinc-900 p-4">
          <div className="flex w-full justify-between">
            <div className="flex h-full w-2/3 gap-8">
              <Image
                src={tutorImgSrc}
                alt={tutorName}
                width={400}
                height={400}
                className="h-52 w-52 min-w-52 rounded-md object-cover object-top"
              />

              <div className="flex flex-col justify-center gap-8">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-semibold text-zinc-200">
                    {tutorName}
                  </h2>
                  <ShieldIcon width={20} height={20} />
                </div>
                <p className="text-base text-zinc-300">{role}</p>
                <div className="items-centers flex gap-3">
                  <StarIcon width={20} height={20} />
                  <p className="text-base text-zinc-300">
                    {rating} ({reviews} reviews)
                  </p>
                </div>
                <div className="items-centers flex gap-3">
                  <CoursesIcon width={20} height={20} />
                  <p className="text-base text-zinc-300">2 level</p>
                </div>
              </div>
              <div className="flex flex-col justify-end gap-8">
                <div className="flex items-center gap-3">
                  <UsersIcon width={20} height={20} />
                  <p className="text-base text-zinc-300">49 Students</p>
                </div>
                <div className="flex items-center gap-3">
                  <PlaylistIcon width={20} height={20} />
                  <p className="text-base text-zinc-300">7 courses</p>
                </div>
              </div>
            </div>
            <div>Social Links</div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
