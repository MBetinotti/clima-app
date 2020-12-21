import React from 'react';
import Card from '../Card/Card'

export default function CardContainer(props){
   if (props.cities){
       return(
           <div>
               {props.cities.map(city=>
                <Card
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