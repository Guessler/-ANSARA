import { motion } from "framer-motion";
import { assets } from "../modules/exports/assets";

export const Header = () => {
    const menuItems = [
        { label: 'Проекты', submenu: ['Проект 1', 'Проект 2'] },
        { label: 'Наше производство', submenu: ['Цех 1', 'Цех 2'] },
        { label: 'Фото и видео', submenu: ['Галерея', 'Видео'] },
        { label: 'Новости', submenu: null },
        { label: 'Для клиентов', submenu: ['Частным лицам', 'Бизнесу'] },
        { label: 'О компании', submenu: ['История', 'Команда'] },
        { label: 'Услуги', submenu: ['Доставка', 'Монтаж'] },
    ];

    // Анимация для появления элементов
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    const buttonVariants = {
        initial: { scale: 1 },
        hover: { 
            scale: 1.05,
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.95 }
    };

    const submenuVariants = {
        hidden: { 
            opacity: 0, 
            y: 10,
            transition: {
                duration: 0.2
            }
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <motion.header 
            className="bg-white sm:px-4 py-3 relative z-50 font-sans"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="sm:container mx-auto flex items-center justify-between gap-4">
                <div className="flex-shrink-0 flex items-center gap-10">
                    <motion.img
                        src={assets['logo_fin_1']}
                        alt="ЭКО-ТЕХ Деревянные дома"
                        className="h-10 md:h-12 w-auto"
                        variants={itemVariants}
                    />
                    <motion.button 
                        className="items-center xs:flex hidden gap-2 px-4 py-2 rounded-full bg-[#EAE3E1]/60 hover:bg-gray-100 transition-colors"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <img src={assets['burger']} alt="" className="h-4 w-4" />
                        <span className="text-sm font-sans">Меню</span>
                    </motion.button>
                </div>

                <motion.nav 
                    className="hidden xl:flex items-center gap-6 font-medium text-gray-700 font-sans"
                    variants={containerVariants}
                >
                    {menuItems.map((item) =>
                        item.submenu ? (
                            <motion.div 
                                key={item.label} 
                                className="relative group"
                                variants={itemVariants}
                            >
                                <motion.button 
                                    className="flex items-center gap-1 hover:text-green-600 transition-colors font-sans group"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    {item.label}
                                    <svg 
                                        width="9" 
                                        height="5" 
                                        viewBox="0 0 9 5" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="group-hover:stroke-green-600 transition-transform duration-200 group-hover:rotate-180"
                                    >
                                        <path 
                                            d="M0.75 0.75L4.25 4.25L7.75 0.75" 
                                            stroke="currentColor" 
                                            strokeWidth="1.5" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                        />
                                    </svg>
                                </motion.button>
                                <motion.div 
                                    className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10"
                                    variants={submenuVariants}
                                    initial="hidden"
                                    whileHover="visible"
                                >
                                    {item.submenu.map((sub) => (
                                        <motion.a
                                            key={sub}
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-sans"
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {sub}
                                        </motion.a>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ) : (
                            <motion.button 
                                key={item.label} 
                                className="hover:text-green-600 transition-colors font-sans"
                                variants={itemVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                {item.label}
                            </motion.button>
                        )
                    )}
                </motion.nav>

                <motion.div 
                    className="flex items-center gap-4 xl:gap-6 font-sans"
                    variants={containerVariants}
                >
                    <motion.a
                        href="tel:88003339191"
                        className="font-semibold text-gray-800 xs:block hidden hover:text-green-600 transition-colors whitespace-nowrap font-sans"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        8 (800) 333-91-91
                    </motion.a>

                    <motion.button 
                        className="w-10 h-10 xs:hidden flex items-center justify-center rounded-full bg-[#EAE3E1]/60 hover:bg-gray-100 transition-colors"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <img src={assets['phone']} alt="Телефон" className="h-4 w-4" />
                    </motion.button>

                    <motion.button 
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EAE3E1]/60 hover:bg-gray-100 transition-colors"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <img src={assets['loop']} alt="Поиск" className="h-4 w-4" />
                    </motion.button>

                    <motion.button 
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EAE3E1]/60 hover:bg-gray-100 transition-colors"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <img src={assets['like']} alt="Избранное" className="h-4 w-4" />
                    </motion.button>

                    <motion.button 
                        className="w-10 h-10 xs:hidden flex items-center justify-center rounded-full bg-[#EAE3E1]/60 hover:bg-gray-100 transition-colors"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <img src={assets['burger']} alt="Бургер" className="h-4 w-4" />
                    </motion.button>
                </motion.div>
            </div>
        </motion.header>
    );
};