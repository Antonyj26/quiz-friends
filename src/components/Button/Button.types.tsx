export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  variant?: 'primary' | 'secondary' | 'success'
  action?: () => void
  minWidth?: string
}
