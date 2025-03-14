import { Suspense } from "react"
import LoginForm from "@/components/auth/login-form"

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string; error_description?: string }
}) {
  const error = searchParams.error
  const errorDescription = searchParams.error_description

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex items-center mb-8">
            <div className="relative w-8 h-8 mr-2">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-md opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-white"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
            </div>
            <span className="text-xl font-bold">Health.ai</span>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LoginForm initialError={error ? { message: errorDescription || error, code: error } : null} />
          </Suspense>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className="flex flex-col items-center justify-center h-full text-white p-12">
            <h1 className="text-4xl font-bold mb-6">Welcome back to Health.ai</h1>
            <p className="text-xl mb-8 max-w-md text-center">
              Continue your health journey with personalized insights and tracking
            </p>
            <div className="grid grid-cols-1 gap-6 w-full max-w-md">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-medium mb-2">Your Health Dashboard</h3>
                <p className="text-sm opacity-80">
                  Access your personalized dashboard with all your health metrics and insights in one place
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-medium mb-2">New Features</h3>
                <p className="text-sm opacity-80">
                  Discover our latest AI-powered features designed to help you achieve your health goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

