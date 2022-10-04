import React from 'react';
import {useState} from 'react';
import axios from "axios";
import {Navigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {setRegister} from "../../store/user";
import classes from './register.module.css';
import {Link} from "react-router-dom";

const Register = () => {
    const [info, setInfo] = useState({username: '', password: '', email: ''});
    const handleChange = (e, a) => {
        setInfo({...info, [e]: a.target.value})
    };
    const [msg, setMsg] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const handleLogin = () => {
        axios({
            url: 'http://localhost:8800/auth/register',
            method: 'post',
            data: {username: info.username, password: info.password, email: info.email},
            withCredentials: true
        })
            .then(
                res => {
                    if (res.data.username) {
                        dispatch(setRegister(true))
                    } else {
                        setMsg("please try again (another username)")
                    }
                    console.log(res)
                    // console.log(user.register)
                }
            ).catch(e => {
            console.log(e);
        })
    }
    if (user.register) return <Navigate to='/login'/>;

    return (
        <div className={classes.container}>
            <Link to='/' style={{color: 'white'}}>
                Homepage
            </Link>
            <div className={classes.title}>Please Register!</div>
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
                <div>
                    Email <input type="text" onChange={(a) => {
                    handleChange('email', a)
                }}/>
                </div>
                <button onClick={handleLogin}>Login</button>
            </div>
            <div>{msg}</div>
        </div>
    );
};

export default Register;