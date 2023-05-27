import { useContext } from 'react'
import { QuestionaireJobsContext } from '../context/QuestionaireJobsContext'

export default function useQuestionaireJobs() {
  const { setIsOfferElected, setOffer, isOfferElected, offer } = useContext(
    QuestionaireJobsContext
  )

  function selectOffer(offer: string) {
    setOffer(offer)
    setIsOfferElected(true)
  }

  return {
    selectOffer,
    isOfferElected,
    offer
  }
}
