import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        user: false,
        register: false,
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        setRegister(state, action) {
            state.register = action.payload;
        },
    }
})

export const {setUser, setRegister} = userSlice.actions;
export const {reducer: userReducer} = userSlice;