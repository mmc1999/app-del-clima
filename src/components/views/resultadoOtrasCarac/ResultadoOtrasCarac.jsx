import React from 'react'
import CaracDelDia from '../caracDelDia/CaracDelDia';
import DiasTemp from '../diasTemp/DiasTemp';
import moduleResultadoCarac from "./ResultadoOtrasCarac.module.css"

const ResultadoOtrasCarac = ({data}) => {
    let {
        daily,
        current
    } = data;
    let array = [current];
  return (
    <section className={moduleResultadoCarac.sectionPrincipal}>
        <div className={moduleResultadoCarac.divDias}>
            {
                daily?.map((el, index) => 
                    <DiasTemp key={index} el={el}  />
                )
            }
        </div>
        <div className={moduleResultadoCarac.current}>
            <h2 className={moduleResultadoCarac.h2}>Today's Highlights</h2>
            {
                !current
                ? "" 
                : array.map(el => 
                    <CaracDelDia key={el} el={el} />    
                )
            }    
        </div>
    </section>
  )
}

export default ResultadoOtrasCarac