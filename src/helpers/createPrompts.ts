export function searchForAJobPrompt({
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
  return `
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
