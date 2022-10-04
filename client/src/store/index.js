// import {configureStore} from "@reduxjs/toolkit";
// import {roomReducer} from "./roomSlice";
// import {dateReducer} from "./dateSlice";
//
// const store = configureStore({
//     reducer:{
//         room: roomReducer,
//         date: dateReducer
//     }
// })
//
// export default store

import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from "redux";
import {persistReducer} from 'redux-persist';
import {roomReducer} from "./roomSlice";
import {dateReducer} from "./dateSlice";
import {userReducer} from "./user";
import thunk from 'redux-thunk';

const reducers = combineReducers({
    room: roomReducer,
    date: dateReducer,
    user: userReducer,
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: persistedReducer,
    // devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export default store;
