import Link from "next/link";
import { CircleChevronLeft } from "lucide-react";

interface HeaderProps {
  subPage?: boolean
}

export default function Header(headerProps: HeaderProps) {
    const { subPage } = headerProps;
    return (
        !subPage ?   
            (
                <header className="bg-white/50 shadow-sm sticky top-0 z-10 backdrop-blur-xl">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-xl font-bold md:text-3xl text-gray-900 hover:scale-102 transition-transform duration-200 font-kaushan"><Link href="/">Photo Gallery</Link></h1>
                                <p className="text-gray-600 mt-1 text-sm md:text-base">Powered by <Link href="https://picsum.photos/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:text-blue-800 transition-all duration-100">Lorem Picsum</Link></p>
                            </div>
                            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium md:text-base text-sm">
                                Home
                            </Link>
                        </div>
                    </div>
                </header>
            )
            :
            (
                  <header className="bg-white/50 shadow-sm sticky top-0 z-10 backdrop-blur-xl">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 md:text-base text-sm">
                                <CircleChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                                Back to Gallery
                            </Link>
                            <div>
                                <h1 className="text-xl md:text-3xl font-bold text-gray-900 font-kaushan">Photo Gallery</h1>
                                <p className="text-gray-600 mt-1 text-sm md:text-base">Powered by <Link href="https://picsum.photos/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:text-blue-800 transition-all duration-100">Lorem Picsum</Link></p>
                            </div>
                        </div>
                    </div>
                </header>      
            )
    );
}