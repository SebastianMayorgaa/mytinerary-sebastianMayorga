import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import Itineraries from "../Components/Itineraries"
import getItineraryByCity from "../store/actions/itinerariesActions"

function City() {
    const { id } = useParams()
    const dispatch = useDispatch()

    const cities = useSelector(state => state.city.citiesState?.cities || [])

    const city = cities.find(city => city._id === id)

    const itineraries = useSelector(state => state.itinerary.itineraryState.itineraries)
    console.log("Data en componente City:",itineraries);
    

    useEffect(() => {
        if (id) {
            dispatch(getItineraryByCity(id))
        }
    }, [id, dispatch])

    const navigate = useNavigate();

    function handleNavigate() {
        navigate("/cities");
    }

    return (
        <div className="flex flex-col items-center min-h-[75vh] bg-orange-100/50 justify-center">
            <div className="w-full relative block h-[75vh]">
                <img className="w-full h-full object-cover" src={city.photo} alt={city.name} />
                <div className="absolute w-full inset-x-0 bottom-1/2 text-center bg-black/55 text-white p-2">
                    <h1 className="text-5xl font-bold">{city.name}</h1>
                    <h3 className="text-2xl">{city.country}</h3>
                </div>
            </div>

<h1 className="text-5xl text-yellow-900 font-semibold italic mt-8">Itineraries:</h1>
            

            <div className="min-h-[10vh] flex justify-center items-center mt-10">
               
               <Itineraries itineraries={itineraries} />
        
            </div>
            <button className="bg-yellow-700/30 p-4 text-xl rounded-full outline-black hover:bg-lime-900/40 mt-10 mb-10" onClick={handleNavigate}>
                Go back to Cities.
            </button>
        </div>
    )
}

export default City