import { Link } from 'react-router-dom'
import { ScaleOnHover } from '../../../components/Transitions'

export default function HomeDividerSection() {
  return (
    <div className="relative py-4">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-b border-gray-300"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="bg-primary px-4">
          <ScaleOnHover>
            <Link
              to={'/questionaire'}
              className="p-4 text-sm text-gray-500 bg-primary rounded-lg border-[1px] border-gray-500 transition duration-300 hover:text-white hover:bg-black">
              Let's begin!
            </Link>
          </ScaleOnHover>
        </div>
      </div>
    </div>
  )
}
