import React, {useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../../store/user";
import {Navigate} from "react-router";
import classes from './login.module.css'
import {Link} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const [info, setInfo] = useState({username: '', password: ''});
    const handleChange = (e, a) => {
        setInfo({...info, [e]: a.target.value})
    };
    const [msg, setMsg] = useState('');
    const handleLogin = () => {
        axios({
            url: `${process.env.REACT_APP_ADDRESS}/auth/login`,
            method: 'post',
            data: {username: info.username, password: info.password},
            withCredentials: true
        })
            .then(
                res => {
                    if (res.data.username) {
                        dispatch(setUser(true))
                    } else {
                        setMsg(res.data)
                    }
                    console.log(res)
                    console.log(user)
                }
            ).catch(e => {
            console.log(e);
        })
    }
    if (user.user) return <Navigate to='/'/>;
    return (
        <div className={classes.container}>
            <Link to='/' style={{color: 'white'}}>
                Homepage
            </Link>
            <div className={classes.title}>Please Login!</div>
            <div className={classes.body}>
                <div>
                    Username <input type="text" onChange={(a) => {
                    handleChange('username', a)
                }}/>
                </div>
                <div>
                    Password <input type="text" onChange={(a) => {
                    handleChange('password', a)
                }}/>
                </div>
                <button onClick={handleLogin}>Login</button>
            </div>
            <div>
                {msg}
            </div>
        </div>
    );
};

export default Login;