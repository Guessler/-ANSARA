import { assets } from '../modules/exports/assets';
import { useState } from 'react';

interface Slide {
    imageKey: string;
    title: string;
    area: string;
    tag: string;
}

interface MobileProjectCardProps {
    slides: Slide[];
    initialSlide?: number;
}

export const MobileProjectCard: React.FC<MobileProjectCardProps> = ({ slides, initialSlide = 0 }) => {
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
        <div className="bg-white rounded-2xl overflow-hidden">
            <div className="w-full h-48 bg-black relative">
                <div
                    className="w-full h-full bg-cover bg-center transition-all duration-300"
                    style={{
                        backgroundImage: `url(${getAsset(currentSlideData.imageKey)})`,
                    }}
                />
                <div className="absolute inset-0 rounded-2xl bg-black bg-opacity-40"></div>
                <div className="absolute top-3 left-3">
                    <div className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-800 border border-gray-200">
                        {currentSlideData.tag}
                    </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-sm leading-tight">{currentSlideData.title}</h3>
                            <div className="flex items-center gap-1 text-xs whitespace-nowrap mt-1">
                                <img src={getAsset('Vector')} alt="Площадь" className="h-3 w-3" />
                                <span>{currentSlideData.area}</span>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prevSlide();
                                }}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#578C62] text-white active:scale-95 transition-transform duration-150"
                            >
                                <img src={getAsset('arrow-left')} alt="Назад" className="h-3 w-3" />
                            </button>
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    nextSlide();
                                }}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#578C62] text-white active:scale-95 transition-transform duration-150"
                            >
                                <img src={getAsset('arrow-right')} alt="Вперёд" className="h-3 w-3" />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center gap-1 mt-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentSlide(index);
                                }}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
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