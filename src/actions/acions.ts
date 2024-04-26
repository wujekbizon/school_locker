import { toFormState } from "@/helpers/fromErrorToFormState";
import { FormState } from "@/types/actionTypes";

export async function createTest(FormState: FormState, formData: FormData) {
  console.log(formData.get("number"));

  return toFormState("SUCCESS", "Test Created");
}
