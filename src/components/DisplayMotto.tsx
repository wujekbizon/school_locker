export default function DisplayMotto(props: { text: string }) {
  return (
    <div className="items-center justify-center">
      <h1 className="md:text-md text-center text-sm  text-slate-400">
        Motto of the day:{" "}
        <span className="font-semibold text-slate-200">{props.text}</span>
      </h1>
    </div>
  );
}
