import classes from './hotelBody.module.css';
import * as React from 'react';
import {DatePicker, Space} from 'antd';
import './hotelBody.css';
import SearchItem from "./searchItem";
import moment from "moment";

import {useDispatch, useSelector} from "react-redux";
import {setDate} from "../../store/dateSlice";
import {format} from "date-fns";
import {useEffect, useState} from "react";
import axios from "axios";
import {setRoom} from "../../store/roomSlice";


const HotelBody = (props) => {
    const {RangePicker} = DatePicker;
    const dispatch = useDispatch();
    const date = useSelector(state => state.date);

    useEffect(() => {
            fetch();
        }
        , [])
    const fetch = async () => {
        await axios({
            url: `${process.env.REACT_APP_ADDRESS}/hotels/find/findByParam?city=${props.props.city}&min=${hotelParams.min}&max=${hotelParams.max}`,
            method: 'get'
        }).then(
            res => setHotelList(res.data),
        ).catch(err => console.log(err))}

        const [hotelParams, setHotelParams] = useState({
            city: props.props.city,
            min: 0,
            max: 99999
        })

        const [hotelList, setHotelList] = useState([]);

        const handleSubmit = async (e) => {
            e.preventDefault();
            const result = await axios({
                url: `${process.env.REACT_APP_ADDRESS}/hotels/find/findByParam?city=${hotelParams.city}&min=${hotelParams.min}&max=${hotelParams.max}`,
                method: 'get'
            }).then(
                res => setHotelList(res.data),
            ).catch(err => console.log(err))
        }

        return (
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <div className={classes.searchBar}>
                        <form action="" className={classes.searchForm} onSubmit={handleSubmit}>
                            <div className={classes.searchBarTitle}>Search</div>
                            <label htmlFor="destination">Destination/property name:</label>
                            <input type="text" id="destination" placeholder={props.props.city} onChange={e => {
                                setHotelParams({...hotelParams, city: e.target.value})
                            }}/>
                            <div>Check in & out</div>
                            <RangePicker
                                onChange={e => {
                                    try {
                                        dispatch(setDate({
                                            startDate: format(e[0]._d, 'yyyy-MM-dd'),
                                            endDate: format(e[1]._d, 'yyyy-MM-dd')
                                        }))
                                    }catch (e) {
                                        console.log(e);
                                    }

                                }}
                                format="YYYY-MM-DD"
                                allowEmpty={[false,false]}
                                value={[moment(date.startDate, 'YYYY-MM-DD'), moment(date.endDate, 'YYYY-MM-DD')]}
                            />
                            <label htmlFor="room">Room</label>
                            <input defaultValue={props.props.room} type="text" id="room" onChange={(e)=>{dispatch(setRoom(e.target.value))}}/>
                            <div className={classes.optionsSpan}>Options</div>
                            <label htmlFor="minPrice">Min Price</label>
                            <input type="text" id="minPrice" onChange={
                                (e) => {
                                    setHotelParams({...hotelParams, min: Number(e.target.value)})
                                }}/>
                            <label htmlFor="maxPrice">Max Price</label>
                            <input type="text" id="maxPrice" onChange={e => {
                                setHotelParams({...hotelParams, max: Number(e.target.value)})
                            }}/>
                            <button type="submit">Search</button>
                        </form>
                    </div>
                    <div className={classes.searchList}>
                        {hotelList.map(hotel => {
                            return <SearchItem props={hotel} key={hotel.id}/>
                        })}
                    </div>
                </div>
            </div>
        );
    };

    export default HotelBody;