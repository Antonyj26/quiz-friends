export interface ButtonProps {
  text?: string
  variant?: 'primary' | 'secondary'
  action?: () => void
  disabled?: boolean
  minWidth?: string
}
