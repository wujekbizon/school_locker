import DisplayMotto from "@/components/DisplayMotto";
import MenuIcon from "@/components/icons/MenuIcon";

export default function DasboardNav() {
  const NEW_MOTTO = "Challenge the question, not the answer.";

  return (
    <nav className="sticky top-0 z-10 flex h-14 items-center justify-center bg-black/95 px-2 backdrop-blur supports-[backdrop-filter]:bg-black/80">
      <MenuIcon />
      <DisplayMotto text={NEW_MOTTO} />
    </nav>
  );
}
