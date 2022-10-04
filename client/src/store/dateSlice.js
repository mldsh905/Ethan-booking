import {createSlice} from "@reduxjs/toolkit";
import {addDays, format} from "date-fns";

const dateSlice = createSlice({
    name: 'dateSlice',
    initialState: {
        startDate: format(new Date(), 'yyyy/MM/dd'),
        endDate: format(addDays(new Date(), 1),'yyyy/MM/dd'),
    },
    reducers:{
        setDate(state, action){
            state.startDate = action.payload.startDate;
            state.endDate = action.payload.endDate
        }
    }
})

export const {setDate} = dateSlice.actions;
export const {reducer: dateReducer} = dateSlice;