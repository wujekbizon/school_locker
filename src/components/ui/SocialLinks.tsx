import { Tutor } from "@/constants/tutorsData";
import FacebookIcon from "../icons/FacebookIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import XIcon from "../icons/XIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

export default function SocialLinks(props: { tutor: Tutor }) {
  return (
    <div className="flex flex-row justify-center gap-4 md:flex-col md:justify-evenly">
      <a
        href={props.tutor.facebook}
        target="blank"
        className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-zinc-950/60 transition-colors hover:bg-zinc-950"
      >
        <FacebookIcon />
      </a>
      <a
        href={props.tutor.linkedin}
        target="blank"
        className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-zinc-950/60 transition-colors hover:bg-zinc-950"
      >
        <LinkedInIcon />
      </a>
      <a
        href={props.tutor.twitter}
        target="blank"
        className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-zinc-950/60 transition-colors hover:bg-zinc-950"
      >
        <XIcon color="white" />
      </a>
      <a
        href={props.tutor.youtube}
        target="blank"
        className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 bg-zinc-950/60 transition-colors hover:bg-zinc-950"
      >
        <YoutubeIcon />
      </a>
    </div>
  );
}
