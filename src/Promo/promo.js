import { useState } from 'react';
import './promo.css';
import { IoCloseOutline } from "react-icons/io5";
import React from "react";

export default function Promo(){
    const[show, setShow] = useState(true);
    return(
        <div className= {show ? 'flexCenter promo-nav' : "hide"}>
            <h1>BLACK FRIDAY SALE. 50% <span>OFF OF ALL SELECTED ITEMS</span></h1> 
            <div className='x' onClick={() => setShow(!show)}>
                <IoCloseOutline />
            </div>
        </div>
    )
}