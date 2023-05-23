import { QuestionaireContext } from './QuestionaireContext'
import { useState } from 'react'

export default function QuestionaireProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [questionNumber, setQuestion] = useState(1)
  const [answers, setAnswers] = useState({})

  return (
    <QuestionaireContext.Provider
      value={{ questionNumber, setQuestion, answers, setAnswers }}>
      {children}
    </QuestionaireContext.Provider>
  )
}
