import type { InfojobsOfferResponse } from '../interfaces/infojobsAPIResponse'

interface IinfojobsGetOffers {
  q: string
  maxResults?: number
}

export async function infojobsGetOffers({
  q,
  maxResults = 15
}: IinfojobsGetOffers): Promise<InfojobsOfferResponse[] | null> {
  try {
    const resp = await fetch(
      `/.netlify/functions/infojobsOffers?q=${q}&maxResults=${maxResults}`
    )
    const data = await resp.json()
    return data
  } catch (e) {
    console.error(e)
    return null
  }
}
