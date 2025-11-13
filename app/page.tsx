import PhotoGrid from "@/components/PhotoGrid";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <Header />

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
