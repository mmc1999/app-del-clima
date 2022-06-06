import React from 'react'
import { contadorDias } from '../../../helpers/dias'
import moduleDias from "./DiasTemp.module.css"

const DiasTemp = ({el, index}) => {
  
  return (
    <div className={moduleDias.divPrincipal}>
        <p className={moduleDias.colorLetra}>{contadorDias(index)}</p>
        <img src={`http://openweathermap.org/img/wn/${el?.weather[0]?.icon}@2x.png`} alt='icono del clima' />
        <div className={moduleDias.divTempMaxMin}>
            <p className={moduleDias.tempMax}>{el.temp.max.toFixed(0)}°C</p>
            <p className={moduleDias.tempMin}>{el.temp.min.toFixed(0)}°C</p>
        </div>
    </div>
  )
}

export default DiasTemp