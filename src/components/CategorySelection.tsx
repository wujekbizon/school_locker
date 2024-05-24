import { useTestFormState } from "@/store/useTestFormStore";
import Select from "./Select";
import SwitchLeftIcon from "./icons/SwitchLeftIcon";
import SwitchRightIcon from "./icons/SwitchRightIcon";
import Label from "./Label";
import { Input } from "./ui/input";
import { Categories } from "@/types/categoriesType";

export default function CategorySelection(props: { categories: Categories[] }) {
  const { selectionMethod, setSelectionMethod } = useTestFormState();
  return (
    <div className="flex w-full items-end gap-6">
      {selectionMethod === "existingCategory" ? (
        <Select categories={props.categories} label="Select a category: " />
      ) : (
        <div className="flex w-full flex-col">
          <Label label="Add new category:" htmlFor="addCategory" />
          <Input
            type="text"
            id="addCategory"
            name="newCategory"
            className="h-10 p-1 text-sm"
          />
        </div>
      )}

      {selectionMethod === "existingCategory" ? (
        <SwitchLeftIcon onClick={() => setSelectionMethod("newCategory")} />
      ) : (
        <SwitchRightIcon
          onClick={() => setSelectionMethod("existingCategory")}
        />
      )}
    </div>
  );
}
