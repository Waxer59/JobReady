import { useContext } from 'react'
import { QuestionaireContext } from '../context/QuestionaireContext'
import { QUESTIONS } from '../jobReady/data/questionsData'

export default function useQuestionaire() {
  const {
    questionNumber,
    setQuestionNumber,
    answers,
    setAnswers,
    isQuestionaireFinished,
    setIsQuestionaireFinished
  } = useContext(QuestionaireContext)

  function nextQuestion() {
    if (questionNumber + 1 > QUESTIONS.length) {
      return
    }
    setQuestionNumber(questionNumber + 1)
  }

  function prevQuestion() {
    if (questionNumber - 1 < 0) {
      return
    }
    setQuestionNumber(questionNumber - 1)
  }

  function answerQuestion(answer: string, questionNumber: number) {
    setAnswers({
      ...answers,
      [questionNumber]: answer
    })
  }

  function finishQuestionaire() {
    setIsQuestionaireFinished(true)
  }

  return {
    nextQuestion,
    prevQuestion,
    answerQuestion,
    finishQuestionaire,
    questionNumber,
    answers,
    isQuestionaireFinished
  }
}
