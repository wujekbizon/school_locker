import TutorsHero from "@/app/_components/TutorsHero";
import ProfessionalTutors from "@/components/ProfessionalTutors";
import TutorsContact from "@/components/TutorsContact";

export default function CoursesTutorsPage() {
  return (
    <section className="h-full w-full overflow-y-auto scroll-smooth scrollbar-webkit">
      <TutorsHero />
      <div className="w-full bg-gradient-to-b from-zinc-950 from-0% via-zinc-900 via-50% to-zinc-950 to-100% pb-20">
        <ProfessionalTutors />
      </div>
      <TutorsContact />
      <div id="tutor" className="h-full w-full p-10">
        <div className="flex w-full flex-col gap-12 md:w-2/3">
          <h2 className="text-2xl font-semibold text-zinc-200 sm:text-3xl">
            Find the right tutors for you
          </h2>
          <div className="flex w-full flex-wrap justify-evenly gap-8"></div>
        </div>
      </div>
    </section>
  );
}
