import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed, faCar, faPlane, faMountainSun, faTaxi} from '@fortawesome/free-solid-svg-icons';
import classes from './header.module.css'

const Header = (prop) => {
    return (
        <div className={prop.type==="list"? classes.hotelHeader:classes.header}>
            <div className={classes.headerContainer}>
                <div className={classes.headerList}>
                    <div className={`${classes.headerListItem} ${classes.active}`}>
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Stays</span>
                    </div>
                    <div className={classes.headerListItem}>
                        <FontAwesomeIcon icon={faPlane}/>
                        <span>Flights</span>
                    </div>
                    <div className={classes.headerListItem}>
                        <FontAwesomeIcon icon={faCar}/>
                        <span>Car Rentals</span>
                    </div>
                    <div className={classes.headerListItem}>
                        <FontAwesomeIcon icon={faMountainSun}/>
                        <span>Attractions</span>
                    </div>
                    <div className={classes.headerListItem}>
                        <FontAwesomeIcon icon={faTaxi}/>
                        <span>Airport taxis</span>
                    </div>
                </div>
                {prop.type !== "list" &&
                    <div>
                        <div className={classes.headerH1}>
                            Find your next stay
                        </div>
                        <div className={classes.headerDescription}>
                            Search low prices on hotels, homes and much more...
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;