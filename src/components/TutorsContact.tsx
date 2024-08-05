import SubmitButton from "@/app/_components/SubmitButton";
import { Input } from "./ui/input";

export default function TutorsContact() {
  return (
    <div className="h-3/4 w-full bg-black">
      <div className="flex h-2/3 w-full items-end bg-zinc-800 bg-[url('/contact.jpg')] bg-cover bg-center bg-blend-color-dodge">
        <div className=" mb-[-170px] ml-auto mr-auto flex h-[350px] w-[95%] flex-col justify-between rounded-md border border-border/50 bg-zinc-950 p-8 sm:mb-[-100px] sm:w-[550px] md:ml-[20%]">
          <p className="cursor-pointer text-base text-zinc-400 underline hover:text-amber-400">
            Call Us: <a href="callto:800123456">800-123-4567</a>
          </p>
          <h2 className="text-4xl font-semibold text-zinc-200">
            Do You Need Help?
          </h2>
          <p className="text-base text-zinc-500">
            Submit your email and we'll find the perfect tutor for you.
          </p>
          <form className="flex w-full flex-col gap-6" action="">
            <Input type="text" placeholder="Enter Your Email" />
            <SubmitButton label="Send" loading="Sending..." />
          </form>
        </div>
      </div>
    </div>
  );
}
