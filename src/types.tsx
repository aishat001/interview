export enum Title {
    Basic = "basic",
    Intermediate = "intermediate",
    Advanced = "Advance"
  }

export interface Interview {
    name: string;
    title: string;
    totalScore: number;
    questions: string[];
}

export interface CandidateDetails {
  name: string;
  role: string;
}
export interface QuestionAndAnswer extends Interview {
  question: string;
  answer: string;
  score: number
}


