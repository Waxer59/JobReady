import { RoughNotation } from 'react-rough-notation'
import {
  AnswerIcon,
  FindIcon,
  GetIcon,
  JobInterviewIcon
} from './components/Icons'
import { motion } from 'framer-motion'
import PoweredByInfoJobs from './components/PoweredByInfoJobs'
import { FaGithub } from 'react-icons/fa'
import { FadeInWhenVisible } from './components/Transitions'

export default function App() {
  return (
    <>
      <PoweredByInfoJobs />
      <header className="mt-16 flex gap-6 justify-evenly items-center">
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
        <JobInterviewIcon />
      </header>
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-b border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-primary px-4">
            <motion.button
              className="p-4 text-sm text-gray-500 bg-primary rounded-lg border-[1px] border-gray-500 transition duration-300 hover:text-white hover:bg-black"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: 'tween',
                delay: 0
              }}>
              Let's begin!
            </motion.button>
          </div>
        </div>
      </div>
      <section className="mt-24">
        <h3 className="text-center text-3xl font-medium">What is JobReady?</h3>
        <p className="mt-7 max-w-[800px] mx-auto leading-7">
          JobReady is a platform that helps you find your ideal job. By
          connecting you to the well-known job platform{' '}
          <RoughNotation
            type="circle"
            color="#167DB7"
            strokeWidth={1}
            show={true}
            animationDelay={500}>
            InfoJobs
          </RoughNotation>{' '}
          , you can discover a wide variety of job offers. In addition, JobReady
          offers you the possibility to{' '}
          <RoughNotation
            type="highlight"
            color="#ffd54f"
            strokeWidth={1}
            show={true}
            animationDelay={500}
            animationDuration={3000}>
            simulate interviews to evaluate your preparation and ensure success
            in real interviews.
          </RoughNotation>{' '}
          Find your ideal job and get ready to stand out with JobReady.
        </p>
      </section>
      <section className="mt-24">
        <h3 className="text-center text-3xl font-medium">
          How is the process?
        </h3>
        <ul className="flex justify-evenly mt-8 items-center">
          <li className="flex flex-col gap-3 items-center">
            <h4 className="text-center text-xl font-medium">Find</h4>
            <p className="text-center max-w-sm">Find your perfect job</p>
            <FadeInWhenVisible>
              <FindIcon />
            </FadeInWhenVisible>
          </li>
          <li className="flex flex-col gap-3 items-center">
            <h4 className="text-center text-xl font-medium">Answer</h4>
            <p className="text-center max-w-sm">
              Prepare for the job interview by simulating a job interview
            </p>
            <FadeInWhenVisible>
              <AnswerIcon />
            </FadeInWhenVisible>
          </li>
          <li className="flex flex-col gap-3 items-center">
            <h4 className="text-center text-xl font-medium">Get</h4>
            <p className="text-center max-w-sm">
              Getting through the job interview
            </p>
            <FadeInWhenVisible>
              <GetIcon />
            </FadeInWhenVisible>
          </li>
        </ul>
      </section>
      <footer className="mt-16 text-md flex justify-center items-center gap-2 p-4">
        Made By{' '}
        <a href="https://github.com/Waxer59" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </footer>
    </>
  )
}
