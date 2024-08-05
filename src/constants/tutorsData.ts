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
}

export const tutorsData: Tutor[] = [
  {
    id: "greg1",
    tutorName: "Greg",
    tutorImgSrc: "/tutor2.jpg",
    role: TutorRoles.WesaFounder,
  },
  {
    id: "core2",
    tutorName: "Core",
    tutorImgSrc: "/bot.png",
    role: TutorRoles.AIEngineer,
  },
  {
    id: "aurora3",
    tutorName: "Aurora",
    tutorImgSrc: "/tutor.png",
    role: TutorRoles.LeadTutor,
  },
];
