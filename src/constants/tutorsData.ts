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
}

export const tutorsData: Tutor[] = [
  {
    id: "greg1",
    tutorName: "Mr Greg",
    tutorImgSrc: "/tutor2.jpg",
    role: TutorRoles.WesaFounder,
    about: "",
  },
  {
    id: "core2",
    tutorName: "Core",
    tutorImgSrc: "/bot.png",
    role: TutorRoles.AIEngineer,
    about: "",
  },
  {
    id: "aurora3",
    tutorName: "Aurora",
    tutorImgSrc: "/tutor.png",
    role: TutorRoles.LeadTutor,
    about: "",
  },
];
