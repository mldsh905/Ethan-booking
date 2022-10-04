import classes from "./home.module.css";
import React from 'react'
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import SearchBar from "../../components/header/searchBar";
import Feature from "../../components/body/feature";
import BrowseByType from "../../components/body/browseByType";
import Subscribe from "../../components/footer/subscribe";
import Links from "../../components/footer/links";

function Home() {
    return(
        <div>
            <Navbar/>
            <Header/>
            <SearchBar/>
            <Feature/>
            <BrowseByType/>
            <Subscribe/>
            <Links/>
        </div>
    )
}

export default Home