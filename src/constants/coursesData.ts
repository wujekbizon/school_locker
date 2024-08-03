export interface CourseData {
  readonly id: string;
  courseTitle: string;
  imageSrc: string;
  duration: number;
  progress: number;
}

export const coursesData: CourseData[] = [
  {
    id: "1",
    courseTitle: "Web Designing",
    imageSrc: "/image.png",
    duration: 6,
    progress: 100,
  },
  {
    id: "",
    courseTitle: "UI/UX Developer",
    imageSrc: "/image2.jpg",
    duration: 6,
    progress: 80,
  },
];
