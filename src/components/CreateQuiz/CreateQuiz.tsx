import { useState } from 'react'
import { EditableQuestion } from '../EditableQuestion'
import './CreateQuiz-styles.css'

export function CreateQuiz() {
  const [questions, setQuestions] = useState(0)

  function handleAddQuestion() {
    if (questions > 9) {
      return
    }

    setQuestions((prev) => prev + 1)
  }

  function handleRemoveQuestion() {
    if (questions < 1) {
      return
    }

    setQuestions((prev) => prev - 1)
  }

  return (
    <div className="CreateQuiz-container">
      <h1>Criar Quiz</h1>

      <div className="question-list">
        {Array.from({ length: questions }, (_, i) => i).map(() => (
          <EditableQuestion />
        ))}
      </div>

      <div>
        <button onClick={handleAddQuestion} disabled={questions > 9}>
          Adicionar Pergunta
        </button>
        <button onClick={handleRemoveQuestion} disabled={questions === 0}>
          Remover Pergunta
        </button>
      </div>
    </div>
  )
}
