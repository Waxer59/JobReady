import useQuestionaireJobs from '../../../hooks/useQuestionaireJobs'
import QuestionaireJob from './QuestionaireJob'

export default function QuestionaireJobs() {
  const { offers } = useQuestionaireJobs()
  return (
    <div className="mt-12 flex flex-col items-center gap-10">
      <h3 className="text-center text-sm sm:text-xl font-medium">Jobs found</h3>
      <div className="flex flex-col justify-center gap-6">
        {offers.map((offer) => (
          <QuestionaireJob
            title={offer.title}
            description={offer.description}
            minRequirements={offer.minRequirements}
            shortDescription={offer.category.value}
            img={offer.profile.logoUrl ?? '/pic-company-logo.png'}
            offerLink={offer.link}
            key={offer.id}
          />
        ))}
      </div>
    </div>
  )
}
