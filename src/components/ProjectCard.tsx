import { assets } from '../modules/exports/assets';
import { useState } from 'react';

interface Slide {
    imageKey: string;
    title: string;
    area: string;
    tag: string;
}

interface ProjectCardProps {
    slides: Slide[];
    initialSlide?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ slides, initialSlide = 0 }) => {
    const [currentSlide, setCurrentSlide] = useState(initialSlide);
    
    const getAsset = (key: string): string | undefined => {
        return assets[key] ?? undefined;
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const currentSlideData = slides[currentSlide];

    return (
        <div
            className="rounded-2xl overflow-hidden bg-white transition-all duration-500 cursor-pointer relative group md:col-span-2 lg:col-span-1 transform hover:scale-105 hover:-translate-y-2"
            style={{ height: '390px' }}
        >
            <div className="w-full h-full bg-black relative rounded-2xl overflow-hidden">
                <div
                    className="w-full h-full bg-cover bg-center transition-all duration-500"
                    style={{
                        backgroundImage: `url(${getAsset(currentSlideData.imageKey)})`,
                    }}
                />
                <div className="absolute inset-0 rounded-2xl bg-black bg-opacity-40 group-hover:bg-opacity-10 transition-all duration-500"></div>
                <div className="absolute top-4 left-4">
                    <div className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-800 border border-gray-200 transform group-hover:scale-105 transition-transform duration-300">
                        {currentSlideData.tag}
                    </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex flex-row items-center gap-6">
                        <div className="flex gap-2">
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prevSlide();
                                }}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#578C62] text-white hover:bg-[#4a7753] transition-all duration-300 transform hover:scale-110"
                            >
                                <img
                                    src={getAsset('arrow-left')}
                                    alt="Назад"
                                    className="h-5 w-5"
                                />
                            </button>
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    nextSlide();
                                }}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#578C62] text-white hover:bg-[#4a7753] transition-all duration-300 transform hover:scale-110"
                            >
                                <img src={getAsset('arrow-right')} alt="Вперёд" className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-lg leading-tight transform transition-all duration-300">
                                {currentSlideData.title}
                            </h3>
                            <div className="flex items-center gap-1 text-sm whitespace-nowrap mt-1 transform transition-all duration-300">
                                <img src={getAsset('Vector')} alt="Площадь" className="h-4 w-4" />
                                <span>{currentSlideData.area}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-1 mt-3">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentSlide(index);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};