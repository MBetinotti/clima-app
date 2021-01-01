import React, { useState } from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

export default function SearchBar(props){
    const [city, setCity]=useState("")
    return(
        <form className="bar" 
        onSubmit={(e)=>{
            // e.preventDefault();
            // props.onSearch(city)
            // setCity("")
        }}>
            <input className="input" type="text" 
                    placeholder="Ciudad..."
                    value={city}
                    onChange={e=>setCity(e.target.value)}></input>
            {/* <input className="btn" type="submit"></input> */}
            <boton className="btn" onClick={()=>{props.onSearch(city)
            setCity("")}}><FontAwesomeIcon icon={faSearch} size="lg" /></boton>
        </form>
    )
}