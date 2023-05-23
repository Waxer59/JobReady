import { FindIcon, AnswerIcon, GetIcon } from '../../../components/Icons'
import { FadeInWhenVisible } from '../../../components/Transitions'

export default function HomeHowIsTheProcessSection() {
  return (
    <section className="mt-24">
      <h3 className="text-center text-3xl font-medium">How is the process?</h3>
      <ul className="flex justify-evenly mt-8 items-center lg:flex-row flex-col gap-8">
        <li className="flex flex-col gap-3 items-center">
          <h4 className="text-center text-xl font-medium">Find</h4>
          <p className="text-center max-w-sm">Find your perfect job</p>
          <FadeInWhenVisible>
            <FindIcon className="drop-shadow-md" />
          </FadeInWhenVisible>
        </li>
        <li className="flex flex-col gap-3 items-center">
          <h4 className="text-center text-xl font-medium">Answer</h4>
          <p className="text-center max-w-sm">
            Prepare for the job interview by simulating a job interview
          </p>
          <FadeInWhenVisible>
            <AnswerIcon className="drop-shadow-md" />
          </FadeInWhenVisible>
        </li>
        <li className="flex flex-col gap-3 items-center">
          <h4 className="text-center text-xl font-medium">Get</h4>
          <p className="text-center max-w-sm">
            Getting through the job interview
          </p>
          <FadeInWhenVisible>
            <GetIcon className="drop-shadow-md" />
          </FadeInWhenVisible>
        </li>
      </ul>
    </section>
  )
}
