import AnimateIncreaseNumber, {
  ScaleOnHover
} from '../../../components/Transitions'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { useQuestionaireInterview } from '../../../hooks/useQuestionaireInterview'
import useQuestionaire from '../../../hooks/useQuestionaire'
import useQuestionaireJobs from '../../../hooks/useQuestionaireJobs'

export default function QuestionaireResults() {
  const { feedBack, score, resetQuestionaireInterview } =
    useQuestionaireInterview()

  const { resetQuestionaire } = useQuestionaire()
  const { resetQuestionaireJobs } = useQuestionaireJobs()

  function handleGoHome() {
    resetQuestionaireInterview()
    resetQuestionaire()
    resetQuestionaireJobs()
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4">
      <div className="text-4xl sm:text-6xl">
        <span className="font-light">Score:</span>{' '}
        <AnimateIncreaseNumber number={score} />
      </div>
      <hr className="w-full border-gray-500 max-w-[500px]" />
      <h3 className="text-xl sm:text-2xl mt-3 font-semibold text-center">
        What should you improve?
      </h3>
      <p className="max-w-xl text-center text-md sm:text-xl overflow-auto max-h-[500px]">
        {feedBack}
      </p>
      <ScaleOnHover>
        <Link
          to="/"
          onClick={handleGoHome}
          className="p-4 text-sm text-gray-500 bg-primary rounded-lg border-[1px] border-gray-500 transition duration-300 hover:text-white hover:bg-black flex  items-center gap-2">
          Go Home <AiOutlineHome />
        </Link>
      </ScaleOnHover>
    </div>
  )
}
