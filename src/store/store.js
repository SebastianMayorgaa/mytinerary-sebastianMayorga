import { configureStore } from "@reduxjs/toolkit";
import { cityReducer } from "./reducers/citiesReducer";
import { itinReducer } from "./reducers/itinerariesReducer";

const store = configureStore({
    reducer: {
        city: cityReducer,
        itinerary: itinReducer
    }
})

export default store