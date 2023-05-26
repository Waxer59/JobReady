import { useContext } from 'react'
import { QuestionaireJobsContext } from '../context/QuestionaireJobsContext'

export default function useQuestionaireJobs() {
  const { setIsOfferElected, setOffer, isOfferElected, offer } = useContext(
    QuestionaireJobsContext
  )

  function selectOffer(desc: string) {
    setOffer(desc)
    setIsOfferElected(true)
  }

  return {
    selectOffer,
    isOfferElected,
    offer
  }
}
