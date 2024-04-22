import DisplayMotto from "@/components/DisplayMotto";
import MenuIcon from "@/components/icons/MenuIcon";

export default function DasboardNav() {
  const NEW_MOTTO = "Challenge the question, not the answer.";

  return (
    <nav className="relative flex h-14 items-center justify-center px-2">
      <MenuIcon />
      <DisplayMotto text={NEW_MOTTO} />
    </nav>
  );
}
