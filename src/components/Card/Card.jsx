import {Link} from 'react-router-dom'

export default function Card (props){
    return (
        <div>
            <button onClick={()=>props.onClose(props.ciudad.id)}>X</button>
           <Link to={`/city/${props.ciudad.id}`} >
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
           </Link>
            
        </div>
    )
}