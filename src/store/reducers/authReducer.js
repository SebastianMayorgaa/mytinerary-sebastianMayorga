import { createReducer } from "@reduxjs/toolkit";
import { signIn, setUser } from "../actions/authActions";

const initialState = {
    user: null,
    token : null,
    status : "idle",
    error : null
}

export const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(signIn.fulfilled, (state,action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.status = 'succeded';
    })
    builder.addCase(signIn.pending, (state) => {
      state.status = 'pending';
      state.error = null;
      state.user = null;
    })
    builder.addCase(signIn.rejected, (state,action) => {
      state.status = 'failed';
      state.error = action.payload;
      state.user = null;
      state.token = null;
    })
    builder.addCase(setUser, (state,action) => {
      state.user = action.payload.user
      state.token = action.payload.token;
    })
  })