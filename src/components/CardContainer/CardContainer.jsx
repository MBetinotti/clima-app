import React from 'react';
import Card from '../Card/Card'
import './CardContainer.css'

export default function CardContainer(props){
   if (props.cities){
       return(
           <div className="contenedor">
               {props.cities.map(city=>
                <Card
                key={city.name}
                ciudad={city}
                onClose={props.onClose}
                
                ></Card>)}
           </div>
       )
   } else {

       return(
           <div>
         Ingresa una nueva ciudad.   
        </div>
    )
}
}