import { RingLoader } from 'react-spinners'

interface Props {
  className?: string
  text?: string
}

export default function Loading({
  className = '',
  text = 'Doing magic...'
}: Props) {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-full gap-4 ${className}`}>
      <RingLoader color="#c9c9c9" />
      <span className="text-gray-500 max-w-[15ch] text-center">{text}</span>
    </div>
  )
}
