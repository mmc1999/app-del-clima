import React from 'react';
import imagenPrecision from "../../../iconos/precision.png"
import Search from '../search/Search';
import moduleTiempo from "./Tiempo.module.css"

const Tiempo = () => {
  return (
    <section className={moduleTiempo.divPrincipal}>
      <div className={moduleTiempo.divbotonIcono}>
        <button className={moduleTiempo.boton}>Search for places</button>
        <img src={imagenPrecision} alt="Icono de precision" className={moduleTiempo.iconoPrecision} />
      </div>
      <Search />
    </section>
  )
}

export default Tiempo