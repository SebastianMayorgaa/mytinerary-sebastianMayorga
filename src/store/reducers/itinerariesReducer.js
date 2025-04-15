import { createReducer } from "@reduxjs/toolkit";
import getItineraryByCity from "../actions/itinerariesActions";

export const  StatusHttp = {
    IDLE: 'idle',
    SUCCESS: 'success',
}

const itineraryState = {
    itineraries: [],
    status: StatusHttp.IDLE,
    error: null  
}

const initialState = {
    itineraryState: itineraryState,
}

export const itinReducer = createReducer(initialState, (builder) => {
    builder.addCase(getItineraryByCity.fulfilled, (state, action) => {
        const stateitineraries = state.itineraryState
        stateitineraries.itineraries = action.payload
        stateitineraries.status = StatusHttp.SUCCESS
    })
})
