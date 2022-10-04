import React from 'react'
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Subscribe from "../../components/footer/subscribe";
import Links from "../../components/footer/links";
import HotelDetail from "../../components/hotelDetail/hotelDetail";
import {useParams} from "react-router";

function List() {
    const {id} = useParams();
    console.log(id);
    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <HotelDetail/>
            <Subscribe/>
            <Links/>
        </div>
    )
}

export default List