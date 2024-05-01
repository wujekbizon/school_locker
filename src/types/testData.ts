interface TestDataInterface {
  question: string;
  answers: {
    option: string;
    isCorrect: boolean;
  }[];
}

export default TestDataInterface;

export interface TestsData {
  id: number;
  data: TestDataInterface;
  userId: string;
  category: string;
  createdAt: Date;
  updatedAt: Date | null;
}
