import Image from "next/image";
import Link from "next/link";
import { Photo } from "@/types/photo";
import { notFound } from "next/navigation";

interface PhotoDetailPageProps {
  params: Promise<{ id: string }>;
}

async function getPhotoDetails(id: string): Promise<Photo | null> {
  try {
    const response = await fetch(
      `https://picsum.photos/id/${id}/info`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching photo details:", error);
    return null;
  }
}

export default async function PhotoDetailPage({ params }: PhotoDetailPageProps) {
  const { id } = await params;
  const photo = await getPhotoDetails(id);

  if (!photo) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
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
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Photo Section */}
            <div className="relative aspect-square lg:aspect-auto lg:min-h-[600px]">
              <Image
                src={`https://picsum.photos/id/${photo.id}/1200/1200`}
                alt={`Photo by ${photo.author}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Details Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Photo Details
                  </h2>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Photo #{photo.id}
                  </h1>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      Author
                    </p>
                    <p className="text-2xl font-semibold text-gray-900 mt-1">
                      {photo.author}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Width
                      </p>
                      <p className="text-xl font-bold text-gray-900 mt-1">
                        {photo.width}px
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Height
                      </p>
                      <p className="text-xl font-bold text-gray-900 mt-1">
                        {photo.height}px
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 mt-6">
                    <p className="text-sm font-semibold text-blue-900 uppercase tracking-wide mb-2">
                      Description
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      This stunning photograph captured by {photo.author} showcases 
                      exceptional composition and artistic vision. The image has been 
                      featured in the Lorem Picsum collection, a curated gallery of 
                      high-quality photographs available for creative use.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <a
                    href={photo.download_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                  >
                    Download Original
                  </a>
                  <a
                    href={photo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center flex items-center justify-center"
                  >
                    View Full Size
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">About Lorem Picsum</h3>
          <p className="text-gray-600">
            Lorem Picsum is a free service providing placeholder images for web developers 
            and designers. Each photo is carefully selected and optimized for various use cases. 
            All images are licensed under the Unsplash License and are free to use for commercial 
            and non-commercial purposes.
          </p>
        </div>
      </main>
    </div>
  );
}
