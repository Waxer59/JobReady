import { HiOutlinePaperAirplane } from 'react-icons/hi'

export default function QuestionaireChat() {
  return (
    <div className="overflow-auto">
      <h3 className="mt-24 text-xl font-medium text-center">Interview</h3>
      <div className="mt-10 overflow-auto h-[650px] overflow-x-hidden scroll-x- w-full flex flex-col max-w-[800px] mx-auto gap-10">
        <p className="bg-slate-200 p-2 rounded-md w-1/2">Soy ChatGPT</p>
        <p className="bg-zinc-300 p-2 rounded-md w-1/2 self-end">Soy Humano</p>
      </div>
      <div className="flex justify-between mx-auto gap-6 max-w-[800px]">
        <div className="flex items-center w-full gap-2 justify-center">
          <input
            type="text"
            className="p-2 focus:outline-none border-[1px] rounded-md border-gray-300 w-full"
            placeholder="Type your answer here..."
          />
          <button className="text-xl text-gray-400">
            <HiOutlinePaperAirplane />
          </button>
        </div>
      </div>
    </div>
  )
}
