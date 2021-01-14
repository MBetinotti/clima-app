
import './City.css';
import { AreaChart } from 'react-chartkick'
import 'chart.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCloudRain, faTemperatureHigh, faTemperatureLow, faTint, faWind } from '@fortawesome/free-solid-svg-icons';

export default function City(props){

//     const data = hourly(hour.horas.hourly);
//       const options = {
//         title: "Company Performance",
//         curveType: "function",
//         legend: { position: "bottom" }
//       };


    
//       function unixToHuman (unix){
// const milliseconds = unix * 1000 
// const dateObject = new Date(milliseconds)
// const humanDateFormat = dateObject.toLocaleString("es-ES", {hour: "numeric"})

//         return humanDateFormat
//       }

//       function hourly(array){
//           let data= [["Hora","Temp"]]
//           for (let i = 0; i < array.length; i++) {
//               let array2=[]
//               const element = array[i];
//               const tiempo = unixToHuman(element.dt)
//               array2.push(tiempo)
//               const temp = Math.round(element.temp)
//               array2.push(temp)
//               data.push(array2)
//           }
//           console.log(data)
//           return data
//       }




      const data = hourly(props.pronostico.horas.hourly);
    
      function unixToHuman (unix, bool){
        const milliseconds = unix * 1000 
        const dateObject = new Date(milliseconds)
        const hora = dateObject.toLocaleString("en-US", {hour: "numeric"})
        const fechaCompleta =  dateObject.toLocaleString("es-ES",{month: 'short', day: 'numeric', hour:"numeric", hour12: true})
                if(bool){return hora}
                else {return fechaCompleta }
                
              }

      function hourly(array){
          let data= {}
            const tiempo1 = unixToHuman(array[0].dt, false)
            const temp1 = Math.round(array[0].temp)
            data[tiempo1]=temp1
          for (let i = 1; i < array.length-1; i++) {
              const element = array[i];
              const tiempo = unixToHuman(element.dt, true)
              const temp = Math.round(element.temp)
            data[tiempo]=temp
          }
          const tiempoU = unixToHuman(array[array.length-1].dt, false)
            const tempU = Math.round(array[array.length-1].temp)
            data[tiempoU]=tempU

          return data
      }




    return(
        <div className="window">
            <div className="container">
                <div className="titulo">
                    <div className="nombre"><h2>{props.ciudad.name}</h2></div>
                    <div className="img"> <img alt="tiempo" src={"http://openweathermap.org/img/wn/"+props.ciudad.img+"@2x.png"}/> </div>
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

               <div><AreaChart data={data} 
                                curve={true} 
                                width="90%" 
                                height="80%"
                                min={null} 
                                max={null}
                                suffix="C°"
                                /> </div>

                </div>
            </div>
            <div></div>
        </div>
    )
}