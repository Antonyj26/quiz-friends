import type { EditableQuestionProps } from './EditableQuestion.types'
import './EditableQuestion-styles.css'

export function EditableQuestion({ index, options }: EditableQuestionProps) {
  return (
    <div className="EditableQuestion-container">
      <p>Pergunta {index + 1}:</p>
      <input type="input"></input>
      <div className="options-list">
        {options.map((option, index) => {
          return (
            <div className="option" key={index + '-' + option.title}>
              <span>Opção {index + 1}:</span>
              <input type="input"></input>
              <input type="checkbox"></input>
            </div>
          )
        })}
      </div>
    </div>
  )
}
