import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signIn = createAsyncThunk('auth/signIn', async ({ email, password }, { rejectWithValue }) => {
    try {
        const user = { email, password }
        const response = await axios.post('https://mytinerary-back-sebastianmayorga.onrender.com/api/auth/signIn', user)
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

export const signUp = createAsyncThunk('auth/signUp', async(userData, {rejectWithValue}) => {
    try {
        const response = await axios.post('https://mytinerary-back-sebastianmayorga.onrender.com/api/users/registerUser', userData);
        console.log(response.data);
        localStorage.setItem('token', response.data.token);

        return response.data;
    } catch (error) {
        console.log(error.response.data.message);
      
        if (error.response) {
          if (Array.isArray(error.response.data.message)) {
            const dataErrors = {};
      
            error.response.data.message.forEach((err) => {
              
              const match = err.match(/"(\w+)"/)
              if (match) {
                const data = match[1]
                dataErrors[data] = err
              }
            });
      
            return rejectWithValue(dataErrors);
          }
          return rejectWithValue({ general: error.response.data.message });
        }
        return rejectWithValue({ general: "Register error" });
      }
      
})

export const signOut = createAsyncThunk('auth/signOut', async (email, { rejectWithValue, getState }) => {
    try {
        const state = getState();
        const token = state.auth.token || localStorage.getItem('token')

        const response = await axios.post(
            'https://mytinerary-back-sebastianmayorga.onrender.com/api/auth/signOut',
            { email },
            { headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        localStorage.clear();
        return response.data;
    } catch (error) {
        console.error(error);
        return rejectWithValue(error.response?.data?.message || "Logout failed");
    }
});