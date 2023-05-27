import { useContext } from 'react'
import { QuestionaireJobsContext } from '../context/QuestionaireJobsContext'
import type { Offer } from '../interfaces/infojobsAPIResponse'

export default function useQuestionaireJobs() {
  const {
    setIsOfferElected,
    setOffer,
    isOfferElected,
    offer,
    offers,
    setOffers
  } = useContext(QuestionaireJobsContext)

  function selectOffer(offer: string) {
    setOffer(offer)
    setIsOfferElected(true)
  }

  function selectOffers(offers: Offer[]) {
    setOffers(offers)
  }

  return {
    selectOffer,
    selectOffers,
    isOfferElected,
    offer,
    offers
  }
}
