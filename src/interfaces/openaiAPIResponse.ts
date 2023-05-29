export interface OpenaiResponse {
  data: Data
  status: number
  statusText: string
  headers: OpenaiResponseHeaders
  config: Config
  request: Request
}

export interface Config {
  transitional: Transitional
  transformRequest: null[]
  transformResponse: null[]
  timeout: number
  xsrfCookieName: string
  xsrfHeaderName: string
  maxContentLength: number
  maxBodyLength: number
  headers: ConfigHeaders
  method: string
  data: string
  url: string
}

export interface ConfigHeaders {
  Accept: string
  'Content-Type': string
  'User-Agent': string
  Authorization: string
}

export interface Transitional {
  silentJSONParsing: boolean
  forcedJSONParsing: boolean
  clarifyTimeoutError: boolean
}

export interface Data {
  id: string
  object: string
  created: number
  model: string
  usage: Usage
  choices: Choice[]
}

export interface Choice {
  message: Message
  finish_reason: string
  index: number
}

export interface Message {
  role: string
  content: string
}

export interface Usage {
  prompt_tokens: number
  completion_tokens: number
  total_tokens: number
}

export interface OpenaiResponseHeaders {
  'cache-control': string
  'content-type': string
}
