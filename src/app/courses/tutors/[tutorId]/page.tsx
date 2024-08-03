export default function TutorPage(props: { params: { tutorId: string } }) {
  const { tutorId } = props.params;
  return <h1>{tutorId}</h1>;
}
