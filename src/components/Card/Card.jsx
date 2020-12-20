import react from 'react';

export default function Card (props){
    return (
        <div>
            <button>X</button>
            <h3>{props.ciudad.name}</h3>
            <div>
                {props.ciudad.temp}
            </div>
            <div>
                <div>{props.ciudad.max}</div>
                <div>{props.ciudad.min}</div>
            </div>
            <div>
                {props.ciudad.img}
            </div>
            
        </div>
    )
}