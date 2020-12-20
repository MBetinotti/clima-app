import React, {useState} from 'react';
import Nav from './components/Nav/Nav';
import CardContainer from './components/CardContainer/CardContainer';



function App() {
const [cities, setCities]= useState([])


  function onSearch (ciudad){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=sp&appid=${process.env.REACT_APP_KEY}&units=metric`)
        .then(res=> res.json())
        .then(recurso=>{
          if(recurso.main != undefined){
            const ciudad = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon
            }
            setCities(oldCities => [...oldCities, ciudad])
          } else {
            alert("Ciuadad no encontrada.")
          }
        })
        
    }


  return (
   <div>
     <div>
       <Nav onSearch={onSearch}></Nav>
     </div> 
     <div>
       <CardContainer cities={cities}></CardContainer>
     </div>
   </div>
  );
}

export default App;
