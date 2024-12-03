import { supabase } from '../../../api/supabaseClient'
import { SHORT_URL_TABLE_NAME } from '../../../constants'

export async function getLastDatabaseRegistryId(): Promise<number | null> {
  const { data, error } = await supabase
    .from(SHORT_URL_TABLE_NAME)
    .select('id')
    .order('id', { ascending: false })
    .limit(1)
    .single()

  if (error) {
    console.error('ERROR: accesing last register id:', error)
    return null
  }

  return Number(data?.id) || null
}
