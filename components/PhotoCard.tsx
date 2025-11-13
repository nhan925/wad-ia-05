"use client";

import Image from "next/image";
import Link from "next/link";
import { Photo } from "@/types/photo";

interface PhotoCardProps {
  photo: Photo;
}

export default function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <Link href={`/photos/${photo.id}`}>
      <div className="group relative overflow-hidden rounded-lg bg-gray-100 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
        <div className="aspect-square relative">
          <Image
            src={`https://picsum.photos/id/${photo.id}/400/400`}
            alt={`Photo by ${photo.author}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="font-semibold truncate">{photo.author}</p>
          <p className="text-sm text-gray-200">ID: {photo.id}</p>
        </div>
      </div>
    </Link>
  );
}
