import useQuestionaire from '../../../hooks/useQuestionaire'

export default function QuestionaireElection() {
  const { selectQuestionaire, selectJobSearch } = useQuestionaire()

  function handleTakeQuestionaire() {
    selectQuestionaire()
  }

  function handleJobSearch() {
    selectJobSearch()
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-8 h-full">
      <h4 className="text-center text-2xl">What do you want to do?</h4>
      <div className="flex flex-col justify-center">
        <button
          className="p-4 text-sm text-gray-500 bg-primary rounded-lg border-[1px] border-gray-500 transition duration-300 hover:text-white hover:bg-black"
          onClick={handleTakeQuestionaire}>
          Take questionaire
        </button>
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-b border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-primary px-4">or</div>
          </div>
        </div>
        <button
          className="p-4 text-sm text-gray-500 bg-primary rounded-lg border-[1px] border-gray-500 transition duration-300 hover:text-white hover:bg-black"
          onClick={handleJobSearch}>
          Search for a job directly
        </button>
      </div>
    </div>
  )
}
