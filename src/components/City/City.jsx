
import './City.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCloudRain, faTemperatureHigh, faTemperatureLow, faTint, faWind } from '@fortawesome/free-solid-svg-icons';

export default function City(props){
    return(
        <div className="window">
            <div className="container">
                <div className="titulo">
                    <div className="nombre"><h2>{props.ciudad.name}</h2></div>
                    <div className="img"> <img src={"http://openweathermap.org/img/wn/"+props.ciudad.img+"@2x.png"}/> </div>
                    <div className="temp">{Math.round(props.ciudad.temp)} C°</div>
                </div>
                <div className="datos">
                    <div className="datosInt">
                            <div className="valor">{props.ciudad.max}C°</div>
                            <div className="leyenda">T máx.</div>
                            <div className="icon"><FontAwesomeIcon  icon={faTemperatureHigh} /></div>
                    </div>
                    <div className="datosInt">
                        <div className="valor">{props.ciudad.min}C°</div>
                        <div className="leyenda">T min.</div>
                        <FontAwesomeIcon className="icon" icon={faTemperatureLow} />
                    </div>
                    <div className="datosInt">
                        <div className="valor">{props.ciudad.wind}</div>
                        <div className="leyenda">Viento</div>
                        <FontAwesomeIcon className="icon" icon={faWind} />
                    </div>
                    <div className="datosInt">
                        <div className="valor">{props.ciudad.clouds}</div>
                        <div className="leyenda">Nubosidad</div>
                        <FontAwesomeIcon className="icon" icon={faCloud} />
                    </div>
                    <div className="datosInt">
                        <div className="valor">{props.ciudad.humidity} %</div>
                        <div className="leyenda">Humedad</div>
                        <FontAwesomeIcon className="icon" icon={faTint} />
                    </div>
                    <div className="datosInt">
                        <div className="valor">{props.ciudad.rain}</div>
                        <div className="leyenda">Precip.</div>
                        <FontAwesomeIcon className="icon" icon={faCloudRain} /></div>
                </div>
                <div className="horas">
                    {console.log(props)}
                </div>
            </div>
            <div></div>
        </div>
    )
}