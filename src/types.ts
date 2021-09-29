export enum Title {
  Basic = "basic",
  Intermediate = "intermediate",
  Advanced = "advance"
}
export interface Section {
section: any
title: Title;
questions: string[];
}

export interface Interview {
  id: string;
  name: string;
  totalScore: number;
}
export interface Id {
  id: string;
}
export interface SectionInterview extends Interview {
find(arg0: (interview: any) => boolean)
map(arg0: (i: any) => any): import("react").ReactNode
section: Section[];
}

export interface MatchParams {
  id: string;
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

export type NewInterview = Omit<SectionInterview, 'id'>
export type GetJustInterviewDetails = Omit<SectionInterview, 'section'>
export type CreatedInterview = Omit<SectionInterview, 'totalScore'>