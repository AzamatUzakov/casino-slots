import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const slides = [
    {
        id: 1,
        image:
            "https://avatars.mds.yandex.net/i?id=efce473c021cf60ad986f380ec14944124d2d106-11374844-images-thumbs&n=13",
        title: "Играйте и выигрывайте",
        desc: "Испытай удачу в лучших слотах онлайн-казино. Бонусы и фриспины ждут именно тебя!",
    },
    {
        id: 2,
        image:
            "https://avatars.mds.yandex.net/i?id=d00ef57806cdb70159f77667e0366a3887cd17e9-10385090-images-thumbs&n=13",
        title: "Новые слоты с высоким RTP",
        desc: "Каждую неделю новые игры с огромными шансами на победу и эксклюзивными фриспинами!",
    },
    {
        id: 3,
        image:
            "https://avatars.mds.yandex.net/i?id=19d20fed07a2fc629e7902611f7021fb3850436f-4576013-images-thumbs&n=13",
        title: "Огромные джекпоты",
        desc: "Почувствуй азарт и сорви куш! Миллионы в призах ждут своего победителя прямо сейчас.",
    },
    {
        id: 4,
        image:
            "https://avatars.mds.yandex.net/i?id=35bb141535ec8eb95f6f49e7afdb82a2a6c52ec6-5220549-images-thumbs&n=13",
        title: "Погрузись в мир азарта",
        desc: "Современные игры, мгновенные выплаты и шанс выиграть каждый день!",
    },
    {
        id: 5,
        image:
            "https://avatars.mds.yandex.net/i?id=615a2cb0556330c9c679514202d942a488c98407-4964375-images-thumbs&n=13",
        title: "Эксклюзивные бонусы",
        desc: "Активируй бонусы, получай золото и фриспины — выигрывай больше и чаще!",
    },
];

const SwiperSlides: React.FC = () => {
    return (
        <div className="w-full max-w-7xl mx-auto ">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="relative h-[300px] sm:h-[400px]  bg-gradient-to-r from-black/80 via-black/60 to-black/40 border border-casino-gold rounded-3xl p-6 sm:p-8 flex items-end shadow-xl overflow-hidden"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="absolute inset-0 bg-black/60 rounded-3xl"></div>
                            <div className="relative z-10 max-w-xl text-left space-y-3 sm:space-y-4">
                                <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-casino-gold drop-shadow-lg">
                                    {slide.title}
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                                    {slide.desc}
                                </p>
                                <button className="mt-3 sm:mt-4 bg-casino-gold text-black font-bold py-2 sm:py-3 px-5 sm:px-8 rounded-xl hover:bg-yellow-400 transition text-sm sm:text-base md:text-lg shadow-md">
                                    Получить бонус
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperSlides;
