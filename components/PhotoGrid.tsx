"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import PhotoCard from "./PhotoCard";
import { Spinner } from "./ui/spinner";
import { Photo } from "@/types/photo";

const PHOTOS_PER_PAGE = 16;

export default function PhotoGrid() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const observerTarget = useRef<HTMLDivElement>(null);

  const fetchPhotos = useCallback(async (pageNum: number) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${pageNum}&limit=${PHOTOS_PER_PAGE}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch photos");
      }

      const data: Photo[] = await response.json();

      if (data.length === 0) {
        setHasMore(false);
      } else {
        setPhotos((prev) => [...prev, ...data]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPhotos(page);
  }, [page, fetchPhotos]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [loading, hasMore]);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <PhotoCard key={`${photo.id}-${index}`} photo={photo} />
        ))}
      </div>

      {loading &&
        <div className="flex justify-center py-16">
          <Spinner className="size-12 text-blue-500" />
        </div>
      }

      {error && (
        <div className="text-center py-8 text-red-600">
          <p>Error: {error}</p>
          <button
            onClick={() => fetchPhotos(page)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      )}

      {!hasMore && (
        <div className="text-center py-8 text-gray-500">
          <p>No more photos to load</p>
        </div>
      )}

      <div ref={observerTarget} className="h-10" />
    </div>
  );
}
