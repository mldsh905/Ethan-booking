import classes from './hotelDetail.module.css';

import React from 'react';

const HotelDetail = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <div className={classes.name}>
                        The Village at Burleigh
                    </div>
                    <a href="/">
                        Reserve or Book Now!
                    </a>
                </div>
                <div className={classes.photos}>
                    <img src="/images/hotels/1.jpg" alt=""/>
                    <img src="/images/hotels/2.jpg" alt=""/>
                    <img src="/images/hotels/3.jpg" alt=""/>
                    <img src="/images/hotels/4.jpg" alt=""/>
                    <img src="/images/hotels/5.jpg" alt=""/>
                    <img src="/images/hotels/6.jpg" alt=""/>
                </div>
                <div className={classes.info}>
                    Just 200 m from Burleigh Heads surfing beach, these luxury holiday apartments include a swimming
                    pool, heated spa pool and BBQ area. The resort’s restaurant offers à la carte outdoor dining.
                    Each apartment at The Village at Burleigh Heads is air-conditioned and includes a fully equipped
                    kitchen and laundry facilities. All have a private bathroom and flat-screen TV with DVD player.
                    Every apartment has a large private balcony with pool and ocean views. Free secure covered car
                    parking is provided. Guests have access to the large landscaped gardens.
                    Guests will find cafes, restaurants and shops on the doorstep.
                    The vibrant nightlife of Surfers Paradise is 5.6 mi from The Village at Burleigh Apartments. It is
                    only 20 minutes’ drive to Gold Coast Coolangatta Airport.
                    Couples in particular like the location – they rated it 9.7 for a two-person trip.
                </div>
            </div>
        </div>
    );
};

export default HotelDetail;