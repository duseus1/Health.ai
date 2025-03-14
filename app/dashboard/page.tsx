import { Suspense } from "react"
import Dashboard from "@/components/dashboard"
import LoadingScreen from "@/components/loading-screen"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <Suspense fallback={<LoadingScreen />}>
        <Dashboard />
      </Suspense>
    </main>
  )
}

