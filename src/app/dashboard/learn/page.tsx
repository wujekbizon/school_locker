import { LETTERS } from "@/constants/optionsLetters";
import { ENGLISH_A1_DATA } from "@/data/englishA1";

export default function LearnPage() {
  return (
    <section className="flex flex-col items-center gap-7 p-2 md:p-8">
      <div className="flex h-full w-full flex-col items-center gap-7">
        {ENGLISH_A1_DATA.map((item) => (
          <form
            key={item.number}
            className="relative w-full rounded-lg border border-border/40 bg-zinc-900 px-4 py-8 text-white md:w-3/4"
          >
            <p className="absolute right-2 top-1 text-sm text-muted-foreground">
              {item.number}/{ENGLISH_A1_DATA.length}
            </p>
            <h3 className="border-b border-border/40 px-4 pb-4 text-lg">
              {item.question}
            </h3>
            <ul className="flex flex-col gap-2 px-4 pt-6">
              {item.answers.map(({ option, isCorrect }, index) => (
                <li
                  key={option}
                  className="text-balance text-sm leading-relaxed text-muted-foreground"
                >
                  {LETTERS[index]}){" "}
                  <span className="text-md text-zinc-200"> {option}</span>
                </li>
              ))}
              <div className="flex w-full justify-center self-center pt-4 md:w-1/2">
                <button
                  type="submit"
                  className="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 "
                >
                  Correct anwser
                </button>
              </div>
            </ul>
          </form>
        ))}
      </div>
    </section>
  );
}
