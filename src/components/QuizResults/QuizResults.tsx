import { Button } from '../Button'
import type { QuizResultsProps } from './QuizResults.types'
import './QuizResults-styles.css'

export function QuizResults({ answers, resetQuiz }: QuizResultsProps) {
  const totalQuestions = answers.length
  const correctQuestions = answers.filter((question) => question).length
  const percet = (correctQuestions / totalQuestions) * 100

  return (
    <div className="QuizResults-container">
      <h1>Resultados</h1>
      <span>{`Você acertou ${correctQuestions} de ${totalQuestions}`}</span>
      <h2>{percet.toFixed(0)}%</h2>

      <a href="/create-quiz">
        <Button text="Criar seu quiz" />
      </a>

      <Button text="Fazer novamente" variant="secondary" action={resetQuiz} />
    </div>
  )
}
