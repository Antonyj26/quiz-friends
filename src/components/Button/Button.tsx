import type { ButtonProps } from './Button.types'
import './Button-styles.css'

export function Button({
  text,
  variant = 'primary',
  action,
  disabled,
  minWidth,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={
        'Button-container' + (variant == 'secondary' ? ' secondary' : '')
      }
      onClick={action}
      disabled={disabled}
      style={{ minWidth }}
    >
      {text}
    </button>
  )
}
