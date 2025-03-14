import { createClient } from "@supabase/supabase-js"

// Make sure we're using the correct environment variable names
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Add error handling and fallback for environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase environment variables. Please check your .env file.")
}

export const supabase = createClient(
  supabaseUrl || "https://zjyorgexvomaghdwifzn.supabase.co",
  supabaseAnonKey ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqeW9yZ2V4dm9tYWdoZHdpZnpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4MjQwNzYsImV4cCI6MjA1NzQwMDA3Nn0.j4-50OVxSJ72X3PbVyvDwZByk4lpM9rQudrJyqIzaWk",
)

