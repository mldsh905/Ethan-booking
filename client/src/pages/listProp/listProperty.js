import React, {useState} from 'react';
import axios from "axios";
import classes from './listProperty.module.css';
import {Link} from 'react-router-dom';

const ListProperty = () => {
    const [hotel, setHotel] = useState({
        name: '',
        city: '',
        address: '',
        rate: '',
        type: 'hotel',
        price: '',
        description: ''
    })
    const handleChange = (item, e) => {
        setHotel({...hotel, [item]: e.target.value})
    }
    const handleRate = (item, e) => {
        setHotel({...hotel, rate: Number(e.target.value).toFixed(1)})
    }
    const handleCity = (item, e) => {
        setHotel({...hotel, [item]: e.target.value.toLowerCase()})
    }
    const [msg, setMsg] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            url: `${process.env.REACT_APP_ADDRESS}/hotels/`,
            method: 'post',
            withCredentials: true,
            data: hotel
        }).then(
            res => {
                if (res.data.errors) {
                    setMsg(res.data.message)
                } else {
                    setMsg('successful added!')
                }
                console.log(res);
            }
        ).catch(e => {
            setMsg(e.response.data)
            console.log(e)
        })
    }

    return (
        <div className={classes.container}>
            <Link to='/' style={{color: 'white'}}>
                Homepage
            </Link>
            <div className={classes.title}>Add a hotel</div>
            <form className={classes.body}>
                <div className={classes.item}>
                    <span>Hotel name</span>
                    <input required type="text" onChange={(e) => {
                        handleChange('name', e)
                    }}/>
                </div>
                <div className={classes.item}>
                    <span>Hotel city</span>
                    <input required type="text" onChange={(e) => {
                        handleCity('city', e)
                    }}/>
                </div>
                <div className={classes.item}>
                    <span>Hotel address</span>
                    <input required type="text" onChange={(e) => {
                        handleChange('address', e)
                    }}/>
                </div>
                <div className={classes.item}>
                    <span>Hotel rate</span>
                    <input required max={10} min={1} step='0.1' type="number" onChange={(e) => {
                        handleRate('rate', e)
                    }}/>
                </div>
                <div className={classes.item}>
                    <span>Hotel type</span>
                    <select defaultValue={'hotel'} required onChange={
                        (e) => {
                            handleChange('type', e)
                        }
                    }>
                        <option value='hotel'>Hotel</option>
                        <option value='apartment'>Apartment</option>
                        <option value='villa'>Villa</option>
                        <option value='resort'>Resort</option>
                    </select>
                </div>
                <div className={classes.item}>
                    Hotel price <input required type="text" onChange={(e) => {
                    handleChange('price', e)
                }}/>
                </div>
                <div className={classes.item}  id={classes.description}>
                    Hotel description <input required type="text" onChange={(e) => {
                    handleChange('description', e)
                }}/>
                </div>
                <button type='submit' onClick={handleSubmit}>Add Hotel</button>
            </form>
            <div>{msg}</div>
        </div>
    );
};

export default ListProperty;