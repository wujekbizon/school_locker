import SubmitButton from "@/app/_components/SubmitButton";
import TutorsHero from "@/app/_components/TutorsHero";
import ProfessionalTutors from "@/components/ProfessionalTutors";
import { Input } from "@/components/ui/input";

export default function CoursesTutorsPage() {
  return (
    <section className="h-full w-full overflow-y-auto scroll-smooth scrollbar-webkit">
      <TutorsHero />
      <div className="w-full bg-gradient-to-b from-zinc-950 from-0% via-zinc-900 via-50% to-zinc-950 to-100% pb-20">
        <ProfessionalTutors />
      </div>
      <div className="h-3/4 w-full bg-black">
        <div className="flex h-2/3 w-full items-end bg-zinc-800 bg-[url('/contact.jpg')] bg-cover bg-center bg-blend-color-dodge">
          <div className=" mb-[-170px] ml-auto mr-auto flex h-[350px] w-full flex-col justify-between rounded-none border border-border/50 bg-zinc-950 p-8 sm:mb-[-100px] sm:w-[550px] sm:rounded-md md:ml-[20%]">
            <p className="cursor-pointer text-base text-zinc-400 underline hover:text-amber-400">
              Call Us: <a href="callto:800123456">800-123-4567</a>
            </p>
            <h2 className="text-4xl font-semibold text-zinc-200">
              Do You Need Help?
            </h2>
            <p className="text-base text-zinc-500">
              Submit your email and we'll find the perfect tutor for you.
            </p>

            <Input type="text" placeholder="Enter Your Email" />
            <SubmitButton label="Send" loading="Sending..." />
          </div>
        </div>
      </div>
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
