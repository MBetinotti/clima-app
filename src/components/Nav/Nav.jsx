import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Nav.css';

export default function Nav(props){
    return(
        <nav className="nav">
            <SearchBar onSearch={props.onSearch}/>
        </nav>
    )
}