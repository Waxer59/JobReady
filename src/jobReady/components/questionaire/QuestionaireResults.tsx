import AnimateIncreaseNumber, {
  ScaleOnHover
} from '../../../components/Transitions'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'

export default function QuestionaireResults() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4">
      <div className="text-6xl">
        <span className="font-light">Score:</span>{' '}
        <AnimateIncreaseNumber number={99} />
      </div>
      <hr className="w-full border-gray-500 max-w-[500px]" />
      <h3 className="text-2xl mt-3 font-semibold">What should you improve?</h3>
      <p className="max-w-xl text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, pariatur
        rem. Assumenda reprehenderit culpa, quisquam sit expedita et distinctio
        nisi voluptatum laborum pariatur, a odio error ea, quae ducimus ad.
      </p>
      <ScaleOnHover>
        <Link
          to="/"
          className="p-4 text-sm text-gray-500 bg-primary rounded-lg border-[1px] border-gray-500 transition duration-300 hover:text-white hover:bg-black flex  items-center gap-2">
          Go Home <AiOutlineHome />
        </Link>
      </ScaleOnHover>
    </div>
  )
}
