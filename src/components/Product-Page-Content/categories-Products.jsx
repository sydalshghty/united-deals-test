import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
function CategoriesProducts() {
    const [categories, setCategories] = useState([]);

    const getAllCategories = async () => {
        const res = await fetch(`https://dummyjson.com/products/category-list`);

        const data = await res.json();

        setCategories(data);
    }
    useEffect(() => {
        getAllCategories();
    }, []);

    console.log(categories);

    return (
        <section className="w-full h-full categories-section border-t-[1px] border-borderColor">
            <div className="container min-w-[100%] h-full">
                <div className="all-categories w-full h-[69px] flex  items-center">
                    <>
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={4}
                            spaceBetween={20}
                            speed={500}
                            loop={true}
                            autoplay={
                                { delay: 2000, pauseOnMouseEnter: true }
                            }
                            breakpoints={{
                                450: { slidesPerView: 3 },
                                600: { slidesPerView: 4 },
                                650: { slidesPerView: 5 },
                                1400: { slidesPerView: 8 },
                                1600: { slidesPerView: 9 },

                            }}
                        >
                            {categories.map((category, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="col-category cursor-pointer min-w-fit h-9 bg-bgColor pt-[9px] pb-[9px] pl-[14px] pr-[14px] rounded-[18px] flex justify-center items-center">
                                            <p className="text-sm font-medium text-center capitalize min-w-fit text-colorCategories">{category}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                            }
                        </Swiper>
                    </>
                </div>
            </div>
        </section>
    )
}
export default CategoriesProducts;