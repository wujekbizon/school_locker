import TutorsHero from "@/app/_components/TutorsHero";
import TutorsList from "@/components/TutorsList";
import ProfessionalTutors from "@/components/ProfessionalTutors";
import TutorsContact from "@/components/TutorsContact";
import { tutorsData } from "@/constants/tutorsData";
import { Suspense } from "react";
import TestLoader from "@/components/TestsLoader";

async function Tutors() {
  // fetch all tutors from db
  // temp mock data
  return <TutorsList tutors={tutorsData} />;
}

export default function CoursesTutorsPage() {
  return (
    <section className="h-full w-full overflow-y-auto scroll-smooth scrollbar-webkit">
      <TutorsHero />
      <ProfessionalTutors />
      <TutorsContact />
      <Suspense fallback={<TestLoader />}>
        <Tutors />
      </Suspense>
    </section>
  );
}
