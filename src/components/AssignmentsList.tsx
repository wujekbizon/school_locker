import { AssingmentData } from "@/constants/assignmentData";
import AssignmentCard from "./AssignmentCard";

export default function AssignmentsList(props: {
  assignments: AssingmentData[];
}) {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {props.assignments.map((assignment) => (
        <AssignmentCard key={assignment.id} assignment={assignment} />
      ))}
    </div>
  );
}
