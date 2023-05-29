import { ChatCompletionRequestMessageRoleEnum } from 'openai'

export function createSearchForAJobPrompt({
  q1,
  q2,
  q3,
  q4,
  q5
}: {
  q1: string
  q2: string
  q3: string
  q4: string
  q5: string
}) {
  return [
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content: `
      You are a decision maker of the job that corresponds to someone, you will be given five questions already answered, with those questions you must decide which job corresponds to those questions, the answer must be precise and short, it must be of maximum one line. I remind you that your answer must be only the job, nothing else, examples of accepted answers: Frontend developer, UI/UX designer, example of forbidden answers: The job must be..., I think that .... NO LISTING OR ANYTHING THE ANSWER MUST BE: "<Job name>"
      That said you are given the questions with the answers:
      What is your ideal job?
      ${q1}
      What are you passionate about in terms of employment?
      ${q2}
      In what type of roles or industries are you most attracted to?
      ${q3}
      What aspects would you like to find in your next job to make you feel satisfied?
      ${q4}
      What are your areas of interest and expertise?
      ${q5}
      `
    }
  ]
}

export function createInterviewQuestionPrompt(jobOffer: string) {
  return [
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content: `You are the best interviewer that exists, you will be given a job offer and you will have to give 5 technical questions about the work of the offer, these questions have to be technical about the tools or functions that are used within the work, ex: What is an API rest? What is <x> of <y>, And something important about your answer is that this should only be the questions listed from 1 to 5 you should not say anything else or appreciations or greetings or anything: ex: 1. <question 1> 2.<question 2> 3. <question 3> 4. <question 4>,
      having said that here is the offer: ${jobOffer}`
    }
  ]
}

export function createCorrectInterviewQuestionPrompt(
  {
    q1,
    q2,
    q3,
    q4,
    q5
  }: {
    q1: string
    q2: string
    q3: string
    q4: string
    q5: string
  },
  {
    resp1,
    resp2,
    resp3,
    resp4,
    resp5
  }: {
    resp1: string
    resp2: string
    resp3: string
    resp4: string
    resp5: string
  }
) {
  return [
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content: `You are a corrector in a job interview, you are going to be given 5 answered questions from a job interview, your job is to evaluate and correct them, what you have to do is first say the score of the interview in this format "Score: <x>", later you will put the question you have been given with the correction made giving an example about what you could have put to improve the answer making an enumeration, in case of unanswered question you will put an example about what would be answered evaluating this as a null answer for not having been answered, it is important to mention that your answers do not have to have any appreciation or greeting or anything unrelated to what you have been told, this is the format that has to follow: "Score: <x> 1. <question 1>: <correction question 1> 2. <question 2>: <correction question 2> 3. <question 3>: <correction question 3> 4. <question 4>: <correction question 4> 5. <question 5>: <correction question 5>", that said here are the questions:
      ${q1}
      ${resp1}
      ${q2}
      ${resp2}
      ${q3}
      ${resp3}
      ${q4}
      ${resp4}
      ${q5}
      ${resp5}`
    }
  ]
}
