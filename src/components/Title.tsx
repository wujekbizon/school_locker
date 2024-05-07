export default function Title(props: { title: string }) {
  return (
    <h2 className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text p-2  text-center text-2xl text-transparent  md:text-3xl">
      {props.title}
    </h2>
  );
}
