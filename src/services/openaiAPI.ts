import { Configuration, OpenAIApi } from 'openai'
import type { OpenaiResponse } from '../interfaces/openaiAPIResponse'

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY as string
})
const openai = new OpenAIApi(configuration)

export async function getOpenaiResponse(
  messages: any
): Promise<OpenaiResponse | null> {
  try {
    const resp = (await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [...messages]
    })) as unknown as OpenaiResponse
    return resp
  } catch (e) {
    console.error(e)
    return null
  }
}
