import { assets } from '../modules/exports/assets';

interface MobileVideoCardProps {
    videoKey: string;
    title?: string;
    tag?: string;
    features: string[];
    linkText: string;
    showPlayIcon?: boolean;
    onVideoOpen: (videoSrc: string) => void;
}

export const MobileVideoCard: React.FC<MobileVideoCardProps> = ({
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
        <div className="bg-white rounded-2xl overflow-hidden">
            <div
                className="w-full h-48 bg-black rounded-2xl relative cursor-pointer"
                onClick={() => onVideoOpen(getAsset(videoKey) ?? '')}
            >
                <video
                    src={getAsset(videoKey)}
                    className="w-full h-full rounded-2xl object-cover"
                    playsInline
                    muted
                    loop
                    onError={handleVideoError}
                />
                <div className="absolute inset-0 bg-black rounded-2xl bg-opacity-40"></div>
                
                {tag && (
                    <div className="absolute top-3 left-3">
                        <div className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-800 border border-gray-200">
                            {tag}
                        </div>
                    </div>
                )}
                
                {showPlayIcon && (
                    <div className="absolute top-3 left-3 flex items-center">
                        <img src={getAsset('play')} alt="Play" className="mr-2" />
                        <div className="text-white px-3 py-1 rounded-full text-xs font-medium">
                            Видео о том, как<br /> создается идеальный дом
                        </div>
                    </div>
                )}
                
                <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-base leading-tight">
                        {title}
                    </h3>
                </div>
            </div>
            <div className="p-4">
                <div className="space-y-3 mb-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#578C62] flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                        </div>
                    ))}
                </div>
                <button className="text-[#578C62] text-sm font-medium flex items-center gap-1 active:scale-95 transition-transform duration-150">
                    {linkText}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};