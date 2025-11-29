import { assets } from '../modules/exports/assets';

export const MobileNavigation: React.FC = () => {
    const navItems = [
        { icon: 'Icon (6)', label: 'Главная' },
        { icon: 'Icon (7)', label: 'Проекты' },
        { icon: 'Icon (8)', label: 'Медиа' },
        { icon: 'Vector (4)', label: 'Компания' },
        { icon: 'Icon (9)', label: 'Клиентам' }
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 md:hidden">
            <div className="container mx-auto px-4">
                <div className="flex justify-around py-3">
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            className="flex flex-col items-center gap-1 text-xs text-gray-700 active:text-[#578C62] transition-colors duration-150"
                        >
                            <img src={assets[item.icon]} alt={item.label} />
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};