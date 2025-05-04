import { configureStore } from "@reduxjs/toolkit";
import { cityReducer } from "./reducers/citiesReducer";
import { itinReducer } from "./reducers/itinerariesReducer";
import { authReducer } from "./reducers/authReducer";

const store = configureStore({
    reducer: {
        city: cityReducer,
        itinerary: itinReducer,
        auth: authReducer
    }
})

export default store