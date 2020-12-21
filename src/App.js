import React, {useState} from 'react';
import Nav from './components/Nav/Nav';
import CardContainer from './components/CardContainer/CardContainer';
import {Route} from 'react-router-dom';
import City from './components/City/City'


function App() {
const [cities, setCities]= useState([])


  function onSearch (ciudad){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=sp&appid=${process.env.REACT_APP_KEY}&units=metric`)
        .then(res=> res.json())
        .then(recurso=>{
          if(recurso.main !== undefined){
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


  function onClose(id){
    setCities(oldCities=> oldCities.filter(city => city.id !== id))
  }

  function onFilter(id){
    let ciudades= cities.filter((city)=>city.id==parseInt(id)) 
    if(ciudades.length > 0){
      return ciudades[0]
    } else {
      return null
    }
  }

  return (
   <div>
    <Route path="/" render={()=><Nav onSearch={onSearch}></Nav>}></Route>
    <Route exact path="/" render={()=> <CardContainer cities={cities} onClose={onClose}></CardContainer>}></Route>
    <Route path="/city/:id" render={({match})=> <City ciudad={onFilter(match.params.id)}></City>}></Route>
   </div>
  );
}

export default App;
