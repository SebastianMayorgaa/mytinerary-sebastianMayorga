import { useState } from "react";
import { NavLink } from "react-router-dom";
import useFetch from "../Components/useFetch";
import SearchBar from "../Components/SearchBar";

function Cities() {
    const { cities, loading } = useFetch("http://localhost:8080/api/cities/allCities");
    const [search, setSearch] = useState("");

    function searchChange(e) {
        setSearch(e.target.value);
    }

    const filteredCities = cities.filter((city) =>
        city.name.toLowerCase().startsWith(search.toLowerCase())
    )


    return (
        <div className="bg-orange-100/50 min-h-[80vh] pb-10">
            <div className="relative">
                <img
                    className="w-full h-[60vh] object-cover"
                    src="https://media.admagazine.com/photos/67856be5207229b76541e686/16:9/w_2560%2Cc_limit/que-hacer-en-cdmx-2025.jpg"
                    alt=""
                />
                <div className="w-full h-full absolute text-white text-center inset-0 bg-black/30 flex-col content-center">
                    <h1 className="text-5xl m-5">Cities</h1>
                    <h3 className="text-2xl mb-8 mx-10">
                        Are you ready to explore another culture? Lets go!
                    </h3>
                    <SearchBar search={search} searchChange={searchChange} />
                </div>
            </div>

            <div>
                {loading ? (
                    <p className="text-center text-lg mt-10">Loading cities...</p>
                ) : (
                    <div className="flex flex-wrap justify-center gap-7 mt-5 p-5">
                        {filteredCities.length > 0 ? (
                            filteredCities.map((city) => (
                                <div key={city._id} className="relative block h-full hover:scale-105">
                                    <NavLink to={`/city/${city._id}`}>
                                        <img
                                            className="w-sm h-70 object-cover rounded-xl"
                                            src={city.photo}
                                            alt={city.name}
                                        />
                                        <div className="absolute w-full h-full inset-x-0 bottom-0 text-center bg-black/35 text-white rounded-xl flex flex-col justify-center">
                                            <h1 className="text-2xl font-bold">{city.name}</h1>
                                            <h3 className="text-lg">{city.country}</h3>
                                            <h3 className="text-lg mt-5 pt-5 underline">View Details</h3>
                                        </div>
                                    </NavLink>
                                </div>
                            ))
                        ) : (
                            <p className="text-center col-span-full text-gray-600 text-xl">
                                Sorry, there are no upcoming itineraries for this city at the moment. Check back soon!
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}


export default Cities;
