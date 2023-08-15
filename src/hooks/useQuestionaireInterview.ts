import { useContext } from 'react'
import { QuestionaireInterviewContext } from '../context/QuestionaireInterviewContext'

export const useQuestionaireInterview = () => {
  const {
    feedBack,
    isInterviewFinished,
    score,
    setFeedBack,
    setIsInterviewFinished,
    setScore,
    isInterviewLoading,
    setIsInterviewLoading,
    interviewAnswers,
    setInterviewAnswers
  } = useContext(QuestionaireInterviewContext)

  function setFeedBackAndScore(feedBack: string, score: number) {
    setFeedBack(feedBack)
    setScore(score)
  }

  function finishInterview() {
    setIsInterviewFinished(true)
  }

  function interviewSetIsLoading(bool: boolean) {
    setIsInterviewLoading(bool)
  }

  function resetQuestionaireInterview() {
    setFeedBack('')
    setIsInterviewFinished(false)
    setScore(0)
    setIsInterviewLoading(false)
    setInterviewAnswers([])
  }

  function addInterviewAnswer(answer: string) {
    setInterviewAnswers([...interviewAnswers, answer])
  }

  return {
    feedBack,
    isInterviewFinished,
    score,
    isInterviewLoading,
    finishInterview,
    setFeedBackAndScore,
    resetQuestionaireInterview,
    interviewSetIsLoading,
    interviewAnswers,
    addInterviewAnswer
  }
}
