import React, {useState} from 'react';
import axios from "axios";
import {useLocation, useParams} from "react-router";
import Navbar from "../navbar/navbar";
import Header from "../header/header";
import Subscribe from "../footer/subscribe";
import Links from "../footer/links";
import SearchItemByType from "../hotels/searchItem";

const Test = () => {
    const [type,setType] = useState([]);
    const params = new URLSearchParams(useLocation().search);
    axios.get('http://localhost:8800/hotels/find/findByParam',{params:{type:params.get('type')}})
        .then(res=> setType(res.data)).catch(e=> console.log(e))

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            {type.map(item=>{
                return <SearchItemByType props={item} key={item.id}/>
            })}
            <Subscribe/>
            <Links/>
        </div>
    );
};

export default Test;