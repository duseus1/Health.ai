"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"

export default function AuthDebugPage() {
  const [session, setSession] = useState<any>(null)
  const [user, setUser] = useState<any>(null)
  const [providers, setProviders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadAuthData() {
      try {
        // Get session
        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession()
        if (sessionError) throw sessionError
        setSession(session)

        // Get user
        if (session) {
          const {
            data: { user },
            error: userError,
          } = await supabase.auth.getUser()
          if (userError) throw userError
          setUser(user)

          // Get linked providers
          const { data: providers, error: providersError } = await supabase.auth.getUserIdentities()
          if (providersError) throw providersError
          setProviders(providers || [])
        }
      } catch (error: any) {
        console.error("Auth debug error:", error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    loadAuthData()
  }, [])

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Authentication Debug</CardTitle>
          <CardDescription>View your authentication status and details</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div>Loading authentication data...</div>
          ) : error ? (
            <div className="text-red-500">Error: {error}</div>
          ) : (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">Session Status</h3>
                <div className="mt-2 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
                  <pre className="whitespace-pre-wrap break-all text-sm">
                    {session ? "Authenticated" : "Not authenticated"}
                  </pre>
                </div>
              </div>

              {user && (
                <div>
                  <h3 className="text-lg font-medium">User Information</h3>
                  <div className="mt-2 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
                    <pre className="whitespace-pre-wrap break-all text-sm">{JSON.stringify(user, null, 2)}</pre>
                  </div>
                </div>
              )}

              {providers && providers.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium">Linked Providers</h3>
                  <div className="mt-2 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
                    <pre className="whitespace-pre-wrap break-all text-sm">{JSON.stringify(providers, null, 2)}</pre>
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-lg font-medium">Environment</h3>
                <div className="mt-2 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Supabase URL:</p>
                      <p className="text-sm break-all">{process.env.NEXT_PUBLIC_SUPABASE_URL || "Not set"}</p>
                    </div>
                    <div>
                      <p className="font-medium">Redirect URL:</p>
                      <p className="text-sm break-all">
                        {typeof window !== "undefined" ? `${window.location.origin}/auth/callback` : "Not available"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

