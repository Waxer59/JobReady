import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import type { InfojobsOfferResponse } from '../../../interfaces/infojobsAPIResponse'
import { infojobsGetOffers } from '../../../services/infoJobsAPI'
import { toast } from 'sonner'
import QuestionaireJob from './QuestionaireJob'
import Loading from '../../../components/Loading'

export default function QuestionaireJobSearch() {
  const [search, setSearch] = useState('')
  const [value] = useDebounce(search, 1000)
  const [isLoading, setIsLoading] = useState(false)
  const [offers, setOffers] = useState<InfojobsOfferResponse[]>([])
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (search) {
      setIsLoading(true)
      setOffers([])
    } else {
      setIsLoading(false)
    }
  }, [search])

  useEffect(() => {
    async function selectOffers() {
      if (value.trim() === '') {
        setOffers([])
        return
      }
      const offersResp = await infojobsGetOffers({ q: value })
      if (offersResp.length <= 0) {
        toast.error('No offers found')
        setIsError(true)
        return
      }
      setOffers(offersResp)
      setIsLoading(false)
    }
    setIsError(false)
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
      {isLoading && <Loading text="Searching..." className="mt-24" />}
      {value.trim() !== '' && (
        <div className="flex flex-col justify-center gap-6 pb-6">
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
          {isError && <p className="text-center text-xl">No offers found :(</p>}
        </div>
      )}
    </div>
  )
}
