import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { ScaleOnHover } from '../../../components/Transitions'
import useQuestionaire from '../../../hooks/useQuestionaire'
import { QUESTIONS } from '../../data/questionsData'
import { useState } from 'react'
import { toast } from 'sonner'

export default function QuestionaireQuestion() {
  const {
    questionNumber,
    nextQuestion,
    prevQuestion,
    answerQuestion,
    answers
  } = useQuestionaire()
  const [currentAnswer, setCurrentAnswer] = useState<string>('')

  const handleFinish = () => {
    if (!AreAllAwnsersFilled() || currentAnswer === '') {
      toast.error('Please fill all the questions')
      // return
    }
    // ...
  }

  const handleNextQuestion = () => {
    answerQuestion(currentAnswer, questionNumber)
    nextQuestion()
    setCurrentAnswer(answers[questionNumber + 1] ?? '')
  }

  const handlePrevQuestion = () => {
    answerQuestion(currentAnswer, questionNumber)
    prevQuestion()
    setCurrentAnswer(answers[questionNumber - 1])
  }

  const AreAllAwnsersFilled = (): boolean => {
    for (const answer of Object.values(answers)) {
      if (answer === '') {
        return false
      }
    }
    return true
  }

  return (
    <div className="flex items-center justify-center relative h-full">
      {questionNumber > 0 && (
        <ScaleOnHover>
          <button
            className="flex flex-col items-center justify-center gap-2 cursor-pointer"
            onClick={handlePrevQuestion}>
            <AiOutlineLeft className="text-xl sm:text-4xl text-gray-500" />
            <span className="text-gray-500">Previous</span>
          </button>
        </ScaleOnHover>
      )}

      <div className="flex flex-col items-center justify-center gap-10 w-full">
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-gray-500">
            {questionNumber + 1} of {QUESTIONS.length}
          </span>
          <h3 className="text-center text-sm sm:text-xl font-medium max-w-lg">
            {QUESTIONS[questionNumber]?.question}
          </h3>
        </div>
        <textarea
          className="border-[1px] border-gray-500 rounded focus:outline-none p-2 w-3/4 min-h-[250px] resize-none"
          placeholder={QUESTIONS[questionNumber]?.exampleAnswer}
          value={currentAnswer}
          onChange={(e) => {
            setCurrentAnswer(e.target.value)
          }}></textarea>
        {questionNumber + 1 === QUESTIONS.length && (
          <ScaleOnHover>
            <button
              className="px-6 sm:px-12 py-4 text-sm text-gray-500 bg-primary rounded-lg border-[1px] border-gray-500 transition duration-300 hover:text-white hover:bg-black"
              onClick={handleFinish}>
              Finish!
            </button>
          </ScaleOnHover>
        )}
      </div>

      {questionNumber + 1 < QUESTIONS.length && (
        <ScaleOnHover>
          <button
            className="flex flex-col items-center justify-center gap-2 cursor-pointer"
            onClick={handleNextQuestion}>
            <AiOutlineRight className="text-xl sm:text-4xl text-gray-500" />
            <span className="text-gray-500">Next</span>
          </button>
        </ScaleOnHover>
      )}
    </div>
  )
}
