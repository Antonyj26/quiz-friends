import type { QuizProps } from './Quiz.types'
import './Quiz-styles.css'

export function Quiz ( { value } : QuizProps ) {

  return (
    <div className="Quiz-container">
      <h1>Quiz</h1>
      <h2>{value}</h2>
    </div>
  )
}