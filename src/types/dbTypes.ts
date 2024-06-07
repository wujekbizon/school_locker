export interface UserData {
  userId: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProgress {
  id: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date | null;
  userLevel: { level: number; neededExp: number; currentExp: number };
  userExperience: number;
  totalCreatedTests: [];
  totalCompletedTests: [];
  lastTestId: number | null;
  badges: string[];
}
