import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'
import QuestionaireProvider from './context/QuestionaireProvider'
import { Toaster } from 'sonner'
import QuestionaireJobsProvider from './context/QuestionaireJobsProvider'

export default function App() {
  return (
    <BrowserRouter>
      <QuestionaireProvider>
        <QuestionaireJobsProvider>
          <Toaster />
          <AppRouter />
        </QuestionaireJobsProvider>
      </QuestionaireProvider>
    </BrowserRouter>
  )
}
