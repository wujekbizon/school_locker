interface TestDataInterface {
  number: number;
  question: string;
  answers: {
    option: string;
    isCorrect: boolean;
  }[];
}

export default TestDataInterface;
