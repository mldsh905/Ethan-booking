import React from 'react';
import classes from './subscribe.module.css';

const Subscribe = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.title}>
                    Save time, save money!
                </div>
                <div className={classes.intro}>
                    Sign up and we'll send the best deals to you
                </div>
                <form action="" className={classes.sub}>
                    <input type="text" id="email" placeholder="Your email"/>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;