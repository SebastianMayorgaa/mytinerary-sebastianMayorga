import Carousel from "../Components/Carousel";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCities } from "../store/actions/citiesActions";
import { useEffect } from "react";


function Home() {
    const dispatch = useDispatch()
    const  {status} = useSelector((store) => store.city.citiesState)

    useEffect(() => {
        if (status === "idle"){
            dispatch(getCities())
        }
    },[dispatch, status])



    const navigate = useNavigate();

    function handleNavigate() {
        navigate("/cities");
    }

    // console.log("Cities in Home component:", cities);

    return (
        <>
            <div className="bg-orange-100/50 min-h-[80vh] pb-10">
                <div className="relative">
                    <img className="w-full h-[90vh] object-cover" src="../src/assets/across_the_globe.jpg" alt="" />
                    <div className="w-full h-full absolute text-white text-center inset-0 bg-black/50 flex-col content-center">
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

                    <Carousel/>
                </div>
            </div>
        </>
    );
}

export default Home;
