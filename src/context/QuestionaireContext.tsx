import { createContext } from 'react'

export interface IQuestionaireContext {
  questionNumber: number
  setQuestionNumber: (questionNumber: number) => void
  answers: {
    [key: string]: string
  }
  setAnswers: (answers: object) => void
}

export const QuestionaireContext = createContext<IQuestionaireContext>({
  questionNumber: 0,
  setQuestionNumber: () => {},
  answers: {},
  setAnswers: () => {}
})
