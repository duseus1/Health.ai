export default function TestPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Tailwind Test Page</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          If you can see this styled with colors and proper formatting, Tailwind CSS is working correctly.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-md text-blue-800 dark:text-blue-100">Blue Box</div>
          <div className="bg-green-100 dark:bg-green-900 p-4 rounded-md text-green-800 dark:text-green-100">
            Green Box
          </div>
          <div className="bg-red-100 dark:bg-red-900 p-4 rounded-md text-red-800 dark:text-red-100">Red Box</div>
          <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-md text-yellow-800 dark:text-yellow-100">
            Yellow Box
          </div>
        </div>
      </div>
    </div>
  )
}

