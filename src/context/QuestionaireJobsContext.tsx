import { createContext } from 'react'
import type { InfojobsOfferResponse } from '../interfaces/infojobsAPIResponse'

export interface IQuestionaireJobsContext {
  offer: string
  setOffer: (offer: string) => void
  isOfferElected: boolean
  setIsOfferElected: (isOfferElected: boolean) => void
  offers: InfojobsOfferResponse[] | []
  setOffers: (offers: InfojobsOfferResponse[]) => void
}

export const QuestionaireJobsContext = createContext<IQuestionaireJobsContext>({
  offer: '',
  setOffer: () => {},
  isOfferElected: false,
  setIsOfferElected: () => {},
  offers: [],
  setOffers: () => {}
})
