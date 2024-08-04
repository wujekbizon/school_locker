import { AssingmentData } from "@/constants/assignmentData";
import Image from "next/image";

export default function AssignmentCard(props: { assignment: AssingmentData }) {
  const { imageUrl, status, title, dueDate } = props.assignment;

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formattedDate = new Date(dueDate).toLocaleDateString("en-EN", options);
  return (
    <div className="flex min-h-28 w-full cursor-pointer items-center justify-around gap-2 rounded-xl bg-zinc-900 p-2.5 hover:bg-zinc-900/90 lg:justify-between">
      <Image
        className="h-24 w-24 rounded-lg border border-black object-cover"
        src={imageUrl}
        alt="user"
        width={200}
        height={200}
        priority
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-sm font-bold text-zinc-300 sm:text-base">
          {title}
        </h2>
        <p className="text-xs text-zinc-300">{formattedDate}</p>
      </div>
      <div
        className={`flex min-w-[88px] items-center justify-center rounded-sm p-1 ${status === "In Pending" && "bg-zinc-600"} ${status === "Completed" && "bg-amber-500"} ${status === "In Progress" && "bg-green-800"}`}
      >
        <p
          className={`text-center text-sm text-zinc-200 ${status === "Completed" && "text-zinc-950"}`}
        >
          {status}
        </p>
      </div>
    </div>
  );
}
