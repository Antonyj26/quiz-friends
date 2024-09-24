import type { HomeProps } from './Home.types'
import './Home-styles.css'

export function Home ( { value } : HomeProps ) {

  return (
    <div className="Home-container">
      <h1>Home</h1>
      <h2>{value}</h2>
    </div>
  )
}