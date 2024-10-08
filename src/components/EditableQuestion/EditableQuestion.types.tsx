type Option = {
  title: string
  isValidAnswer: boolean
}

export interface EditableQuestionProps {
  index: number
  options: Option[]
}
