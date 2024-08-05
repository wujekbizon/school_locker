import { Tutor } from "@/constants/tutorsData";
import Image from "next/image";
import Link from "next/link";

export default function TutorCard(props: { tutor: Tutor }) {
  const { tutorImgSrc, tutorName, role, id } = props.tutor;
  return (
    <div className="flex h-96 w-full flex-col rounded-lg border border-border/50 bg-zinc-950 opacity-90 hover:opacity-100  md:w-80">
      <Link className="relative h-full w-full" href={`/courses/tutors/${id}`}>
        <Image
          src={tutorImgSrc}
          alt={tutorName}
          width={400}
          height={600}
          className="h-full w-full rounded-lg object-cover object-top md:object-center"
        />
        <div className="absolute bottom-0 left-0 flex h-12 w-full items-center justify-center rounded-md bg-amber-400/90 hover:bg-amber-400 md:bottom-2 md:left-[calc(50%_-_104px)] md:h-16 md:w-52">
          <p className="text-xl font-semibold text-zinc-950">{role}</p>
        </div>
      </Link>
    </div>
  );
}
