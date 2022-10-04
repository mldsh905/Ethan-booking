import {createSlice} from "@reduxjs/toolkit";

const roomSlice = createSlice({
    name: 'roomSlice',
    initialState: {
        adult: 2,
        children: 0,
        room: 1
    },
    reducers: {
        addAdult(state, action) {
            state.adult++
        },
        subAdult(state, action) {
            state.adult--
        },
        addChildren(state, action) {
            state.children++
        },
        subChildren(state, action) {
            state.children--
        },
        addRoom(state, action) {
            state.room++
        },
        subRoom(state, action) {
            state.room--
        },
        setRoom(state, action) {
            state.room = action.payload
        }
    }
})

export const {addAdult, addChildren, addRoom, subAdult, subChildren,setRoom, subRoom} = roomSlice.actions;
export const {reducer: roomReducer} = roomSlice;
