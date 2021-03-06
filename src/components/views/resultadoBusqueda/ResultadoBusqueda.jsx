import React from 'react';
import moduleResultado from "./resultadoBusqueda.module.css";
import iconoUbicacion from "../../../iconos/mapa.png"

const ResultadoBusqueda = ({data, state}) => {
  //Primer letra en mayuscula para la ubicacion del clima
  
  
  return (
    <>
        <div className={moduleResultado.divPrincipal}>
            <img src={`http://openweathermap.org/img/wn/${data?.current?.weather[0]?.icon}@2x.png`} alt='icono del clima' className={moduleResultado.iconoClima} />
            <div className={moduleResultado.divCaracDelDia}>
                <p className={moduleResultado.temperatura}>
                  {data?.current?.temp.toFixed(0)}
                  <span className={moduleResultado.farenheaitCelsius}>°C</span>
                </p>
                <p className={moduleResultado.descripcionDia}>{data?.current?.weather[0].description}</p>
                <p>Hoy - {new Date(data?.current?.dt).toDateString().slice(4,10)}</p>
                <p><img src={iconoUbicacion} alt="Icono de precision" className={moduleResultado.iconoUbicacion} />{state || "London, GB"}</p>
            </div>
        </div>
    </>    
  )
}

export default ResultadoBusqueda