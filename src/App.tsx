import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'
import QuestionaireProvider from './context/providers/QuestionaireProvider'
import { Toaster } from 'sonner'
import QuestionaireJobsProvider from './context/providers/QuestionaireJobsProvider'
import QuestionaireInterviewProvider from './context/providers/QuestionaireInterviewProvider'

export default function App() {
  return (
    <BrowserRouter>
      <QuestionaireProvider>
        <QuestionaireJobsProvider>
          <QuestionaireInterviewProvider>
            <Toaster />
            <AppRouter />
          </QuestionaireInterviewProvider>
        </QuestionaireJobsProvider>
      </QuestionaireProvider>
    </BrowserRouter>
  )
}
