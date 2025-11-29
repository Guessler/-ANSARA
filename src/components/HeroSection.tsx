import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

    // Исправленные анимации с правильными типами
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.6,
                delayChildren: 0.4
            }
        }
    };

    // Анимация "выпрыгивания из низа" для карточек - исправленная версия
    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 150,
            scale: 0.7
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 60,
                damping: 12,
                mass: 0.8,
                delay: i * 0.3,
                duration: 1.2
            }
        })
    };

    const mobileContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                delayChildren: 0.3
            }
        }
    };

    const mobileItemVariants = {
        hidden: { 
            opacity: 0, 
            y: 120,
            scale: 0.8
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 50,
                damping: 12,
                delay: i * 0.2,
                duration: 1
            }
        })
    };

    return (
        <motion.section 
            className="py-4 xs:px-4 bg-white font-sans"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="container mx-auto mt-10 mb-32 md:mb-0">
                <HeroContent />

                {/* Видеоплеер без анимации */}
                <AnimatePresence>
                    {selectedVideo && (
                        <VideoPlayer videoSrc={selectedVideo} onClose={closeVideoPlayer} />
                    )}
                </AnimatePresence>

                {/* 3 карточки с анимацией "выпрыгивания из низа" - исправленная версия */}
                <div className="hidden md:block">
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24"
                        variants={containerVariants}
                    >
                        {/* Первая карточка - растягиваем на всю ширину на md и занимает 2 колонки на lg */}
                        <motion.div 
                            className="md:col-span-2 lg:col-span-1"
                            variants={cardVariants}
                            custom={0}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ 
                                y: -5, 
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <ProjectCard
                                slides={projectSlides}
                                initialSlide={0}
                            />
                        </motion.div>

                        <motion.div 
                            variants={cardVariants}
                            custom={1}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ 
                                y: -5, 
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                        >
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
                        </motion.div>

                        <motion.div 
                            variants={cardVariants}
                            custom={2}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ 
                                y: -5, 
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                        >
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
                        </motion.div>
                    </motion.div>
                </div>

                {/* Мобильные карточки с аналогичной анимацией */}
                <div className="md:hidden">
                    <motion.div 
                        className="space-y-8 mt-16"
                        variants={mobileContainerVariants}
                    >
                        <motion.div 
                            variants={mobileItemVariants}
                            custom={0}
                            initial="hidden"
                            animate="visible"
                        >
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
                        </motion.div>

                        <motion.div 
                            variants={mobileItemVariants}
                            custom={1}
                            initial="hidden"
                            animate="visible"
                        >
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
                        </motion.div>

                        <motion.div 
                            variants={mobileItemVariants}
                            custom={2}
                            initial="hidden"
                            animate="visible"
                        >
                            <MobileProjectCard
                                slides={projectSlides}
                                initialSlide={0}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <MobileNavigation />
        </motion.section>
    );
};