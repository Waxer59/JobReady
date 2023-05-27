import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import type { InfojobsOfferResponse } from '../../../interfaces/infojobsAPIResponse'
import { infojobsGetOffers } from '../../../services/infoJobsAPI'
import { toast } from 'sonner'
import QuestionaireJob from './QuestionaireJob'

export default function QuestionaireJobSearch() {
  const [search, setSearch] = useState('')
  const [value] = useDebounce(search, 1000)
  const [offers, setOffers] = useState<InfojobsOfferResponse[]>([])

  useEffect(() => {
    async function selectOffers() {
      const offersResp = await infojobsGetOffers({ q: value })
      if (!offers) {
        toast.error('No offers found')
        return
      }
      setOffers(offersResp)
    }
    selectOffers()
  }, [value])

  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <h3 className="mt-24 text-center text-2xl">Find a job!</h3>
      <input
        type="text"
        placeholder="Frontend Developer"
        className="p-2 focus:outline-none border-[1px] rounded-md border-gray-300 w-full max-w-[650px]"
        onChange={(e) => setSearch(e.target.value)}
      />
      {value.trim() !== '' && (
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
          {offers.length === 0 && value.trim() !== '' && (
            <p className="text-center text-xl">No offers found :(</p>
          )}
        </div>
      )}
    </div>
  )
}