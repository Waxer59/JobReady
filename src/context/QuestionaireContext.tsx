import { createContext } from 'react'

export interface IQuestionaireContext {
  questionNumber: number
  setQuestionNumber: (questionNumber: number) => void
  answers: {
    [key: string]: string
  }
  setAnswers: (answers: object) => void
  isQuestionaireFinished: boolean
  setIsQuestionaireFinished: (isFinished: boolean) => void
  setIsQuestionaireSelected: (isElected: boolean) => void
  isQuestionaireSelected: boolean
  setIsJobSearchSelected: (isJoBSearchSelected: boolean) => void
  isJobSearchSelected: boolean
}

export const QuestionaireContext = createContext<IQuestionaireContext>({
  questionNumber: 0,
  setQuestionNumber: () => {},
  answers: {},
  setAnswers: () => {},
  isQuestionaireFinished: false,
  setIsQuestionaireFinished: () => {},
  setIsQuestionaireSelected: () => {},
  isQuestionaireSelected: false,
  isJobSearchSelected: false,
  setIsJobSearchSelected: () => {}
})
