import type { FooterProps } from './Footer.types'
import './Footer-styles.css'

export function Footer({ value }: FooterProps) {
  return (
    <footer className="Footer-container">
      <h1>Footer</h1>
      <h2>{value}</h2>
    </footer>
  )
}
