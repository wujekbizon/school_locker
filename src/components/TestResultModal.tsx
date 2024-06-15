"use client";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogOverlay } from "./ui/dialog";

export default function TestResultModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  function onDismiss() {
    router.back();
  }

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={onDismiss}>
      <DialogOverlay>
        <DialogContent className="overflow-y-hidden">{children}</DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
