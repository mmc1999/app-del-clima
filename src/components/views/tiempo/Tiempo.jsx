import React, { useContext } from 'react';
import imagenPrecision from "../../../iconos/precision.png"
import { SearchContext } from '../../context/searchClose';
import useGetDate from '../../hooks/useGetDate';
import ResultadoBusqueda from '../resultadoBusqueda/ResultadoBusqueda';
import Search from '../search/Search';
import moduleTiempo from "./Tiempo.module.css"

const Tiempo = () => {
  let {
    state,
    data,
  } = useGetDate();
  let {
    setIsSearchOpen,
    isSearchOpen
  }=useContext(SearchContext)
  console.log(isSearchOpen)
  return (
    <section className={moduleTiempo.divPrincipal}>
      <div className={moduleTiempo.divbotonIcono}>
        <button className={moduleTiempo.boton} onClick={() => setIsSearchOpen(true)}>Search for places</button>
        <img src={imagenPrecision} alt="Icono de precision" className={moduleTiempo.iconoPrecision} />
      </div>
      {
        isSearchOpen
        ? <Search />
        : ""
      }
      
      <ResultadoBusqueda data={data} state={state} /> 
    </section>
  )
}

export default Tiempo