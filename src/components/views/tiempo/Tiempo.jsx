import React, { useContext } from 'react';
import imagenPrecision from "../../../iconos/precision.png"
import { SearchContext } from '../../context/searchClose';
import ResultadoBusqueda from '../resultadoBusqueda/ResultadoBusqueda';
import ResultadoOtrasCarac from '../resultadoOtrasCarac/ResultadoOtrasCarac';
import Search from '../search/Search';
import moduleTiempo from "./Tiempo.module.css"

const Tiempo = () => {
  let {
    isSearchOpen,
    setIsSearchOpen,
    state,
    data,
  }=useContext(SearchContext)
  
  return (
    <section className={moduleTiempo.divPrincipal}>
      <div className={moduleTiempo.divbotonIcono}>
        <button className={moduleTiempo.boton} onClick={() => setIsSearchOpen(true)}>Search for places</button>
        <img src={imagenPrecision} alt="Icono de precision" className={moduleTiempo.iconoPrecision} />
        {
          isSearchOpen
          ? <Search />
          : ""
        }
      </div>
      <div className={moduleTiempo.divResultado}>
        <ResultadoBusqueda data={data} state={state} /> 
      </div>
      <div className={moduleTiempo.divOtrosResultados}>
        <ResultadoOtrasCarac data={data} />
      </div>
    </section>
  )
}

export default Tiempo