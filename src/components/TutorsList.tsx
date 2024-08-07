import { Tutor } from "@/constants/tutorsData";
import TutorCard from "./TutorCard";

export default function TutorsList(props: { tutors: Tutor[] }) {
  return (
    <div id="tutor" className="flex w-full justify-center p-5 md:p-10">
      <div className="flex w-full flex-col gap-20 py-10 md:w-2/3">
        <h2 className="text-center text-3xl font-semibold text-zinc-200 sm:text-3xl">
          Find the right tutors for you
        </h2>
        <div className="flex w-full flex-wrap justify-evenly gap-8">
          {props.tutors.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>
      </div>
    </div>
  );
}
