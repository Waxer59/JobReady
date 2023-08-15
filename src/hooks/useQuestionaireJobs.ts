import { useContext } from 'react'
import { QuestionaireJobsContext } from '../context/QuestionaireJobsContext'

export default function useQuestionaireJobs() {
  const {
    setIsOfferElected,
    setOffer,
    isOfferElected,
    offer,
    isJobsLoading,
    setIsLoading
  } = useContext(QuestionaireJobsContext)

  function jobsSetIsLoading(bool: boolean) {
    setIsLoading(bool)
  }

  function selectOffer(offer: string) {
    setOffer(offer)
    setIsOfferElected(true)
  }

  function resetQuestionaireJobs() {
    setIsOfferElected(false)
    setOffer('')
    setIsLoading(false)
  }

  return {
    selectOffer,
    isOfferElected,
    jobsSetIsLoading,
    isJobsLoading,
    offer,
    resetQuestionaireJobs
  }
}
