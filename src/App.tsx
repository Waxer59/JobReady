import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'
import QuestionaireProvider from './context/QuestionaireProvider'
import { Toaster } from 'sonner'

export default function App() {
  return (
    <BrowserRouter>
      <QuestionaireProvider>
        <Toaster />
        <AppRouter />
      </QuestionaireProvider>
    </BrowserRouter>
  )
}
