import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Invalid HTTP Method'
      })
    }
  }

  const { body } = event

  const parsedBody = JSON.parse(body!)

  let messages = parsedBody?.messages

  messages = messages.map((message: any) => {
    return {
      role: message.role,
      content: message.content.replace(/\n/g, ' ').replace(/\r/g, ' ')
    }
  })

  if (!messages) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Missing messages'
      })
    }
  }

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [...messages]
  })

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Success',
      data: response
    })
  }
}

export { handler }
