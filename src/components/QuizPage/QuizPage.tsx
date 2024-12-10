import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'
import { Quiz } from '../Quiz'
import { Base64 } from 'js-base64'
import { getQuizByShorUrl } from './request/getQuizByShorUrl'
import { QuestionList } from '../QuestionsForm/QuestionsForm.types'
import './QuizPage-styles.css'

type QuizState = 'Loading' | 'Complete' | 'Error'

export function QuizPage() {
  const [quizState, setQuizState] = useState<QuizState>('Loading')
  const [quizData, setQuizData] = useState<QuestionList[]>([])
  const [searchParams] = useSearchParams()

  useEffect(() => {
    async function getQuizData() {
      const id = searchParams.get('id')

      if (!id) {
        setQuizState('Error')
        return
      }

      const url = await getQuizByShorUrl(id)

      if (!url) {
        setQuizState('Error')
        return
      }

      try {
        const quizListJSON = Base64.decode(url)
        const quizList: QuestionList[] = JSON.parse(quizListJSON)

        setQuizData(quizList)
        setQuizState('Complete')
      } catch (e) {
        console.error('Error:', e)
        setQuizState('Error')
        return
      }
    }

    getQuizData()
  }, [])

  function renderQuizState() {
    if (quizState === 'Complete') {
      return <Quiz quizData={quizData} />
    }

    if (quizState === 'Error') {
      return <h1>Error</h1>
    }

    return (
      <RotatingLines
        strokeColor="var(--text-color-input)"
        width="200"
        animationDuration="5.0"
      />
    )
  }

  return <div className="QuizPage-container">{renderQuizState()}</div>
}
