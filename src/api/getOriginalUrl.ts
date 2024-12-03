import { supabase } from './supabaseClient'

export async function getOriginalUrl(quizId: string): Promise<string | null> {
  const { data, error } = await supabase
    .from('short_urls')
    .select('url')
    .eq('quiz_id', quizId)
    .single()

  if (error) {
    console.error('Erro ao buscar a URL:', error)
    return null
  }

  return data?.url ?? null
}
