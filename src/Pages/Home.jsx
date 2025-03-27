import useFetch from "../Components/useFetch";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Home() {
    const navigate = useNavigate();
    const { cities, loading } = useFetch("http://localhost:8080/api/cities/allCities")

    function handleNavigate() {
        navigate("/cities");
    }

    console.log("Cities in Home component:", cities);

    return (
        <>
            <div className="bg-orange-100/50 min-h-[80vh] pb-10">
                <div className="relative">
                    <img className="w-full h-[90vh] object-cover" src="../src/assets/across_the_globe.jpg" alt="" />
                    <div className="w-full h-full absolute text-white text-center inset-0 bg-black/60 flex-col content-center">
                        <h1 className="text-4xl m-5">My Tineraries</h1>
                        <h3 className="text-2xl mb-8 mx-10">
                            Find your perfect trip, designed by insiders who know and love their cities.
                        </h3>
                        <button className="px-6 py-2 text-xl border-2 rounded-full outline-black hover:bg-yellow-900/70" onClick={handleNavigate}>
                            Check Cities
                        </button>
                    </div>
                </div>

                <div className="min-h-[70vh] flex-col justify-items-center">
                    <div className="w-4/6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
                        <h1 className="text-center text-3xl mt-10 py-6">Your Next Adventure Awaits!</h1>
                        <p className="text-center text-lg ">
                            Ready to explore the world? Click now and uncover stunning destinations, hidden gems, and unforgettable experiences.
                            The perfect trip is just one click away. Where will you go next?
                        </p>
                        <button className="bg-yellow-700/30 p-4 text-xl rounded-full outline-black hover:bg-lime-900/40 mb-20" onClick={handleNavigate}>
                            ¡Choose your next destination!
                        </button>
                    </div>
                    <h1 className="text-2xl mb-4 text-yellow-600">Popular Mytineraries</h1>
                    {loading && <p className="text-center text-lg">Loading cities...</p>}

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
                </div>
            </div>
        </>
    );
}

export default Home;
