import { RoughNotation } from 'react-rough-notation'
import { JobInterviewIcon } from '../../../components/Icons'

export default function HomeHeader() {
  return (
    <header className="mt-16 mb-16 lg:mb-0 flex gap-6 justify-evenly items-center lg:flex-row flex-col">
      <div className="flex flex-col gap-7">
        <h1 className="text-7xl text-center font-medium">Job Ready</h1>
        <h2 className="text-3xl text-center font-medium">
          <RoughNotation
            type="highlight"
            color="#ffd54f"
            show={true}
            animationDelay={500}>
            Ready
          </RoughNotation>{' '}
          for your job interview?
        </h2>
      </div>
      <JobInterviewIcon className="drop-shadow-md hidden lg:block" />
    </header>
  )
}
