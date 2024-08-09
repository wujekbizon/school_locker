enum TutorRoles {
  WesaFounder = "Wesa Founder",
  AIEngineer = "AI Engineer",
  LeadTutor = "Lead Tutor",
}

export interface Tutor {
  readonly id: string;
  tutorName: string;
  tutorImgSrc: string;
  role: TutorRoles;
  about: string;
  students: number;
  reviews: number;
  rating: number;
}

export const tutorsData: Tutor[] = [
  {
    id: "greg-wolfinger",
    tutorName: "Greg Wolfinger",
    tutorImgSrc: "/tutor2.jpg",
    role: TutorRoles.WesaFounder,
    about: "",
    students: 19,
    reviews: 30,
    rating: 4.7,
  },
  {
    id: "core-engineer",
    tutorName: "Core",
    tutorImgSrc: "/bot.png",
    role: TutorRoles.AIEngineer,
    about: "",
    students: 49,
    reviews: 1192,
    rating: 4.8,
  },
  {
    id: "aurora-techadvisor",
    tutorName: "Aurora",
    tutorImgSrc: "/tutor.png",
    role: TutorRoles.LeadTutor,
    about: "",
    students: 129,
    reviews: 11564,
    rating: 4.9,
  },
];
