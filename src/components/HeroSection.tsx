import { useState, useCallback } from 'react';
import { MobileNavigation } from './MobileNavigation';
import { HeroContent } from './HeroContent';
import { ProjectCard } from './ProjectCard';
import { VideoCard } from './VideoCard';
import { MobileVideoCard } from './MobileVideoCard';
import { MobileProjectCard } from './MobileProjectCard';
import { VideoPlayer } from './VideoPlayer';

type VideoAsset = string;

export const HeroSection: React.FC = () => {
    const [selectedVideo, setSelectedVideo] = useState<VideoAsset | null>(null);

    const openVideo = useCallback((videoSrc: VideoAsset) => {
        if (videoSrc) setSelectedVideo(videoSrc);
    }, []);

    const closeVideoPlayer = useCallback(() => {
        setSelectedVideo(null);
    }, []);

    const projectSlides = [
        {
            imageKey: "c1975e4e11c5e41a423e7608967a0d97269089dc",
            title: "Дом из клееного бруса «Истра»",
            area: "137 м²",
            tag: "Наши авторские проекты"
        },
        {
            imageKey: "ce1d7d8296d4b80a15f6dc6130cedb08eba0bfe6",
            title: "Загородный дом «Еловый»",
            area: "145 м²",
            tag: "Премиум класс"
        },
        {
            imageKey: "e23b20492f6f528bb4d78ef21056c722b7fd3024",
            title: "Коттедж «Лесной»",
            area: "120 м²",
            tag: "Эконом вариант"
        }
    ];

    return (
        <section className="py-4 xs:px-4 bg-white font-sans">
            <div className="container mx-auto mt-10 mb-32 md:mb-0">
                <HeroContent />

                {selectedVideo && <VideoPlayer videoSrc={selectedVideo} onClose={closeVideoPlayer} />}

                <div className="hidden md:block">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
                        <ProjectCard
                            slides={projectSlides}
                            initialSlide={0}
                        />

                        <VideoCard
                            videoKey="bann1"
                            title="Посмотрите, как выглядит наши дома вживую"
                            tag="2 выставочные площадки"
                            features={[
                                "Москва, 51-й км МКАД",
                                "Наро-фоминск"
                            ]}
                            linkText="Подробнее про выставочные площадки"
                            onVideoOpen={openVideo}
                        />

                        <VideoCard
                            videoKey="les3"
                            features={[
                                "Собственная лесозаготовка",
                                "4 цеха в Архангельской области"
                            ]}
                            linkText="Подробнее о нашей лесозаготовке"
                            showPlayIcon={true}
                            onVideoOpen={openVideo}
                        />
                    </div>
                </div>

                <div className="md:hidden">
                    <div className="space-y-8 mt-16">
                        <MobileVideoCard
                            videoKey="bann1"
                            title="Посмотрите, как выглядит наши дома вживую"
                            tag="2 выставочные площадки"
                            features={[
                                "Москва, 51-й км МКАД",
                                "Наро-фоминск"
                            ]}
                            linkText="Подробнее про выставочные площадки"
                            onVideoOpen={openVideo}
                        />

                        <MobileVideoCard
                            videoKey="les3"
                            features={[
                                "Собственная лесозаготовка",
                                "4 цеха в Архангельской области"
                            ]}
                            linkText="Подробнее о нашей лесозаготовке"
                            showPlayIcon={true}
                            onVideoOpen={openVideo}
                        />

                        <MobileProjectCard
                            slides={projectSlides}
                            initialSlide={0}
                        />
                    </div>
                </div>
            </div>

            <MobileNavigation />
        </section>
    );
};