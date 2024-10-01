import type { EditableQuestionProps } from './EditableQuestion.types'
import './EditableQuestion-styles.css'

export function EditableQuestion({ value }: EditableQuestionProps) {
  return (
    <div className="EditableQuestion-container">
      <p>Pergunta 01</p>
      <div className="options-list">
        <div className="option">
          <span>Opção 1</span>
          <input type="checkbox"></input>
        </div>

        <div className="option">
          <span>Opção 2</span>
          <input type="checkbox"></input>
        </div>

        <div className="option">
          <span>Opção 3</span>
          <input type="checkbox"></input>
        </div>

        <div className="option">
          <span>Opção 4</span>
          <input type="checkbox"></input>
        </div>
      </div>
    </div>
  )
}
