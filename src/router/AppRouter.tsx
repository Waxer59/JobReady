import { Route, Routes } from 'react-router-dom'
import HomePage from '../jobReady/pages/HomePage'
import QuestionairePage from '../jobReady/pages/QuestionairePage'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/questionaire" element={<QuestionairePage />} />
    </Routes>
  )
}
