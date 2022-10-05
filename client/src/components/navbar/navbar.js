import React from 'react'
import classes from './navbar.module.css';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setRegister, setUser} from "../../store/user";

const Navbar = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleLogout = ()=>{
        dispatch(setUser(false));
        dispatch(setRegister(false));
        axios({
            url:`${process.env.REACT_APP_ADDRESS}/auth/logout`,
            method:'get',
            withCredentials: true
        })
            .then(
                res=> console.log(res)
            ).catch(e=>{
            console.log(e);})
    }

    return (
        <div className={classes.navbar}>
            <div className={classes.navContainer}>
                <Link to="/" className={classes.logo} style={{color: "white"}}>
                    Ethan-Booking
                </Link>
                <div className={classes.navItems}>
                    <Link to="/listProperty">
                        <button className={classes.navButtonListProperty}>List Your Property</button>
                    </Link>
                    {user.user ? <button onClick={handleLogout} className={classes.navButton}>Logout</button>
                        :
                        <>
                            <Link to="/register">
                                <button className={classes.navButton}>Register</button>
                            </Link>
                            <Link to="/login">
                                <button className={classes.navButton}>Login</button>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;