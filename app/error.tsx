'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4">
          Something went wrong!
        </h2>
        <button
          onClick={() => reset()}
          className="px-6 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg transition-all duration-300"
        >
          Try again
        </button>
      </div>
    </div>
  )
}