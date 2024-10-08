import type { ButtonProps } from './Button.types'
import './Button-styles.css'

export function Button({ text, variant = 'primary', action }: ButtonProps) {
  return (
    <button
      className={
        'Button-container' + (variant == 'secondary' ? ' secondary' : '')
      }
      onClick={action}
    >
      {text}
    </button>
  )
}
