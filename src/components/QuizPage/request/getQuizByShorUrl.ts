import { supabase } from '../../../api/supabaseClient'
import { SHORT_URL_TABLE_NAME } from '../../../constants'

export async function getQuizByShorUrl(shortUrl: string) {
  const { data, error } = await supabase
    .from(SHORT_URL_TABLE_NAME)
    .select('url')
    .eq('quiz_id', shortUrl)
    .single()

  if (error) {
    console.error('ERRR: could not find the quiz', error)
    return null
  }

  return String(data.url)
}
