import { useState } from 'react'
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi'

import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2'
import useQuestionaireJobs from '../../../hooks/useQuestionaireJobs'
import { useQuestionaireInterview } from '../../../hooks/useQuestionaireInterview'

interface Props {
  img: string
  title: string
  description: string
  shortDescription: string
  offerLink: string
  minRequirements: string
}

export default function QuestionaireJob({
  img,
  title,
  description,
  shortDescription,
  offerLink,
  minRequirements
}: Props) {
  const { selectOffer } = useQuestionaireJobs()
  const [isExpanded, setIsExpanded] = useState(false)
  const { interviewSetIsLoading } = useQuestionaireInterview()

  const handleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const handleSelectOffer = () => {
    interviewSetIsLoading(true)
    selectOffer(`${description} ${minRequirements}`)
  }

  return (
    <div className="bg-white p-2 rounded-md shadow-lg flex flex-col gap-10">
      <div className="flex items-center justify-between gap-2 flex-col sm:flex-row">
        <img src={img} className="w-28 h-28 rounded" alt="job" />
        <div className="flex flex-col max-w-[300px] text-center gap-4">
          <span className="text-md sm:text-lg font-medium">{title}</span>
          <p className="text-sm sm:text-md">{shortDescription}</p>
        </div>
        <div className="flex justify-center sm:flex-col sm:gap-20 w-full sm:w-auto">
          <a
            target="_blank"
            href={offerLink}
            rel="noreferrer"
            className="hidden sm:block">
            <HiOutlineArrowTopRightOnSquare />
          </a>
          <button onClick={handleExpand} className="self-end">
            <HiOutlineChevronDown
              className={`text-xl ${isExpanded ? 'hidden' : 'block'}`}
            />
            <HiOutlineChevronUp
              className={`text-xl ${isExpanded ? 'block' : 'hidden'}`}
            />
          </button>
        </div>
      </div>
      <div className={`${isExpanded ? 'block' : 'hidden'} flex flex-col gap-4`}>
        <p className="text-sm max-w-[300px] mx-auto">{minRequirements}</p>
        <p className="text-sm max-w-[300px] mx-auto">{description}</p>
        <button
          onClick={handleSelectOffer}
          className="p-2 text-xs text-gray-500 bg-primary rounded-lg border-[1px] border-gray-500 transition duration-300 hover:text-white hover:bg-black">
          Start with this offer!
        </button>
      </div>
    </div>
  )
}
