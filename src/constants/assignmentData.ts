enum AssingmentDataStatus {
  Pending = "In Pending",
  Progress = "In Progress",
  Completed = "Completed",
}

export interface AssingmentData {
  readonly id: string;
  // readonly userId: string | undefined;
  title: string;
  status: AssingmentDataStatus;
  imageUrl: string;
  // description?: string;
  dueDate: Date;
  // content?: ADD LATER OPTIONAL JSON
  // submissionGuidelines?: string;
}

export const assignmentsData: AssingmentData[] = [
  {
    id: "1",
    title: "Math Study",
    imageUrl: "/math.jpg",
    status: AssingmentDataStatus.Pending,
    dueDate: new Date("August 9, 2024 12:45"),
  },
  {
    id: "2",
    title: "Science Study",
    imageUrl: "/plans.png",
    status: AssingmentDataStatus.Completed,
    dueDate: new Date("August 29, 2024 9:15"),
  },
  {
    id: "3",
    title: "Case Study",
    imageUrl: "/image.png",
    status: AssingmentDataStatus.Progress,
    dueDate: new Date("January 21, 2025 9:00"),
  },
];
