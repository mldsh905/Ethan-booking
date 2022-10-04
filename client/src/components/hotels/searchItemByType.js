import React from 'react';
import classes from './searchItem.module.css';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import moment from 'moment';

const SearchItem = (props) => {
    const date = useSelector(state => state.date);
    const room = useSelector(state => state.room);

    return (
        <div className={classes.container}>
            <div className={classes.images}>
                <Link to={`/hotels/${props.props._id}`}>
                    <img src="/images/cities/brisbane.jpg" alt=""/>
                </Link>
            </div>
            <div className={classes.info}>
                <div className={classes.main}>
                    <div className={classes.titleAndFeature}>
                        <div className={classes.title}>
                            <Link to={`/hotels/${props.props._id}`}>
                                {props.props.name}
                            </Link>
                        </div>
                        <div className={classes.feature}>
                            {props.props.description}
                        </div>
                    </div>
                    <div className={classes.rate}>
                        <span>{props.props.rate}</span>
                    </div>
                </div>
                <div className={classes.intro}>
                    <div className={classes.details}>
                        <div>Two-Bedroom Apartment</div>
                        <div>Entire apartment • 2 bedrooms • 2 bathrooms • 1 kitchen • 80m²</div>
                    </div>
                    <div className={classes.priceAndAvail}>
                        <div className={classes.price}>
                            {`AUD ${Number(props.props.price)}`}
                        </div>
                        <div className={classes.avail}>
                            <Link to={`/hotels/${props.props._id}`}>
                                See Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;