import { useEffect } from 'react';

type VideoAsset = string;

interface VideoPlayerProps {
    videoSrc: VideoAsset | null;
    onClose: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc, onClose }) => {
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
        console.error('Video loading error:', e);
    };

    useEffect(() => {
        const handleEscKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    if (!videoSrc) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
        >
            <div className="relative w-full max-w-6xl">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-2xl hover:bg-gray-800 z-10 transition-all duration-200 hover:scale-110"
                    aria-label="Закрыть видео"
                >
                    ✕
                </button>
                <video
                    src={videoSrc}
                    className="w-full h-auto rounded-lg shadow-2xl"
                    controls
                    autoPlay
                    onError={handleVideoError}
                />
            </div>
        </div>
    );
};