import { useTestFormState } from "@/store/useTestFormStore";
import { NUMBER_OF_ANSWERS } from "@/constants/categoryOptions";
import Label from "@/components/Label";

function AnswersSelect() {
  const { answersNumber, setAnswersNumber } = useTestFormState();
  return (
    <div className="flex flex-col">
      <Label htmlFor="select" label=" How many answers?" />
      <select
        id="select"
        className="h-10 rounded border border-border/60 bg-zinc-950 px-2"
        value={answersNumber}
        onChange={(event) => setAnswersNumber(parseInt(event.target.value))}
      >
        {NUMBER_OF_ANSWERS.map((item) => (
          <option key={item.title} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
}
export default AnswersSelect;
