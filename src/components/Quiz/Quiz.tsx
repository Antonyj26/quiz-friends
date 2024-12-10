import { useState } from 'react'
import { Button } from '../Button'
import { QuizResults } from '../QuizResults'
import type { QuizProps } from './Quiz.types'
import './Quiz-styles.css'

export function Quiz({ quizData }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState(-1)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [isQuizCompleted, setIsQuizCompleted] = useState(false)

  const handleSelectOption = (option: number) => {
    setSelectedOption(option)
  }

  if (quizData.length === 0) {
    return null
  }

  const question = quizData[currentQuestion]

  const handleAnswerQuestion = () => {
    const newAnswer = [...answers]
    newAnswer.push(Number(question.correctQuestion) === selectedOption)
    setAnswers(newAnswer)

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsQuizCompleted(true)
    }

    setSelectedOption(-1)
  }

  const handleResetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedOption(-1)
    setAnswers([])
    setIsQuizCompleted(false)
  }

  return (
    <div className="Quiz-container">
      {isQuizCompleted ? (
        <QuizResults answers={answers} resetQuiz={handleResetQuiz} />
      ) : (
        <>
          {<h1>{question.text}</h1>}
          {question.options.map((option, index) => (
            <Button
              key={`question:${currentQuestion}-option:${index}`}
              //id={`question:${currentQuestion}-option:${index}`}
              text={option.text}
              variant={selectedOption === index ? 'primary' : 'secondary'}
              action={() => handleSelectOption(index)}
            />
          ))}

          <br></br>

          <Button
            variant="success"
            text="Responder"
            minWidth="100%"
            action={handleAnswerQuestion}
          />
        </>
      )}
    </div>
  )
}
