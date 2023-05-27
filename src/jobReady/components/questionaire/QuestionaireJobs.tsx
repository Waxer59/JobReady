import QuestionaireJob from './QuestionaireJob'
import { type InfojobsOfferResponse } from '../../../interfaces/infojobsAPIResponse'

interface Props {
  offers: InfojobsOfferResponse[]
}

export default function QuestionaireJobs({ offers }: Props) {
  return (
    <div className="mt-12 flex flex-col items-center gap-10">
      <h3 className="text-center text-sm sm:text-xl font-medium">Jobs found</h3>
      <div className="flex flex-col justify-center gap-6 pb-12">
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
