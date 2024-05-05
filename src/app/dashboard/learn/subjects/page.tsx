import SubjectsList from "@/components/SubjectsList";
import { CATEGORY_OPTIONS } from "@/constants/categoryOptions";

export default function SubjectsPage() {
  return <SubjectsList subjects={CATEGORY_OPTIONS} />;
}
