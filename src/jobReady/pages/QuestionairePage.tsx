import { FadeIn } from '../../components/Transitions'
import useQuestionaire from '../../hooks/useQuestionaire'
import QuestionaireJobs from '../components/questionaire/QuestionaireJobs'
import QuestionaireQuestion from '../components/questionaire/QuestionaireQuestion'

export default function QuestionairePage() {
  const { isFinished } = useQuestionaire()
  return (
    <FadeIn className="h-full">
      {isFinished ? <QuestionaireJobs /> : <QuestionaireQuestion />}
    </FadeIn>
  )
}
