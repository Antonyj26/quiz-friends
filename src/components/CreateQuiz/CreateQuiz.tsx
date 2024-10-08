import { useState } from 'react'
import { EditableQuestion } from '../EditableQuestion'
import { Button } from '../Button'
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
        {Array.from({ length: questions }, (_, i) => i).map((_, i) => (
          <EditableQuestion
            key={i}
            index={i + 1}
            options={[
              { title: 'Opção 1', isValidAnswer: true },
              { title: 'Opção 1', isValidAnswer: false },
              { title: 'Opção 1', isValidAnswer: false },
              { title: 'Opção 1', isValidAnswer: false },
            ]}
          />
        ))}
      </div>

      <div>
        <Button
          text="Adicionar Pergunta"
          action={handleAddQuestion}
          disabled={questions > 9}
          variant="secondary"
          minWidth="200px"
        />

        <Button
          text="Remover Pergunta"
          action={handleRemoveQuestion}
          disabled={questions === 0}
          variant="primary"
          minWidth="200px"
        />
      </div>
    </div>
  )
}
