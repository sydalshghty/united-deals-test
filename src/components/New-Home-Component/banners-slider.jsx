import banner1 from "../../assets/banner-1.avif";
import banner2 from "../../assets/banner-2.avif";
import banner3 from "../../assets/banner-3.avif";
import banner4 from "../../assets/banner-4.avif";
import banner5 from "../../assets/banner-5.avif";
import banner6 from "../../assets/banner-6.avif";
import banner7 from "../../assets/banner-7.avif";
import banner8 from "../../assets/banner-8.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
function BannerSlider() {
    const allbanners = [
        { id: 1, img: banner1 },
        { id: 2, img: banner2 },
        { id: 3, img: banner3 },
        { id: 4, img: banner4 },
        { id: 5, img: banner5 },
        { id: 6, img: banner6 },
        { id: 7, img: banner7 },
        { id: 8, img: banner8 }
    ]
    return (
        <section className="w-full h-full banners-slider-departament">
            <Swiper
                slidesPerView={1}
                speed={500}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="flex items-center justify-center w-full h-full"
            >

                {allbanners.map((banner, index) => {
                    return (
                        <SwiperSlide key={banner.id}>
                            <img src={banner.img} alt="banner-img" className="w-full h-full" />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}
export default BannerSlider;