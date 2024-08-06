import { Tutor } from "@/constants/tutorsData";
import Image from "next/image";
import StarIcon from "./icons/StarIcon";
import ShieldIcon from "./icons/ShieldIcon";
import UsersIcon from "./icons/UsersIcon";
import CoursesIcon from "./icons/CoursesIcon";
import PlaylistIcon from "./icons/PlaylistIcon";

export default function TutorDetail(props: { tutor: Tutor }) {
  const { about, role, tutorImgSrc, tutorName, id } = props.tutor;
  return (
    <section className="flex h-full w-full flex-col items-center overflow-y-auto scroll-smooth scrollbar-webkit">
      <div className="w-3/4 py-10">
        <div className="flex h-60 w-full items-center gap-5 rounded-lg bg-zinc-900 p-4">
          <div className="flex w-full justify-between">
            <div className="flex h-full w-1/2">
              <Image
                src={tutorImgSrc}
                alt={tutorName}
                width={400}
                height={400}
                className="h-52 w-52 min-w-52 rounded-md object-cover object-top"
              />

              <div className="flex items-center">
                <h2 className="text-lg text-zinc-200">{tutorName}</h2>
                <ShieldIcon />
              </div>
              <p>Software Developer</p>
              <div className="flex items-center">
                <StarIcon />
                <p>4.7 (30 reviews)</p>
              </div>
              <div className="flex items-center">
                <CoursesIcon />
                <p>3 courses</p>
              </div>
              <div className="flex h-full flex-col justify-evenly">
                <div className="flex items-center">
                  <UsersIcon />
                  <p>49 Students</p>
                </div>
                <div className="flex items-center">
                  <PlaylistIcon />
                  <p>7 courses</p>
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
