// filepath: c:\Users\bashe\Desktop\IfBash-next-main\app\404.tsx

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4">
          404
        </h1>
        <p className="text-xl text-blue-100 mb-8">Page Not Found</p>
        <a
          href="/"
          className="px-6 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg transition-all duration-300"
        >
          Return Home
        </a>
      </div>
    </div>
  )
}