// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ogvyecjaxarsxbecefey.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ndnllY2pheGFyc3hiZWNlZmV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNzA0NDksImV4cCI6MjA2Mjg0NjQ0OX0.P9VbkQIik7qLWaFeXPLLnpqIO_59CFNUDWcx7MzrBxg';
export const supabase = createClient(supabaseUrl, supabaseKey);