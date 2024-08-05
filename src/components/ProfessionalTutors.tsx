import { professionalsTutorsContent } from "@/constants/professionals";

export default function ProfessionalTutors() {
  return (
    <div className="w-full bg-gradient-to-b from-zinc-950 from-0% via-zinc-900 via-50% to-zinc-950 to-100% pb-20">
      <div className="flex w-full justify-center p-5 md:p-10">
        <div className="flex w-full flex-col gap-16 md:w-2/3">
          <h2 className="pt-0 text-center text-2xl font-semibold text-zinc-200 sm:text-3xl md:pt-10">
            All Tutors Guaranted by Us
          </h2>
          <div className="flex min-h-72 w-full flex-wrap justify-evenly gap-8">
            {professionalsTutorsContent.map((item) => (
              <div
                className="flex min-h-48 w-full flex-col justify-between rounded-lg border border-border/50 bg-zinc-950 p-6 lg:h-64 lg:w-80"
                key={item.title}
              >
                <h3 className="text-xl font-bold text-zinc-200">
                  {item.title}
                </h3>
                <p className=" text-base text-zinc-500">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
