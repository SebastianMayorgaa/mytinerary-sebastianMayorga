import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getItineraryByCity = createAsyncThunk('itinerary/getItineraries', async (cityId) => {

const itinerary = await axios.get(`http://localhost:8080/api/itineraries/city/${cityId}`)

return itinerary.data.response
})

export default getItineraryByCity

