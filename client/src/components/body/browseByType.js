import React, {useEffect, useState} from 'react';
import classes from './browseByType.module.css';
import axios from 'axios';
import hotel from "../../pages/hotel/hotel";
import {Link} from "react-router-dom";

const BrowseByType = () => {
    const [typeNumber, setTypeNumber] = useState({
        hotel: 0,
        apartment: 0,
        villa: 0,
        resort: 0
    })

    useEffect(() => {
        countByType()
    }, []);

    const countByType = () => {
        axios.all([
            axios.get('http://localhost:8800/hotels/find/countByType', {params: {type: 'hotel'}}),
            axios.get('http://localhost:8800/hotels/find/countByType', {params: {type: 'villa'}}),
            axios.get('http://localhost:8800/hotels/find/countByType', {params: {type: 'apartment'}}),
            axios.get('http://localhost:8800/hotels/find/countByType', {params: {type: 'resort'}})
        ]).then(
            res => {
                setTypeNumber({
                    hotel: res[0].data,
                    villa: res[1].data,
                    apartment: res[2].data,
                    resort: res[3].data
                })
            }
        ).catch(
            err => console.log(err)
        )
    }


    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.title}>
                    Browse by property type
                </div>
                <div className={classes.content}>
                    <Link style={{color: "black"}} className={classes.browseItem}
                          to="/hotels/find/findByParam?type=hotel">
                        <img src="/images/types/hotel.jpg" alt=""/>
                        <div className={classes.browseItemTitle}>
                            Hotels
                        </div>
                        <div className={classes.browseItemIntro}>
                            {typeNumber.hotel} hotels
                        </div>
                    </Link>
                    <Link style={{color: "black"}} className={classes.browseItem}
                          to="/hotels/find/findByParam?type=apartment">
                        <img src="/images/types/apartment.jpg" alt=""/>
                        <div className={classes.browseItemTitle}>
                            Apartments
                        </div>
                        <div className={classes.browseItemIntro}>
                            {typeNumber.apartment} apartments
                        </div>
                    </Link>
                    <Link style={{color: "black"}} className={classes.browseItem}
                          to="/hotels/find/findByParam?type=resort">
                        <img src="/images/types/resort.jpg" alt=""/>
                        <div className={classes.browseItemTitle}>
                            Resorts
                        </div>
                        <div className={classes.browseItemIntro}>
                            {typeNumber.resort} resorts
                        </div>
                    </Link>
                    <Link style={{color: "black"}} className={classes.browseItem}
                          to="/hotels/find/findByParam?type=villa">
                        <img src="/images/types/villa.jpg" alt=""/>
                        <div className={classes.browseItemTitle}>
                            Villa
                        </div>
                        <div className={classes.browseItemIntro}>
                            {typeNumber.villa} villas
                        </div>
                    </Link>
                </div>
        </div>
</div>
)
    ;
};

export default BrowseByType;