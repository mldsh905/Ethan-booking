import React from 'react'
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Subscribe from "../../components/footer/subscribe";
import Links from "../../components/footer/links";
import HotelBody from "../../components/hotels/hotelBody";
import {useLocation} from "react-router";

function Hotel() {
    const props = useLocation();

    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <HotelBody props={props.state}/>
            <Subscribe/>
            <Links/>
        </div>
    )
}

export default Hotel