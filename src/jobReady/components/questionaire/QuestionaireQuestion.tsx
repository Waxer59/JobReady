import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { ScaleOnHover } from '../../../components/Transitions'

interface Props {
  question: string
  hasNext: boolean
  hasPrev: boolean
  exampleAnswer: string
}

export default function QuestionaireQuestion({
  question,
  hasNext,
  hasPrev,
  exampleAnswer
}: Props) {
  return (
    <div className="mt-80 flex items-center justify-center gap-28">
      {hasPrev && (
        <ScaleOnHover className="flex flex-col items-center justify-center gap-2 cursor-pointer">
          <AiOutlineLeft className="text-4xl text-gray-500" />
          <span className="text-gray-500">Previous</span>
        </ScaleOnHover>
      )}

      <div className="flex flex-col items-center justify-center gap-10">
        <h3 className="text-center text-4xl font-medium">{question}</h3>
        <input
          type="text"
          className="border-[1px] border-gray-500 rounded focus:outline-none w-full p-2"
          placeholder={exampleAnswer}
        />
        <ScaleOnHover>
          <button className="px-12 py-4 text-sm text-gray-500 bg-primary rounded-lg border-[1px] border-gray-500 transition duration-300 hover:text-white hover:bg-black">
            Send
          </button>
        </ScaleOnHover>
      </div>

      {hasNext && (
        <ScaleOnHover className="flex flex-col items-center justify-center gap-2 cursor-pointer">
          <AiOutlineRight className="text-4xl text-gray-500" />
          <span className="text-gray-500">Next</span>
        </ScaleOnHover>
      )}
    </div>
  )
}
