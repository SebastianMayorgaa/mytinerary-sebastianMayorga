import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSelector } from "react-redux";


function Carousel() {

    const cities = useSelector((store) => store.city.citiesState.cities)
    
    if (!cities || cities.length === 0) {
        return <p className="text-center">Loading Cities...</p>;
    }
    
    
    return (

        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            className="w-5/6 gap-4 px-10 pb-10 mb-20"
            breakpoints={{
                320: { slidesPerView: 1, slidesPerGroup: 1 },
                768: { slidesPerView: 2, slidesPerGroup: 2 },
                1024: { slidesPerView: 4, slidesPerGroup: 4 },
                1280: { slidesPerView: 4, slidesPerGroup: 4 },
            }}
        >
            {cities.map((city, index) => (
                <SwiperSlide key={index}>
                    <div className="relative block h-full">
                        <img className="w-full h-70 object-cover rounded-xl" src={city.photo} alt={city.name} />
                        <div className="absolute w-full inset-x-0 bottom-0 text-center bg-black/55 text-white p-2 rounded-br-xl rounded-bl-xl">
                            <h1 className="text-xl font-bold">{city.name}</h1>
                            <h3 className="text-lg">{city.country}</h3>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Carousel