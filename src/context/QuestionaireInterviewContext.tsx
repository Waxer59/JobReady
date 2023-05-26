import { createContext } from 'react'

export interface IQuestionaireInterviewContext {
  isInterviewFinished: boolean
  setIsInterviewFinished: (isFinished: boolean) => void
  score: number
  setScore: (score: number) => void
  feedBack: string
  setFeedBack: (feedBack: string) => void
}

export const QuestionaireInterviewContext =
  createContext<IQuestionaireInterviewContext>({
    isInterviewFinished: false,
    setIsInterviewFinished: (isFinished: boolean) => {},
    score: 0,
    setScore: (score: number) => {},
    feedBack: '',
    setFeedBack: (feedBack: string) => {}
  })
