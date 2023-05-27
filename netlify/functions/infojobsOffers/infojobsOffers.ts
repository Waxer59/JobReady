import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'

const INFOJOBS_TOKEN = process.env.INFOJOBS_TOKEN

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const { queryStringParameters } = event
  const queryParams = buildQueryString(queryStringParameters ?? {})
  try {
    const resp = await fetch(
      `https://api.infojobs.net/api/9/offer?${queryParams}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${INFOJOBS_TOKEN}`
        }
      }
    )
    const data = await resp.json()
    const offersPromises = data.offers.map(async (offer: any) =>
      getOffer(offer.id)
    )
    const offers = await Promise.all(offersPromises)
    return {
      statusCode: 200,
      body: JSON.stringify(offers)
    }
  } catch (e) {
    console.error(e)
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Internal Server Error'
      })
    }
  }
}

function buildQueryString(params: object) {
  const queryParams = Object.entries(params).map(
    ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
  )

  return queryParams.join('&')
}

async function getOffer(id: string) {
  const resp = await fetch(`https://api.infojobs.net/api/9/offer/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${INFOJOBS_TOKEN}`
    }
  })
  const data = await resp.json()
  return data
}

export { handler }
