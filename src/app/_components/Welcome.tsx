import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-10 bg-black p-12">
      <div className="flex w-full justify-start">
        <h1 className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text p-2 text-center text-3xl text-transparent  md:text-5xl">
          Learning shouldn&apos;t be a
          <span className="text-amber-500"> drag!</span>
        </h1>
      </div>

      <div className="flex w-full justify-center py-4">
        <Image
          className="w-72 rounded-2xl border border-border/40 object-contain"
          src="/OIG2_NB.png"
          alt="fun-learn"
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="flex w-full justify-end">
        <h1 className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text p-2  text-center text-3xl text-transparent  md:text-5xl">
          make studying fun with <span className="text-amber-500"> us!</span>
        </h1>
      </div>
      <article className=" max-w-screen-lg">
        <p className="pb-8 text-center text-xl text-gray-500">
          Ready to level up your learning? Create engaging tests, access digital
          learning resources, and track your progress. Sign up for free today
          and experience a smarter way to learn!
        </p>
      </article>

      <Link
        href="/sign-up"
        className="rounded bg-zinc-800 px-4 py-2 text-xl font-semibold hover:bg-amber-500 hover:text-zinc-950"
      >
        Sign up today!
      </Link>
    </section>
  );
}
