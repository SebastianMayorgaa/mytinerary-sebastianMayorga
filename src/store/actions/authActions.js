import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signIn = createAsyncThunk('auth/signIn', async ({ email, password }, { rejectWithValue }) => {
    try {
        const user = { email, password }
        const response = await axios.post('http://localhost:8080/api/auth/signIn', user)
        console.log(response.data);
        localStorage.setItem('token', response.data.token)


        return response.data
    } catch (error) {
        if (error.response) {
            return rejectWithValue(error.response.data.message)
        }
        return rejectWithValue("Login error")
    }
})

export const setUser = createAction('auth/setUser')