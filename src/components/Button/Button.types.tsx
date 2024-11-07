import { ButtonHTMLAttributes } from 'react'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  variant?: 'primary' | 'secondary'
  action?: () => void
  disabled?: boolean
  minWidth?: string
}
