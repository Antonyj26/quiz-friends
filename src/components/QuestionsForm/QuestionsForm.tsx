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
              <legend>
                <span className="text-legend">
                  Question {questionIndex + 1}
                </span>
              </legend>

              <div className="question-container">
                <label htmlFor={`question${questionIndex + 1}`}>
                  Texto da questão:
                </label>
                <textarea
                  rows={8}
                  id={`question${questionIndex + 1}`}
                  name={`question${questionIndex + 1}`}
                  required
                  placeholder="Adicione sua questão"
                />
              </div>

              <span>Marque a opção correta</span>
              <div className="field-container">
                {Array.from({ length: 4 }).map((_, optionIndex) => (
                  <div
                    className="input-container"
                    key={`${questionIndex}-${optionIndex}`}
                  >
                    <input
                      type="radio"
                      name={`question${questionIndex + 1}-correctOption${questionIndex + 1}`}
                      value={optionIndex}
                      required
                    />
                    <input
                      type="text"
                      name={`question${questionIndex + 1}-option${optionIndex + 1}`}
                      placeholder={`Opção ${optionIndex + 1}`}
                      required
                    />

                    <br />
                  </div>
                ))}
              </div>
            </fieldset>
          )
        )}
        <Button
          className="Button-submit
        "
          text="Salvar"
          type="submit"
        />
      </form>
      <div className="Button-content">
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
