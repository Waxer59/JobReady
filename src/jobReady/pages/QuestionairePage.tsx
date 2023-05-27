import { useEffect, useState } from 'react'
import { FadeIn } from '../../components/Transitions'
import useQuestionaire from '../../hooks/useQuestionaire'
import useQuestionaireJobs from '../../hooks/useQuestionaireJobs'
import QuestionaireChat from '../components/questionaire/QuestionaireChat'
import QuestionaireJobs from '../components/questionaire/QuestionaireJobs'
import { infojobsGetOffers } from '../../services/infoJobsAPI'
import QuestionaireQuestion from '../components/questionaire/QuestionaireQuestion'
import QuestionaireElection from '../components/questionaire/QuestionaireElection'
import { toast } from 'sonner'
import QuestionaireJobSearch from '../components/questionaire/QuestionaireJobSearch'
import type { InfojobsOfferResponse } from '../../interfaces/infojobsAPIResponse'

export default function QuestionairePage() {
  const [offers, setOffers] = useState<InfojobsOfferResponse[]>([])
  const {
    isQuestionaireFinished,
    isQuestionaireSelected,
    isJobSearchSelected
  } = useQuestionaire()
  const { isOfferElected } = useQuestionaireJobs()

  useEffect(() => {
    async function selectOffers() {
      const offersResp = await infojobsGetOffers({ q: 'frontend developer' })
      if (!offers) {
        toast.error('No offers found')
        return
      }
      setOffers(offersResp)
    }
    if (isQuestionaireFinished) {
      selectOffers()
    }
  }, [isQuestionaireFinished])

  return (
    <>
      <FadeIn className="h-full">
        {!isQuestionaireSelected && !isJobSearchSelected && (
          <QuestionaireElection />
        )}
        {isJobSearchSelected && !isOfferElected && <QuestionaireJobSearch />}
        {isQuestionaireSelected && !isQuestionaireFinished && (
          <QuestionaireQuestion />
        )}
        {isQuestionaireFinished && !isOfferElected && (
          <QuestionaireJobs offers={offers} />
        )}
        {isOfferElected && <QuestionaireChat />}
      </FadeIn>
    </>
  )
}
