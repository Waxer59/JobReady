import { RingLoader } from 'react-spinners'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4">
      <RingLoader color="#c9c9c9" />
      <span className="text-gray-500 max-w-[15ch] text-center">
        Doing magic...
      </span>
    </div>
  )
}
