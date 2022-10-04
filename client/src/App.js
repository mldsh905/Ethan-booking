import {Routes, Route, Link} from "react-router-dom";
import React from 'react'
import "./app.css";
import Home from "./pages/home/home";
import List from "./pages/list/list";
import Hotel from "./pages/hotel/hotel";
import store from "./store";
import Test from "./components/test/test";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import { persistStore } from 'redux-persist'
import Login000 from "./pages/login/login000";
import Login from "./pages/login/login";
import Register from "./pages/login/register";
import ListProperty from "./pages/listProp/listProperty";
let persistor = persistStore(store);


function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/listProperty" element={<ListProperty/>}/>
                    <Route path="/login000" element={<Login000/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/hotels" element={<Hotel/>}/>
                    <Route path="/hotels/:id" element={<List/>}/>
                    <Route path="/hotels/find/findByParam" element={<Test/>}/>
                </Routes>
            </div>
            </PersistGate>
        </Provider>

    );
}


export default App;
