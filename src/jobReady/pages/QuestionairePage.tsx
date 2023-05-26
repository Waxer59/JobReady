import { FadeIn } from '../../components/Transitions'
import useQuestionaire from '../../hooks/useQuestionaire'
import useQuestionaireJobs from '../../hooks/useQuestionaireJobs'
import QuestionaireChat from '../components/questionaire/QuestionaireChat'
import QuestionaireJobs from '../components/questionaire/QuestionaireJobs'
import QuestionaireQuestion from '../components/questionaire/QuestionaireQuestion'

export default function QuestionairePage() {
  const { isFinished } = useQuestionaire()
  const { isOfferElected } = useQuestionaireJobs()
  return (
    <>
      <FadeIn className="h-full">
        {!isFinished && <QuestionaireQuestion />}
        {isFinished && !isOfferElected && <QuestionaireJobs />}
        {isOfferElected && <QuestionaireChat />}
      </FadeIn>
    </>
  )
}
