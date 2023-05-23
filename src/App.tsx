import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
