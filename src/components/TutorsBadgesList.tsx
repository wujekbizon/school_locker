import { Tutor } from "@/constants/tutorsData";
import Image from "next/image";
import Link from "next/link";

// this is temporary component
export default function TutorsBadgesList(props: { tutors: Tutor[] }) {
  return (
    <div className="flex h-28 w-full overflow-x-auto rounded-xl bg-zinc-900 p-2.5  scrollbar-webkit">
      <div className="flex h-full w-full flex-row items-center justify-around rounded-md bg-zinc-950">
        {props.tutors.map((tutor) => (
          <Link
            className="transition ease-in-out hover:scale-105"
            href={`/courses/tutors/${tutor.id}`}
            key={tutor.id}
          >
            <Image
              className="h-[70px] w-[70px] rounded-full object-cover"
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
  );
}
