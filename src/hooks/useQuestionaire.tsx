import { useContext } from 'react'
import { QuestionaireContext } from '../context/QuestionaireContext'
import { QUESTIONS } from '../jobReady/data/questionsData'

export default function useQuestionaire() {
  const { questionNumber, setQuestion, answers, setAnswers } =
    useContext(QuestionaireContext)

  function nextQuestion() {
    if (questionNumber + 1 > Object.keys(QUESTIONS).length) {
      return
    }
    setQuestion(questionNumber + 1)
  }

  function prevQuestion() {
    if (questionNumber - 1 < 1) {
      return
    }
    setQuestion(questionNumber - 1)
  }

  function answerQuestion(answer: string, questionNumber: number) {
    setAnswers({
      ...answers,
      [questionNumber]: answer
    })
  }

  return {
    nextQuestion,
    prevQuestion,
    answerQuestion,
    questionNumber,
    answers
  }
}
