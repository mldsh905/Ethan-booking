import React from 'react';
import classes from './feature.module.css';
import {Link} from "react-router-dom";

const Feature = () => {


    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.firstLine}>
                    <div className={classes.firstLineItem}>
                        <Link to="/hotels" state={{city: 'sydney'}}>
                            <img src="/images/cities/sydney.jpg" alt="syd"/>
                            <span>Sydney</span>
                        </Link>
                    </div>
                    <div className={classes.firstLineItem}>
                        <Link to="/hotels" state={{city: 'melbourne'}}>
                        <img src="/images/cities/melbourne.jpg" alt="mel"/>
                        <span>Melbourne</span>
                        </Link>
                    </div>
                </div>
                <div className={classes.secondLine}>
                    <div className={classes.secondLineItem}>
                        <Link to="/hotels" state={{city: 'brisbane'}}>
                        <img src="/images/cities/brisbane.jpg" alt="bne"/>
                        <span>Brisbane</span>
                        </Link>
                    </div>
                    <div className={classes.secondLineItem}>
                        <Link to="/hotels" state={{city: 'sunshine coast'}}>
                        <img src="/images/cities/sunshine-coast.jpg" alt="sc"/>
                        <span>Sunshine Coast</span>
                        </Link>
                    </div>
                    <div className={classes.secondLineItem}>
                        <Link to="/hotels" state={{city: 'gold coast'}}>
                        <img src="/images/cities/gold-coast.jpg" alt="gc"/>
                        <span>Gold Coast</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;