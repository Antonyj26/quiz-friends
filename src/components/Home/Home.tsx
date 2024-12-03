import { useEffect } from 'react'
import type { HomeProps } from './Home.types'
import './Home-styles.css'
import { getOriginalUrl } from '../../api/getOriginalUrl'

export function Home({ value }: HomeProps) {
  useEffect(() => {
    async function getSampleURL() {
      const url = await getOriginalUrl('y67Hj3')
      console.log('DBG:', { url })
    }

    getSampleURL()
  }, [])

  return (
    <div className="Home-container">
      <h1>Home</h1>
      <h2>{value}</h2>
    </div>
  )
}
