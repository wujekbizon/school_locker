import { useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import { FormState } from "@/types/actionTypes";

/**
 * Custom hook to display toast messages based on form state changes.
 *
 * This hook utilizes `react-hot-toast` to display toast notifications
 * based on the provided form state. It prevents displaying duplicate messages
 * for the same error or success by tracking timestamps.
 *
 * @param {FormState} formState - The current form state object containing
 * information like status and message.
 * @returns {JSX.Element} - A React element for displaying fallback messages
 * in case JavaScript is disabled.
 */
const useToastMessage = (formState: FormState) => {
  const prevTimestamp = useRef(formState.timestamp); // Reference to store previous timestamp

  // Flag to determine if a toast should be shown
  const showToast =
    formState.message && formState.timestamp !== prevTimestamp.current;

  useEffect(() => {
    if (showToast) {
      // Show toast based on form state status
      if (formState.status === "ERROR") {
        toast.error(formState.message);
      }

      if (formState.status === "SUCCESS") {
        toast.success(formState.message);
      }

      // Update reference to prevent duplicate messages
      prevTimestamp.current = formState.timestamp;
    }
  }, [formState, showToast]); // Re-run on changes to formState or showToast

  // Fallback for non-JavaScript environments
  return (
    <noscript>
      {formState.status === "ERROR" && (
        <div style={{ color: "red" }}>{formState.message}</div>
      )}

      {formState.status === "SUCCESS" && (
        <div style={{ color: "green" }}>{formState.message}</div>
      )}
    </noscript>
  );
};

export { useToastMessage };
