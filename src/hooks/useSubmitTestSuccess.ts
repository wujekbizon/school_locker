import { useRouter } from "next/navigation";
import { useGenerateTestStore } from "@/store/useGenerateTestStore";

export const useSubmitTestSuccess = () => {
  const router = useRouter();
  const { setIsTest, setNumberTests } = useGenerateTestStore();

  const resetTestAndRedirect = (redirectUrl: string) => {
    setNumberTests(null);
    setIsTest(false);
    router.replace(redirectUrl);
  };

  return { resetTestAndRedirect };
};
