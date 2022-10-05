import React from 'react';
import axios from "axios";



const Login000 = () => {
    const handleClick1 = ()=>{
        axios({
            url:`${process.env.REACT_APP_ADDRESS}/auth/login`,
            method:'post',
            data:{username:"admin", password: "123456"},
            withCredentials: true
        })
            .then(
                res=> console.log(res)
            ).catch(e=>{
            console.log(e);})
    }
    const handleClick2 = ()=>{
        axios({
            url:`${process.env.REACT_APP_ADDRESS}/users`,
            method:"get",
            withCredentials: true
        })
            .then(
                res=> console.log(res)
            ).catch(e=>{
            console.log(e);})
    }
    const handleClick3=()=>{
        axios({
            url:`${process.env.REACT_APP_ADDRESS}/auth/logout`,
            method:'get',
            // data:{username:"admin", password: "123456"},
            withCredentials: true
        })
            .then(
                res=> console.log(res)
            ).catch(e=>{
            console.log(e);})
    }

    return (
        <div>
            login
            <button onClick={handleClick1}>click to login</button>
            <button onClick={handleClick2}>click to get users</button>
            <button onClick={handleClick3}>click to delete cookie</button>
        </div>
    );
};

export default Login000;