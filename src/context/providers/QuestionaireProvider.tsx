import { QuestionaireContext } from '../QuestionaireContext'
import { useState } from 'react'

export default function QuestionaireProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [questionNumber, setQuestionNumber] = useState(0)
  const [answers, setAnswers] = useState({})
  const [isQuestionaireFinished, setIsQuestionaireFinished] = useState(false)
  const [isQuestionaireSelected, setIsQuestionaireSelected] = useState(false)
  const [isJobSearchSelected, setIsJobSearchSelected] = useState(false)

  return (
    <QuestionaireContext.Provider
      value={{
        questionNumber,
        setQuestionNumber,
        answers,
        setAnswers,
        isQuestionaireFinished,
        setIsQuestionaireFinished,
        isQuestionaireSelected,
        setIsQuestionaireSelected,
        isJobSearchSelected,
        setIsJobSearchSelected
      }}>
      {children}
    </QuestionaireContext.Provider>
  )
}
