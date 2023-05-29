import { useState } from 'react'
import { QuestionaireJobsContext } from '../QuestionaireJobsContext'

export default function QuestionaireJobsProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [offer, setOffer] = useState('')
  const [isOfferElected, setIsOfferElected] = useState(false)
  const [isJobsLoading, setIsLoading] = useState(false)

  return (
    <QuestionaireJobsContext.Provider
      value={{
        offer,
        setOffer,
        isOfferElected,
        setIsOfferElected,
        isJobsLoading,
        setIsLoading
      }}>
      {children}
    </QuestionaireJobsContext.Provider>
  )
}
