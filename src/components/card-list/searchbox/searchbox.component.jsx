import React from 'react' ;
import './searchbox.style.css';

export const Searchbox = ({placeholder,handlechange}) => (
    <input type='search' placeholder={placeholder} onChange={handlechange}></input>

)