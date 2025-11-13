import Image from "next/image";
import Header from "@/components/Header";
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
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex-col flex">
      <Header subPage={true}/>

      <main className="mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex flex-1 justify-center md:items-center">
        <div className="space-y-6 flex-1 lg:max-w-5xl">
          {/* Full-size Image */}
          <div className="relative group rounded-2xl shadow-xl overflow-hidden">
            <div className="relative w-full" style={{ aspectRatio: `${photo.width}/${photo.height}` }}>
              <Image
                src={`https://picsum.photos/id/${photo.id}/${photo.width}/${photo.height}`}
                alt={`Photo by ${photo.author}`}
                fill
                className="object-contain bg-black"
                priority
                sizes="100vw"
              />
              
              {/* Info Overlay - Shows on Hover (Desktop Only) */}
              <div className="hidden md:block absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="space-y-4">
                    {/* Title and ID */}
                    <div>
                      <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-1">
                        Photo Details
                      </h2>
                      <h1 className="text-4xl font-bold mb-2">
                        Photo #{photo.id}
                      </h1>
                    </div>

                    {/* Author */}
                    <div className="border-l-4 border-blue-400 pl-4">
                      <p className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                        Author
                      </p>
                      <p className="text-2xl font-semibold mt-1">
                        {photo.author}
                      </p>
                    </div>

                    {/* Dimensions */}
                    <div className="flex gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                        <p className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                          Width
                        </p>
                        <p className="text-lg font-bold mt-1">
                          {photo.width}px
                        </p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                        <p className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                          Height
                        </p>
                        <p className="text-lg font-bold mt-1">
                          {photo.height}px
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-2">
                        Description
                      </p>
                      <p className="text-gray-100 leading-relaxed">
                        This stunning photograph captured by {photo.author} showcases 
                        exceptional composition and artistic vision. The image has been 
                        featured in the Lorem Picsum collection, a curated gallery of 
                        high-quality photographs available for creative use.
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-2">
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
                        className="flex-1 bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors text-center"
                      >
                        View Full Size
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Card (Mobile Only) */}
          <div className="md:hidden bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <div className="space-y-4">
              {/* Title and ID */}
              <div>
                <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                  Photo Details
                </h2>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Photo #{photo.id}
                </h1>
              </div>

              {/* Author */}
              <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-4">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Author
                </p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
                  {photo.author}
                </p>
              </div>

              {/* Dimensions */}
              <div className="flex gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg px-4 py-3 flex-1">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Width
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white mt-1">
                    {photo.width}px
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg px-4 py-3 flex-1">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Height
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white mt-1">
                    {photo.height}px
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 uppercase tracking-wide mb-2">
                  Description
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  This stunning photograph captured by {photo.author} showcases 
                  exceptional composition and artistic vision. The image has been 
                  featured in the Lorem Picsum collection, a curated gallery of 
                  high-quality photographs available for creative use.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href={photo.download_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-center"
                >
                  Download Original
                </a>
                <a
                  href={photo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-center"
                >
                  View Full Size
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
