import { useState } from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

function Itineraries({ itineraries }) {

    const [openCardId, setOpenCardId] = useState()
    const [liked, setLiked] = useState([])

    const handleToggle = (id) => {
        setOpenCardId(prevId => (prevId === id ? null : id))
    }

    const toggleLike = (id) => {
        setLiked(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    return (
        <div>{
            <div className="grid grid-rows-1 justify-center gap-8 mt-5 p-5">
                {itineraries.length > 0 ? (
                    itineraries.map((itinerary) => (
                        <div key={itinerary._id} className="relative block h-full transition-all duration-500 ease-in-out hover:scale-105 bg-[#706D54] rounded-xl text-white">
                            <div className="relative">
                                <img
                                    className="w-xl h-70 object-cover rounded-t-xl"
                                    src={itinerary.itineraryPhoto}
                                    alt={itinerary.itineraryName}
                                />
                                <button
                                    onClick={() => toggleLike(itinerary._id)}
                                    className="text-white text-2xl absolute inset-x-5 top-5 flex items-center bg-black/30 w-16 rounded-xl justify-center gap-1"
                                >
                                    {liked.includes(itinerary._id)
                                        ? <FaHeart className="text-white" />
                                        : <FaRegHeart />}
                                    <span className="text-base">
                                        {liked.includes(itinerary._id) ? 1 : 0}
                                    </span>
                                </button>
                            </div>
                            <div className=" w-full h-50 text-center flex justify-around rounded-b-xl p-5 italic">
                                <div className="text-white">
                                    <img className="h-20 w-20 rounded-xl"
                                        src={itinerary.userPhoto} alt={itinerary.userName} />
                                    <p className="w-20 pt-5">
                                        Created By: {itinerary.userName}</p>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-2xl font-bold underline">
                                        {itinerary.itineraryName}</h1>
                                    <div className="flex justify-around mt-5">
                                        <span className="w-20 text-lg flex items-center">
                                            <FaMoneyBillWave />${itinerary.price}</span>
                                        <span className="w-20 text-lg flex items-center">
                                            <IoTimeOutline />{itinerary.duration}h</span>
                                    </div>
                                    <div className="flex justify-around">
                                        {itinerary.hashtags.map((hashtag, i) => (
                                            <span key={i} className="bg-yellow-600/40 rounded-xl mt-5 p-1">
                                                {hashtag}
                                            </span>
                                        ))}
                                    </div>

                                    <button
                                        className="mt-4 text-[#C9B194] font-semibold hover:underline"
                                        onClick={() => handleToggle(itinerary._id)}>
                                        {openCardId === itinerary._id ? "Hide Details" : "View Details"}
                                    </button>

                                </div>

                            </div>
                            {openCardId === itinerary._id && (
                                <div className="h-24 mt-4 bg-white/80 text-black rounded-lg p-4 text-left shadow-lg transition-all duration-300">
                                    <h1 className="text-center text-4xl">
                                        ⚠️ ¡UNDER CONSTRUCTION! ⚠️
                                    </h1>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-600 text-xl">
                        Sorry, there are no upcoming itineraries for this city at the moment. Check back soon!
                    </p>
                )}
            </div>
        }
        </div>
    )
}

export default Itineraries