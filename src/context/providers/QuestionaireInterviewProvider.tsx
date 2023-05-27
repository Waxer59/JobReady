import { useState } from 'react'
import { QuestionaireInterviewContext } from '../QuestionaireInterviewContext'

export default function QuestionaireInterviewProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [isInterviewFinished, setIsInterviewFinished] = useState(false)
  const [score, setScore] = useState(0)
  const [feedBack, setFeedBack] = useState('')

  return (
    <QuestionaireInterviewContext.Provider
      value={{
        isInterviewFinished,
        setIsInterviewFinished,
        score,
        setScore,
        feedBack,
        setFeedBack
      }}>
      {children}
    </QuestionaireInterviewContext.Provider>
  )
}
