import { useState } from 'react'
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi'

import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2'

interface Props {
  img: string
  title: string
  description: string
  shortDescription: string
  offerLink: string
}

export default function QuestionaireJob({
  img,
  title,
  description,
  shortDescription,
  offerLink
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="bg-white p-2 rounded-md mr-2 shadow-lg flex flex-col gap-10 ">
      <div className="flex items-center justify-between">
        <img src={img} className="w-28 h-28 rounded" alt="job" />
        <div className="flex flex-col max-w-[300px] text-center gap-4">
          <span className="text-lg font-medium">{title}</span>
          <p>{shortDescription}</p>
        </div>
        <div className="flex flex-col gap-20">
          <a target="_blank" href={offerLink} rel="noreferrer">
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
        <p className="text-sm max-w-[300px] mx-auto">{description}</p>
        <button className="p-2 text-xs text-gray-500 bg-primary rounded-lg border-[1px] border-gray-500 transition duration-300 hover:text-white hover:bg-black">
          Start with this offer!
        </button>
      </div>
    </div>
  )
}
