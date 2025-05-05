import { createReducer } from "@reduxjs/toolkit";
import { signIn, signUp, signOut,} from "../actions/authActions";

const initialState = {
    user:  null,
    token: null,
    status: "idle",
    error: null
}

export const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.status = 'succeeded';
    })
    builder.addCase(signIn.pending, (state) => {
        state.status = 'pending';
        state.error = null;
        state.user = null;
    })
    builder.addCase(signIn.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.user = null;
        state.token = null;
    })

    builder.addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.status = 'succeeded';
    })
    builder.addCase(signUp.pending, (state) => {
        state.status = 'pending';
        state.error = null;
    })
    builder.addCase(signUp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
    })

    builder.addCase(signOut.fulfilled, (state) => {
        state.status = "idle";
        state.user = null;
        state.token = null;
        state.error = null;
    })
    builder.addCase(signOut.pending, (state) => {
        state.status = "pending";
    })

    builder.addCase(signOut.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
    });
})