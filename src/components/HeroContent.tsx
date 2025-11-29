export const HeroContent: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 lg:mt-14 mb-8">
            <div className="flex-1 max-w-2xl">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 leading-tight">
                    Мы — лидеры рынка России <br /> по строительству деревянных домов
                </h1>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Сами заготавливаем северный лес в Архангельской области, а потом строим дом «под ключ».
                    Построили 302 дома за 2024 год. Всего же за 26 лет построили свыше 5000 домов.
                </p>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto">
                <button className="px-6 py-3 bg-[#578C62] text-white rounded-full font-medium hover:bg-[#4a7753] transition-all duration-300 transform hover:scale-105 w-full md:w-auto">
                    Рассчитать стоимость дома
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 w-full md:w-auto">
                    Задать вопрос в WhatsApp
                </button>
                <p className="text-xs text-gray-500 text-center">Ответим в течение 10 минут</p>
            </div>
        </div>
    );
};