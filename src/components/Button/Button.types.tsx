import { ButtonHTMLAttributes } from 'react'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  variant?: 'primary' | 'secondary' | 'success'
  action?: () => void
  disabled?: boolean
  minWidth?: string
}
