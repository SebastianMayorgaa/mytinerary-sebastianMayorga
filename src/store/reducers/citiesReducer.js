import { createReducer } from "@reduxjs/toolkit";
import { changeSearch, getCities } from "../actions/citiesActions";


export const  StatusHttp = {
    IDLE: 'idle',
    SUCCESS: 'success',
}

const citiesState = {
    cities: [],
    status: StatusHttp.IDLE,
    error: null  
}

const initialState = {
    citiesState: citiesState,
    search: ""
}

export const cityReducer = createReducer(initialState, (builder) => {
    builder.addCase(changeSearch, (state, action) => {
        state.search = action.payload
    })

    builder.addCase(getCities.fulfilled,(state, action) => {
        const stateCities = state.citiesState
        stateCities.cities = action.payload
        stateCities.status = StatusHttp.SUCCESS  
    })
})