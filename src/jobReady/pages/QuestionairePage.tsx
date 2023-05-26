import { FadeIn } from '../../components/Transitions'
import useQuestionaire from '../../hooks/useQuestionaire'
import useQuestionaireJobs from '../../hooks/useQuestionaireJobs'
import QuestionaireChat from '../components/questionaire/QuestionaireChat'
import QuestionaireJobs from '../components/questionaire/QuestionaireJobs'
import QuestionaireQuestion from '../components/questionaire/QuestionaireQuestion'

export default function QuestionairePage() {
  const { isQuestionaireFinished } = useQuestionaire()
  const { isOfferElected } = useQuestionaireJobs()
  return (
    <>
      <FadeIn className="h-full">
        {!isQuestionaireFinished && <QuestionaireQuestion />}
        {isQuestionaireFinished && !isOfferElected && <QuestionaireJobs />}
        {isOfferElected && <QuestionaireChat />}
      </FadeIn>
    </>
  )
}
