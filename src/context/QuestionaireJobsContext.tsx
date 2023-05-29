import { createContext } from 'react'

export interface IQuestionaireJobsContext {
  offer: string
  setOffer: (offer: string) => void
  isOfferElected: boolean
  setIsOfferElected: (isOfferElected: boolean) => void
  isJobsLoading: boolean
  setIsLoading: (isJobsLoading: boolean) => void
}

export const QuestionaireJobsContext = createContext<IQuestionaireJobsContext>({
  offer: '',
  setOffer: () => {},
  isOfferElected: false,
  setIsOfferElected: () => {},
  isJobsLoading: false,
  setIsLoading: () => {}
})
