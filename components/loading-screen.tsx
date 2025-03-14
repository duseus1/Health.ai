import Image from "next/image"

export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950">
      <div className="relative w-16 h-16 animate-pulse">
        <Image
          src="https://sjc.microlink.io/CAvIKyk6WVOtbyaOKby2oXowYBAKa_uum8GtP539v4doNjIiD0oscj8AmQtOP9rpLIqO3Ryn9xNrH9YJYkqj4w.jpeg"
          alt="Health.ai Logo"
          fill
          className="object-contain"
        />
      </div>
      <h1 className="mt-6 text-2xl font-bold text-cyan-400">Health.ai</h1>
      <p className="mt-2 text-gray-400">Your AI-powered health companion</p>
    </div>
  )
}

