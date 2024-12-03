import { FormEvent, useState, useCallback } from 'react'
import { Button } from '../Button'
import { Base64 } from 'js-base64'
import { encode } from 'base62'
import { getLastDatabaseRegistryId } from './request/getLastDatabaseRegistryId'
import type { QuestionList } from './QuestionsForm.types'
import './QuestionsForm-styles.css'
import { URL_ID_NUMBER_PADDING } from '../../constants'
import { registryNewQuiz } from './request/registryNewQuiz'

export function QuestionsForm() {
  const [questions, setQuestions] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

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
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      setIsLoading(true)

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

      const questionListJson = JSON.stringify(questionList)
      const questionListBase64 = Base64.encode(questionListJson)

      const lastRegistryId = await getLastDatabaseRegistryId()

      if (lastRegistryId === null) {
        alert('Algo de errado aconteceu') // [] TODO - Adicionar um Toast
        setIsLoading(false)
        return
      }

      const shortUrl = encode(lastRegistryId + URL_ID_NUMBER_PADDING)

      const result = await registryNewQuiz(shortUrl, questionListBase64)

      if (!result) {
        alert('Não foi possivel adicionar um novo quiz') // [] TODO - Adicionar um Toast
        setIsLoading(false)
        return
      }

      alert('Quiz salvo com sucesso!') // [] TODO - Adicionar um Toast
      setIsLoading(false)
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
          text="Salvar"
          disabled={isLoading}
          variant="success"
          minWidth="200px"
          type="submit"
        />
      </form>
      <div className="Button-content">
        <Button
          text="Adicionar Pergunta"
          action={handleAddQuestion}
          disabled={questions > 9 || isLoading}
          variant="secondary"
          minWidth="200px"
        />

        <Button
          text="Remover Pergunta"
          action={handleRemoveQuestion}
          disabled={questions === 0 || isLoading}
          variant="primary"
          minWidth="200px"
        />
      </div>
    </div>
  )
}
