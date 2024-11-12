export interface ButtonProps {
  text?: string
  variant?: 'primary' | 'secondary' | 'success'
  action?: () => void
  disabled?: boolean
  minWidth?: string
}
