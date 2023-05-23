import { QuestionaireContext } from './QuestionaireContext'
import { useState } from 'react'

export default function QuestionaireProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [questionNumber, setQuestionNumber] = useState(0)
  const [answers, setAnswers] = useState({})

  return (
    <QuestionaireContext.Provider
      value={{ questionNumber, setQuestionNumber, answers, setAnswers }}>
      {children}
    </QuestionaireContext.Provider>
  )
}
