import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getItineraryByCity = createAsyncThunk('itinerary/getItineraries', async (cityId) => {

const itinerary = await axios.get(`https://mytinerary-back-sebastianmayorga.onrender.com/api/itineraries/city/${cityId}`)

return itinerary.data.response
})

export default getItineraryByCity

