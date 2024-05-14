import SubjectCard from "./SubjectCard";

interface SubjectsListProps {
  subjects: { category: string; value: string }[];
}

export default async function SubjectsList({ subjects }: SubjectsListProps) {
  return (
    <div className={`grid auto-rows-max gap-4 p-4 md:gap-8 lg:col-span-4`}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {subjects.slice(1).map((item) => {
          return <SubjectCard key={item.category} item={item} />;
        })}
      </div>
    </div>
  );
}
