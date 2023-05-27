import { useEffect } from 'react'
import { FadeIn } from '../../components/Transitions'
import useQuestionaire from '../../hooks/useQuestionaire'
import useQuestionaireJobs from '../../hooks/useQuestionaireJobs'
import QuestionaireChat from '../components/questionaire/QuestionaireChat'
import QuestionaireJobs from '../components/questionaire/QuestionaireJobs'
import QuestionaireQuestion from '../components/questionaire/QuestionaireQuestion'
import Footer from '../components/Footer'
import { infojobsGetOffers } from '../../services/infoJobsAPI'

export default function QuestionairePage() {
  const { isQuestionaireFinished } = useQuestionaire()
  const { isOfferElected, selectOffers } = useQuestionaireJobs()

  useEffect(() => {
    async function setOffers() {
      const offers = await infojobsGetOffers({ q: 'frontend developer' })
      if (!offers) {
        throw new Error('No offers found')
      }
      selectOffers(offers)
    }
    if (isQuestionaireFinished) {
      setOffers()
    }
  }, [isQuestionaireFinished])

  return (
    <>
      <FadeIn className="h-full">
        {!isQuestionaireFinished && <QuestionaireQuestion />}
        {isQuestionaireFinished && !isOfferElected && <QuestionaireJobs />}
        {isOfferElected && <QuestionaireChat />}
        <Footer />
      </FadeIn>
    </>
  )
}
