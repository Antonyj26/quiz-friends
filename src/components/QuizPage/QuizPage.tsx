import { Quiz } from '../Quiz'
import './QuizPage-styles.css'

import { mockedQuestions } from './mock'

export function QuizPage() {
  // TODO [] = Pegar o quiz pela url
  return (
    <div className="QuizPage-container">
      <Quiz quizData={mockedQuestions} />
    </div>
  )
}
