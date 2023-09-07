import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const {VITE_SUPABASE_URL: supabaseUrl , VITE_SUPABASE_KEY: supabaseKey} = import.meta.env

export const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;
