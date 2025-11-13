import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Photo Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the photo you&apos;re looking for. It may have been 
          removed or the ID might be incorrect.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Gallery
        </Link>
      </div>
    </div>
  );
}
