import { Categories } from "@/types/categoriesType";
import Label from "./Label";

export default function Select(props: {
  categories: Categories[];
  label: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled: boolean;
}) {
  return (
    <div className="flex w-full flex-col">
      <Label label={props.label} htmlFor="category" />
      <select
        name="category"
        id="category"
        className="text-md h-10 rounded border border-border/60 bg-zinc-950 px-2"
        onChange={props.onChange}
        disabled={props.disabled}
      >
        {props.categories.map((item) => (
          <option key={item.category} value={item.value}>
            {item.category}
          </option>
        ))}
      </select>
    </div>
  );
}
