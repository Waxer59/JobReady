import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'
import QuestionaireProvider from './context/QuestionaireProvider'
import { Toaster } from 'sonner'
import QuestionaireJobsProvider from './context/QuestionaireJobsProvider'
import QuestionaireInterviewProvider from './context/QuestionaireInterviewProvider'

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
