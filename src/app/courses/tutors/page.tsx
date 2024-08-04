import CustomButton from "@/components/CustomButton";
import Image from "next/image";

export default function CoursesTutorsPage() {
  return (
    <section className="h-full w-full">
      <div className="flex h-[75vh] w-full  bg-black p-20">
        <div className="flex h-full w-1/3 flex-col justify-evenly rounded-3xl bg-zinc-950 px-5 py-3">
          <h1 className="text-[39px] font-bold leading-10 text-zinc-200">
            Get Personal & Online Private Tutoring with School Locker Experts
          </h1>
          <p className="text-base text-zinc-400">
            Our specialists can help you find the right tutor for you or your
            kids.
          </p>
          <CustomButton href="/courses/tutors/#tutor">
            Find Tutor Now
          </CustomButton>
        </div>
        <div className="flex h-full w-2/3 items-center justify-center">
          <div className="flex h-[90%] w-3/4 items-center justify-center ">
            <Image
              className="h-full w-full rounded-bl-[200px] rounded-br-3xl rounded-tl-3xl rounded-tr-[200px] object-cover"
              src="/tutors.jpg"
              width={500}
              height={500}
              priority
              alt="tutors"
            />
          </div>
        </div>
      </div>
      <div id="tutor" className="">
        <h2>All Tutors Guaranted by Us</h2>
      </div>
    </section>
  );
}
