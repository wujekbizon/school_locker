export default function DisplayMotto(props: { text: string }) {
  return (
    <div className="hidden items-center justify-center sm:flex">
      <h1 className="text-md  text-slate-600">
        Motto of the day:{" "}
        <span className="font-bold text-slate-400">{props.text}</span>
      </h1>
    </div>
  );
}
