import { useRouter } from "next/navigation";
import { useGenerateTestStore } from "@/store/useGenerateTestStore";

export const useSubmitTestSuccess = () => {
  const router = useRouter();
  const { setIsTest, setNumberTests } = useGenerateTestStore();

  const resetTestAndRedirect = (redirectUrl: string) => {
    setIsTest(false);
    setNumberTests(null);
    router.push(redirectUrl);
  };

  return { resetTestAndRedirect };
};
