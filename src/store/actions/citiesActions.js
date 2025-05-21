import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const changeSearch = createAction('city/changeSearch')

const getCities = createAsyncThunk('city/getCities', async () => {
    const cities = await axios.get('https://mytinerary-back-sebastianmayorga.onrender.com/api/cities/allCities',)
    console.log(cities.data.response);
    
    
    return cities.data.response
})

export {changeSearch, getCities}