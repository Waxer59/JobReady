import { useState } from 'react'
import { QuestionaireJobsContext } from './QuestionaireJobsContext'
import type { InfojobsOfferResponse } from '../interfaces/infojobsAPIResponse'

export default function QuestionaireJobsProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [offers, setOffers] = useState<InfojobsOfferResponse[]>([])
  const [offer, setOffer] = useState('')
  const [isOfferElected, setIsOfferElected] = useState(false)
  return (
    <QuestionaireJobsContext.Provider
      value={{
        offer,
        setOffer,
        isOfferElected,
        setIsOfferElected,
        offers,
        setOffers
      }}>
      {children}
    </QuestionaireJobsContext.Provider>
  )
}
