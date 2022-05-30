import React, { useContext } from 'react';
import imagenPrecision from "../../../iconos/precision.png"
import { SearchContext } from '../../context/searchClose';
import Footer from '../footer/Footer';
import Loader from '../loader/Loader';
import ResultadoBusqueda from '../resultadoBusqueda/ResultadoBusqueda';
import ResultadoOtrasCarac from '../resultadoOtrasCarac/ResultadoOtrasCarac';
import Search from '../search/Search';
import moduleTiempo from "./Tiempo.module.css"

const Tiempo = () => {
  let {
    isSearchOpen,
    setIsSearchOpen,
    ubicacion,
    data,
    loading
  }=useContext(SearchContext)
  
  return (
    <>
    <main className={moduleTiempo.divPrincipal}>
      <div className={moduleTiempo.divbotonIcono}>
        <button className={moduleTiempo.boton} onClick={() => setIsSearchOpen(true)}>Search for places</button>
        <img src={imagenPrecision} alt="Icono de precision" className={moduleTiempo.iconoPrecision} />
        {
          isSearchOpen && <Search />
          
        }
      </div>
      <div className={moduleTiempo.divResultado}>
        {
          loading 
          ? <Loader />
          : <ResultadoBusqueda data={data} state={ubicacion} /> 
        }
      </div>
      <div className={moduleTiempo.divOtrosResultados}>
        <ResultadoOtrasCarac data={data} />
      </div>
    </main>
    <Footer />
    </>
  )
}

export default Tiempo