import { CourseData } from "@/constants/coursesData";
import Image from "next/image";

export default function CourseCard(props: { course: CourseData }) {
  const { courseTitle, duration, imageSrc, progress } = props.course;

  return (
    <div className="mb-1 flex w-full flex-col justify-between gap-4 rounded-xl bg-zinc-300 p-3 md:w-2/3 md:min-w-[320px]">
      <Image
        className="h-52 w-full rounded-lg object-cover"
        src={imageSrc}
        alt="user"
        width={350}
        height={350}
        priority
      />
      <div className="flex w-full flex-row items-center justify-between py-2">
        <p className="pb-2 text-lg font-bold text-zinc-700">{courseTitle}</p>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-500">
          <p className="text-xs font-bold text-zinc-900">{progress}%</p>
        </div>
      </div>
      <div className="flex w-full items-center gap-2">
        <svg
          fill="#000000"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 455 455"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g>
            <path d="M332.229,90.04l14.238-27.159l-26.57-13.93L305.67,76.087c-19.618-8.465-40.875-13.849-63.17-15.523V30h48.269V0H164.231v30 H212.5v30.563c-22.295,1.674-43.553,7.059-63.171,15.523L135.103,48.95l-26.57,13.93l14.239,27.16 C67.055,124.958,30,186.897,30,257.5C30,366.576,118.424,455,227.5,455S425,366.576,425,257.5 C425,186.896,387.944,124.958,332.229,90.04z M355,272.5H212.5V130h30v112.5H355V272.5z"></path>{" "}
          </g>
        </svg>
        <div className="flex items-center gap-2">
          <p className="text-base text-zinc-700">Duration: </p>
          <p className="text-base font-bold text-zinc-700">
            {duration} months{" "}
          </p>
        </div>
      </div>
      <button className="w-full rounded-md  bg-zinc-400 py-1 text-black hover:bg-zinc-500">
        {progress < 100 ? "Continue" : "Completed"}
      </button>
    </div>
  );
}
