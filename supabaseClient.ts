import { createClient } from '@supabase/supabase-js'

const supabaseUrl =REACT_APP_SUPABASE_URL
const supabaseAnonKey = 'SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);