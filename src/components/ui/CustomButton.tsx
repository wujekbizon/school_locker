export default function CustomButton(props: { children: React.ReactNode }) {
  return (
    <button className="rounded bg-gradient-to-r from-gray-600 to-gray-800 px-4 py-2 text-center text-white hover:from-gray-600 hover:to-gray-400">
      {props.children}
    </button>
  );
}