import { createContext } from 'react'

export interface IQuestionaireContext {
  questionNumber: number
  setQuestion: (questionNumber: number) => void
  answers: {
    [key: string]: string
  }
  setAnswers: (answers: object) => void
}

export const QuestionaireContext = createContext<IQuestionaireContext>({
  questionNumber: 1,
  setQuestion: () => {},
  answers: {},
  setAnswers: () => {}
})
