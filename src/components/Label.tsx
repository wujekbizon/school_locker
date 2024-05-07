export default function Label(props: { label: string; htmlFor: string }) {
  return (
    <label
      className="pb-1 text-sm text-muted-foreground"
      htmlFor={props.htmlFor}
    >
      {props.label}
    </label>
  );
}
