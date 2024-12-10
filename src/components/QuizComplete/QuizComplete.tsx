import type { QuizCompleteProps } from './QuizComplete.types'
import './QuizComplete-styles.css'
import { Button } from '../Button'
import { useClipboard } from '../../hooks/useClipboard'
import toast from 'react-hot-toast'

export function QuizComplete({ shortUrl }: QuizCompleteProps) {
  const baseUrl = window.location.origin

  const url = `${baseUrl}/quiz?id=${shortUrl}`
  const { copyToClipboard } = useClipboard()

  async function copyUrl() {
    await copyToClipboard(url)
    toast.success('Copiado com sucesso!')
  }

  const handleReload = () => {
    window.location.reload()
  }

  return (
    <div className="QuizComplete-container">
      <h1>Compartilhe seu quiz</h1>
      <span className="QuizComplete-url" onClick={copyUrl}>
        {url}
      </span>
      <Button text="Copiar" onClick={copyUrl} />
      <Button text="Criar novo quiz" variant="success" onClick={handleReload} />
    </div>
  )
}
