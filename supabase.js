import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://vbqgywvtrqjazsbkgwyu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZicWd5d3Z0cnFqYXpzYmtnd3l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzODM4NjcsImV4cCI6MjA3MTk1OTg2N30.x3ljPycMmDNn4aAw2ght-GL7BM1MjnKkRsxkEJsqre8';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);