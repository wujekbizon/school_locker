interface TestDataInterface {
  question: string;
  answers: {
    option: string;
    isCorrect: boolean;
  }[];
}

export default TestDataInterface;

export interface AvailableOption {
  option: string;
  isCorrect: boolean;
}

export interface TestsData {
  id: number;
  data: TestDataInterface;
  userId: string;
  category: string;
  createdAt: Date;
  updatedAt: Date | null;
}
