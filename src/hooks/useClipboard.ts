import { useState } from 'react'

/**
 * Hook para copiar texto para o clipboard.
 * @returns Um objeto com isCopied (indicador de cópia) e copyToClipboard (função para copiar texto).
 */

export const useClipboard = (): {
  isCopied: boolean
  copyToClipboard: (text: string) => Promise<void>
} => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async (text: string): Promise<void> => {
    try {
      if (navigator.clipboard) {
        // Tenta copiar usando a API Clipboard
        await navigator.clipboard.writeText(text)
        setIsCopied(true)

        // Reseta o estado após 2 segundos
        setTimeout(() => setIsCopied(false), 2000)
      } else {
        // Fallback para navegadores que não suportam navigator.clipboard
        const tempTextarea = document.createElement('textarea')
        tempTextarea.value = text
        document.body.appendChild(tempTextarea)
        tempTextarea.select()
        document.execCommand('copy')
        document.body.removeChild(tempTextarea)

        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      }
    } catch (error) {
      console.error('Erro ao copiar para o clipboard:', error)
      setIsCopied(false)
    }
  }

  return { isCopied, copyToClipboard }
}
