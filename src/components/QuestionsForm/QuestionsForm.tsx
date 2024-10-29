import { FormEvent, useState, useCallback } from 'react'
import { Button } from '../Button'
import type { QuestionList } from './QuestionsForm.types'
import './QuestionsForm-styles.css'

export function QuestionsForm() {
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

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const formData = e.currentTarget

      const questionList = [] as QuestionList[]

      for (let i = 0; i < questions; i++) {
        const questionId = 'question' + (i + 1)

        const questionText = formData?.[questionId]?.value
        const option1 = formData?.[questionId + '-option1']?.value
        const option2 = formData?.[questionId + '-option2']?.value
        const option3 = formData?.[questionId + '-option3']?.value
        const option4 = formData?.[questionId + '-option4']?.value
        const correctQuestion =
          formData?.[questionId + '-correctOption' + (i + 1)]?.value

        questionList.push({
          text: questionText,
          correctQuestion,
          options: [option1, option2, option3, option4],
        })
      }
    },
    [questions]
  )

  return (
    <div className="QuestionsForm-container">
      <form onSubmit={handleSubmit}>
        {Array.from({ length: questions }, (_, i) => i).map(
          (_, questionIndex) => (
            <fieldset key={questionIndex}>
              <legend>Question {questionIndex + 1}</legend>
              <label htmlFor={`question${questionIndex + 1}`}>
                Question Text:
              </label>
              <input
                type="text"
                id={`question${questionIndex + 1}`}
                name={`question${questionIndex + 1}`}
                required
              />
              <br />

              {Array.from({ length: 4 }).map((_, optionIndex) => (
                <div key={`${questionIndex}-${optionIndex}`}>
                  <input
                    type="text"
                    name={`question${questionIndex + 1}-option${optionIndex + 1}`}
                    placeholder={`Option ${questionIndex + 1}`}
                    required
                  />
                  <input
                    type="radio"
                    name={`question${questionIndex + 1}-correctOption${questionIndex + 1}`}
                    value={optionIndex}
                    required
                  />
                  <br />
                  <span>Correct</span>
                </div>
              ))}
            </fieldset>
          )
        )}

        <button type="submit">Salvar</button>
      </form>

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
