import React from 'react';
import classes from './link.module.css';

const Links = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.links}>
                    <ul>
                        <li>
                            <a href="//">Countries</a>
                        </li>
                        <li>
                            <a href="//">Regions</a>
                        </li>
                        <li>
                            <a href="/">Cities</a>
                        </li>
                        <li>
                            <a href="/">Districts</a>
                        </li>
                        <li>
                            <a href="/">Airports</a>
                        </li>
                        <li>
                            <a href="/">Hotels</a>
                        </li>
                        <li>
                            <a href="/">Places of interest</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/">Homes</a>
                        </li>
                        <li>
                            <a href="/">Apartments</a>
                        </li>
                        <li>
                            <a href="/">Resorts</a>
                        </li>
                        <li>
                            <a href="/">Villas</a>
                        </li>
                        <li>
                            <a href="/">Hostels</a>
                        </li>
                        <li>
                            <a href="/">B&Bs</a>
                        </li>
                        <li>
                            <a href="/">Guest houses</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/">Unique places to stay</a>
                        </li>
                        <li>
                            <a href="/">All destinations</a>
                        </li>
                        <li>
                            <a href="/">Discover</a>
                        </li>
                        <li>
                            <a href="/">Reviews</a>
                        </li>
                        <li>
                            <a href="/">Unpacked: Travel articles</a>
                        </li>
                        <li>
                            <a href="/">Travel communities</a>
                        </li>
                        <li>
                            <a href="/">Seasonal and holiday deals</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/">Car rental</a>
                        </li>
                        <li>
                            <a href="/">Flight finder</a>
                        </li>
                        <li>
                            <a href="/">Restaurant reservations</a>
                        </li>
                        <li>
                            <a href="/">Booking.com for Travel Agents</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/">Coronavirus (COVID-19) FAQs</a>
                        </li>
                        <li>
                            <a href="/">About Booking.com</a>
                        </li>
                        <li>
                            <a href="/">Customer Service Help</a>
                        </li>
                        <li>
                            <a href="/">Partner help</a>
                        </li>
                        <li>
                            <a href="/">Careers</a>
                        </li>
                        <li>
                            <a href="/">Sustainability</a>
                        </li>
                        <li>
                            <a href="/">Press center</a>
                        </li>
                    </ul>
                </div>
                <div className={classes.copyright}>
                    Copyright Ethan-Booking. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Links;