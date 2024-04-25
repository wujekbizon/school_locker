import QuestionCard from "@/components/QuestionCard";
import { ENGLISH_A1_DATA } from "@/data/englishA1";

export default function LearnPage() {
  return (
    <section className="flex flex-col items-center gap-7 p-2 md:p-8">
      {ENGLISH_A1_DATA.map((item) => (
        <QuestionCard
          key={item.number} // this need to be replace lateer with proper unique id
          data={item}
          length={ENGLISH_A1_DATA.length}
        />
      ))}
    </section>
  );
}
