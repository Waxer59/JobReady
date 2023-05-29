import { createContext } from 'react'

export interface IQuestionaireInterviewContext {
  isInterviewFinished: boolean
  setIsInterviewFinished: (isFinished: boolean) => void
  score: number
  setScore: (score: number) => void
  feedBack: string
  setFeedBack: (feedBack: string) => void
  isInterviewLoading: boolean
  setIsInterviewLoading: (isInterviewLoading: boolean) => void
  interviewAnswers: any[]
  setInterviewAnswers: (interviewAnswers: any) => void
}

export const QuestionaireInterviewContext =
  createContext<IQuestionaireInterviewContext>({
    isInterviewFinished: false,
    setIsInterviewFinished: () => {},
    score: 0,
    setScore: () => {},
    feedBack: '',
    setFeedBack: () => {},
    isInterviewLoading: false,
    setIsInterviewLoading: () => {},
    interviewAnswers: [],
    setInterviewAnswers: () => {}
  })
