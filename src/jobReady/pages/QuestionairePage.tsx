import { useEffect, useState } from 'react'
import { FadeIn } from '../../components/Transitions'
import useQuestionaire from '../../hooks/useQuestionaire'
import useQuestionaireJobs from '../../hooks/useQuestionaireJobs'
import QuestionaireChat from '../components/questionaire/QuestionaireChat'
import QuestionaireJobs from '../components/questionaire/QuestionaireJobs'
import { infojobsGetOffers } from '../../services/infoJobsAPI'
import QuestionaireQuestion from '../components/questionaire/QuestionaireQuestion'
import QuestionaireElection from '../components/questionaire/QuestionaireElection'
import { toast } from 'sonner'
import QuestionaireJobSearch from '../components/questionaire/QuestionaireJobSearch'
import type { InfojobsOfferResponse } from '../../interfaces/infojobsAPIResponse'
import Loading from '../../components/Loading'
import { getOpenaiResponse } from '../../services/openaiAPI'
import {
  createCorrectInterviewQuestionPrompt,
  createInterviewQuestionPrompt
} from '../../helpers/createPrompts'
import { useQuestionaireInterview } from '../../hooks/useQuestionaireInterview'
import QuestionaireResults from '../components/questionaire/QuestionaireResults'

export default function QuestionairePage() {
  const {
    isQuestionaireFinished,
    isQuestionaireSelected,
    isJobSearchSelected
  } = useQuestionaire()
  const { isOfferElected, isJobsLoading, offer } = useQuestionaireJobs()
  const {
    isInterviewFinished,
    isInterviewLoading,
    interviewSetIsLoading,
    interviewAnswers,
    setFeedBackAndScore
  } = useQuestionaireInterview()
  const [offers, setOffers] = useState<InfojobsOfferResponse[]>([])
  const [interviewQuestions, setInterviewQuestions] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(
    isJobsLoading || isInterviewLoading
  )

  useEffect(() => {
    async function selectOffers() {
      const offersResp = await infojobsGetOffers({ q: 'frontend developer' })
      if (!offers) {
        toast.error('No offers found')
        return
      }
      setOffers(offersResp)
    }
    if (isQuestionaireFinished) {
      selectOffers()
    }
  }, [isQuestionaireFinished])

  useEffect(() => {
    async function createInterview() {
      const resp = await getOpenaiResponse(createInterviewQuestionPrompt(offer))
      if (resp) {
        interviewSetIsLoading(false)
      } else {
        toast.error('Error creating interview')
        return
      }
      setInterviewQuestions(resp.data.choices[0].message.content.split(/\n/g))
    }
    if (isOfferElected) {
      createInterview()
    }
  }, [isOfferElected])

  useEffect(() => {
    setIsLoading(isJobsLoading || isInterviewLoading)
  }, [isJobsLoading, isInterviewLoading])

  useEffect(() => {
    async function getInterviewFeedback() {
      const resp = await getOpenaiResponse(
        createCorrectInterviewQuestionPrompt(
          {
            q1: interviewQuestions[0],
            q2: interviewQuestions[1],
            q3: interviewQuestions[2],
            q4: interviewQuestions[3],
            q5: interviewQuestions[4]
          },
          {
            resp1: interviewAnswers[0],
            resp2: interviewAnswers[1],
            resp3: interviewAnswers[2],
            resp4: interviewAnswers[3],
            resp5: interviewAnswers[4]
          }
        )
      )
      if (resp) {
        interviewSetIsLoading(false)
      } else {
        toast.error('Error creating feedback')
        return
      }
      const message = resp.data.choices[0].message.content
      const extractScore = message.match(/Score: (\d+)/)
      let score
      if (extractScore) {
        score = +extractScore[1]
      } else {
        score = 55
      }

      setFeedBackAndScore(message.replace(/Score: \d+/, ''), score)
    }
    console.log(isInterviewFinished)
    if (isInterviewFinished) {
      interviewSetIsLoading(true)
      getInterviewFeedback()
    }
  }, [isInterviewFinished])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <FadeIn className="h-full">
          {!isQuestionaireSelected && !isJobSearchSelected && (
            <QuestionaireElection />
          )}
          {isJobSearchSelected && !isOfferElected && <QuestionaireJobSearch />}
          {isQuestionaireSelected && !isQuestionaireFinished && (
            <QuestionaireQuestion />
          )}
          {isQuestionaireFinished && !isOfferElected && (
            <QuestionaireJobs offers={offers} />
          )}
          {isOfferElected &&
            !isInterviewFinished &&
            interviewQuestions.length > 0 && (
              <QuestionaireChat interviewQuestions={[...interviewQuestions]} />
            )}
          {isInterviewFinished && <QuestionaireResults />}
        </FadeIn>
      )}
    </>
  )
}
