import TestLoader from "@/components/TestsLoader";
import TutorDetail from "@/components/TutorDetail";
import { tutorsData } from "@/constants/tutorsData";
import { Suspense } from "react";

async function TutorById(props: { tutorId: string }) {
  // this will get tutor datas  by ID from db
  const tutor = tutorsData.find((item) => item.id === props.tutorId);
  if (!tutor) return;

  return <TutorDetail tutor={tutor} />;
}

export default function TutorPage(props: { params: { tutorId: string } }) {
  const { tutorId } = props.params;
  return (
    <Suspense fallback={<TestLoader />}>
      <TutorById tutorId={tutorId} />
    </Suspense>
  );
}
