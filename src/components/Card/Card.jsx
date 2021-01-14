import {Link} from 'react-router-dom';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureHigh, faTimes} from '@fortawesome/free-solid-svg-icons'

export default function Card (props){
    return (
        <div className="card">
            <div className="btncontenedor">
                <button className="boton" onClick={()=>props.onClose(props.ciudad.id)}><FontAwesomeIcon icon={faTimes} /></button>
            </div>
           <Link to={`/city/${props.ciudad.id}`}  className="link" >
            <div className="title">
                <h3 className="name">{props.ciudad.name}</h3>
            </div>
            <div className="imagen">
                <img src={"http://openweathermap.org/img/wn/"+props.ciudad.img+"@2x.png"} alt="tiempo"/>
            </div>
            <div className="temperatura">
                <div>
                <FontAwesomeIcon className="icono" icon={faTemperatureHigh} />
                    {Math.round(props.ciudad.temp) + "°C"}
                </div>
            </div>
            <div className="maxmin">
                <div className="max">
                    <div className="textito" >Max</div>{props.ciudad.max + "°C"}</div>
                <div className="min">
                    <div className="textito">Min</div>{props.ciudad.min + "°C"}</div>
            </div>
           </Link>
            
        </div>
    )
}