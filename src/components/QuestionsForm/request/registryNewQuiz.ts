import { supabase } from '../../../api/supabaseClient'
import { SHORT_URL_TABLE_NAME } from '../../../constants'

export async function registryNewQuiz(
  shortUrl: string,
  quizBase64: string
): Promise<boolean> {
  const { error } = await supabase
    .from(SHORT_URL_TABLE_NAME)
    .insert([{ quiz_id: shortUrl, url: quizBase64 }])
    .select()

  if (error) {
    console.error('ERRR: could not create a new quiz', error)
    return false
  }

  return true
}
