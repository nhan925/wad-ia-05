"use client";

import Link from "next/link";
import { CircleChevronLeft } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  subPage?: boolean
}

export default function Header(headerProps: HeaderProps) {
    const { subPage } = headerProps;
    return (
        !subPage ?   
            (
                <header className="bg-white/50 dark:bg-gray-900/50 shadow-sm sticky top-0 z-10 backdrop-blur-xl">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-xl font-bold md:text-3xl text-gray-900 dark:text-white hover:scale-102 transition-transform duration-200 font-kaushan"><Link href="/">Photo Gallery</Link></h1>
                                <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm md:text-base">Powered by <Link href="https://picsum.photos/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-all duration-100">Lorem Picsum</Link></p>
                            </div>
                            <div className="flex items-center gap-4">
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                </header>
            )
            :
            (
                  <header className="bg-white/50 dark:bg-gray-900/50 shadow-sm sticky top-0 z-10 backdrop-blur-xl">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center gap-2 md:text-base text-sm">
                                <CircleChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                                Back to Gallery
                            </Link>
                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <h1 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white font-kaushan"><Link href="/">Photo Gallery</Link></h1>
                                    <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm md:text-base">Powered by <Link href="https://picsum.photos/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-all duration-100">Lorem Picsum</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>      
            )
    );
}