"use client";

import { type ComponentRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import CloseIcon from "@/components/icons/Close";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ComponentRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="relative flex h-screen w-screen items-center justify-center rounded-md bg-black/90"
      onClose={onDismiss}
    >
      {children}
      <button onClick={onDismiss} className="absolute right-2 top-2">
        <CloseIcon />
      </button>
    </dialog>,
    document.getElementById("modal-root")!,
  );
}

// "use client";
// import { useRouter } from "next/navigation";
// import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

// export default function TestResultModal({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const router = useRouter();

//   function onDismiss() {
//     router.back();
//   }

//   return (
//     <Dialog defaultOpen={true} open={true} onOpenChange={onDismiss}>
//       <DialogOverlay className="w-full">
//         <DialogContent className="w-2/3">{children}</DialogContent>
//       </DialogOverlay>
//     </Dialog>
//   );
// }
