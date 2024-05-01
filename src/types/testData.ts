interface TestDataInterface {
  question: string;
  answers: {
    option: string;
    isCorrect: boolean;
  }[];
}

export default TestDataInterface;
