import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed, faCalendarDays, faPerson} from '@fortawesome/free-solid-svg-icons';
// import "./timePicker.css";
import {useState} from 'react';
import React from 'react';
import {addDays, format} from 'date-fns';
import {DatePicker} from 'antd';
import 'antd/dist/antd.min.css';
import classes from './searchBar.module.css';
import {useDispatch, useSelector} from "react-redux";
import {addAdult, addChildren, addRoom, subAdult, subChildren, subRoom} from "../../store/roomSlice";
import {setDate} from "../../store/dateSlice";
import {Link} from "react-router-dom";
import moment from "moment";


const {RangePicker} = DatePicker;

const SearchBar = () => {
    const [openPerson, setOpenPerson] = useState(false);
    const [city,setCity] = useState('brisbane');
    const dispatch = useDispatch();
    const room = useSelector(state => state.room);
    const date = useSelector(state => state.date);

    return (
        <div className={classes.searchBar}>
            <div className={classes.searchBarContainer}>
                <div className={classes.searchBarList}>
                    <div className={classes.searchBarListItem}>
                        <FontAwesomeIcon className={classes.searchBarListItemIcon} icon={faBed}/>
                        <input className={classes.searchBarListItemInput}
                               placeholder="Where are you going?"
                               type="text"
                            onChange={(e)=>{
                                setCity(e.target.value)
                            }}
                        />
                    </div>
                    <div className={classes.searchBarListItem}>
                        <FontAwesomeIcon className={classes.searchBarListItemIcon} icon={faCalendarDays}/>
                        <div>
                            <RangePicker onChange={e => {
                                try {
                                    dispatch(setDate({
                                        startDate: format(e[0]._d, 'yyyy-MM-dd'),
                                        endDate: format(e[1]._d, 'yyyy-MM-dd')
                                    }));
                                }catch (e) {
                                    console.log(e);
                                }
                            }}
                                         bordered={false} className={classes.rangePicker}
                                         format="YYYY-MM-DD"
                                         allowEmpty={[false,false]}
                            value={[moment(date.startDate, 'YYYY-MM-DD'), moment(date.endDate, 'YYYY-MM-DD')]}
                            />
                        </div>
                    </div>
                    <div className={`${classes.searchBarListItem} ${classes.person}`}>
                        <FontAwesomeIcon className={classes.searchBarListItemIcon} icon={faPerson}/>
                        <span onClick={() => {
                            setOpenPerson(!openPerson)
                        }}>{room.adult} adults - {room.children} Children - {room.room} room</span>
                        {openPerson && <div className={classes.searchBarListItemPerson}>
                            <div className={classes.searchBarListItemPersonItem}>
                                <span>Adults</span>
                                <div className={classes.searchBarListItemPersonItemOption}>
                                    <button disabled={room.adult <= 1} onClick={() => {
                                        dispatch(subAdult())
                                    }
                                    }>-
                                    </button>
                                    <span>{room.adult}</span>
                                    <button onClick={() => {
                                        dispatch(addAdult())
                                    }}>+
                                    </button>
                                </div>
                            </div>
                            <div className={classes.searchBarListItemPersonItem}>
                                <span>Children</span>
                                <div className={classes.searchBarListItemPersonItemOption}>
                                    <button disabled={room.children <= 0} onClick={() => {
                                        dispatch(subChildren())
                                    }}>-
                                    </button>
                                    <span>{room.children}</span>
                                    <button onClick={() => {
                                        dispatch(addChildren())
                                    }}>+
                                    </button>
                                </div>
                            </div>
                            <div className={classes.searchBarListItemPersonItem}>
                                <span>Room</span>
                                <div className={classes.searchBarListItemPersonItemOption}>
                                    <button disabled={room.room <= 1} onClick={() => {
                                        dispatch(subRoom())
                                    }}>-
                                    </button>
                                    <span>{room.room}</span>
                                    <button onClick={() => {
                                        dispatch(addRoom())
                                    }}>+
                                    </button>
                                </div>
                            </div>
                            <button onClick={() => {
                                setOpenPerson(false)
                            }} className={classes.searchBarListItemPersonBtn}>OK
                            </button>
                        </div>}
                    </div>
                    <div className={classes.searchBarbtn}>
                        <Link style={{color: "white"}} to="/hotels" state={{city:city,room:room.room}} className={classes.searchLink}>Search</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;