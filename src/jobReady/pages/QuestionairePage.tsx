import QuestionaireQuestion from '../components/questionaire/QuestionaireQuestion'

export default function QuestionairePage() {
  return (
    <QuestionaireQuestion
      exampleAnswer="exampleAnswer"
      hasNext={true}
      hasPrev={true}
      question="question"
    />
  )
}
