import PhotoGrid from "@/components/PhotoGrid";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Photo Gallery</h1>
              <p className="text-gray-600 mt-1">Powered by Lorem Picsum</p>
            </div>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Home
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PhotoGrid />
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-600">
          <p>Photos from <a href="https://picsum.photos/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Lorem Picsum</a></p>
        </div>
      </footer>
    </div>
  );
}
