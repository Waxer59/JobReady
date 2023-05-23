import { FadeIn } from '../../components/Transitions'
import QuestionaireQuestion from '../components/questionaire/QuestionaireQuestion'

export default function QuestionairePage() {
  return (
    <FadeIn className="h-full">
      <QuestionaireQuestion />
    </FadeIn>
  )
}
