import { assets } from '../modules/exports/assets';

interface VideoCardProps {
    videoKey: string;
    title?: string;
    tag?: string;
    features: string[];
    linkText: string;
    showPlayIcon?: boolean;
    onVideoOpen: (videoSrc: string) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ 
    videoKey, 
    title, 
    tag, 
    features, 
    linkText, 
    showPlayIcon = false,
    onVideoOpen 
}) => {
    const getAsset = (key: string): string | undefined => {
        return assets[key] ?? undefined;
    };

    const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
        console.error('Video preview loading error:', e);
    };

    return (
        <div
            className="rounded-2xl overflow-hidden bg-white transition-all duration-500 cursor-pointer relative group transform hover:scale-105 hover:-translate-y-2"
            style={{ height: '390px' }}
        >
            <div
                className="w-full h-[280px] bg-black relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => onVideoOpen(getAsset(videoKey) ?? '')}
            >
                <video
                    src={getAsset(videoKey)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    playsInline
                    muted
                    loop
                    onError={handleVideoError}
                />
                <div className="absolute inset-0 rounded-2xl bg-black bg-opacity-40 group-hover:bg-opacity-10 transition-all duration-500"></div>
                
                {tag && (
                    <div className="absolute top-4 left-4">
                        <div className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-800 border border-gray-200 transform group-hover:scale-105 transition-transform duration-300">
                            {tag}
                        </div>
                    </div>
                )}
                
                {showPlayIcon && (
                    <div className="absolute top-4 left-4 flex items-center">
                        <img src={getAsset('play')} alt="Play" className="mr-2 transform group-hover:scale-110 transition-transform duration-300" />
                        <div className="px-3 py-1 text-sm font-semibold text-white transform group-hover:scale-105 transition-transform duration-300">
                            Видео о том, как<br /> создается идеальный дом
                        </div>
                    </div>
                )}
                
                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-2 leading-tight transform group-hover:translate-x-1 transition-transform duration-300">
                        {title}
                    </h3>
                </div>
            </div>
            <div className="py-5 px-4">
                <ul className="space-y-2 mb-5">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-700 transform group-hover:translate-x-1 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#578C62]" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
                <button className="text-[#578C62] text-sm font-medium hover:text-[#4a7753] flex items-center gap-1 transition-all duration-300 transform group-hover:translate-x-1 group-hover:scale-105">
                    {linkText}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};