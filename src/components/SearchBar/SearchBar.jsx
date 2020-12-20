import React, { useState } from 'react';

export default function SearchBar(props){
    const [city, setCity]=useState("")
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            props.onSearch(city)
        }}>
            <input type="text" 
                    placeholder="Ciudad..."
                    value={city}
                    onChange={e=>setCity(e.target.value)}></input>
            <input type="submit"></input>
        </form>
    )
}