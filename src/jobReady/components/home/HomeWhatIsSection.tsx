import { RoughNotation } from 'react-rough-notation'

export default function HomeWhatIsSection() {
  return (
    <section className="mt-24">
      <h3 className="text-center text-3xl font-medium">What is JobReady?</h3>
      <p className="mt-7 max-w-[800px] mx-auto leading-7">
        JobReady is a platform that helps you find your ideal job. By connecting
        you to the well-known job platform{' '}
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
          type="underline"
          color="#f44336"
          strokeWidth={1}
          show={true}
          animationDelay={500}
          animationDuration={3000}>
          simulate interviews
        </RoughNotation>{' '}
        to evaluate your preparation and ensure success in real interviews. Find
        your ideal job and get ready to stand out with JobReady.
      </p>
    </section>
  )
}
