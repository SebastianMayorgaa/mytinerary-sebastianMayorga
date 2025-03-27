import { useParams, useNavigate } from "react-router-dom"

function City({ cities }) {
    const { id } = useParams()
    const city = cities.find(city => city._id === id)


    const navigate = useNavigate();

    function handleNavigate() {
        navigate("/cities");
    }

    return (
        <div className="flex flex-col items-center min-h-[75vh] bg-orange-100/50 justify-center pt-10">
            <div className="w-2/3 relative block h-[40vh]">
                <img className="w-full h-full object-cover rounded-xl" src={city.photo} alt={city.name} />
                <div className="absolute w-full inset-x-0 bottom-0 text-center bg-black/55 text-white p-2 rounded-br-xl rounded-bl-xl">
                    <h1 className="text-xl font-bold">{city.name}</h1>
                    <h3 className="text-lg">{city.country}</h3>
                </div>
            </div>


            <div className="min-h-[10vh] flex justify-center items-center mt-10 pt-10">
                <h1 className="text-center text-4xl">
                    ⚠️ ¡UNDER CONSTRUCTION! ⚠️
                </h1>

            </div>
            <button className="bg-yellow-700/30 p-4 text-xl rounded-full outline-black hover:bg-lime-900/40 mt-10 mb-10" onClick={handleNavigate}>
                Go back to Cities.
            </button>
        </div>
    )
}

export default City