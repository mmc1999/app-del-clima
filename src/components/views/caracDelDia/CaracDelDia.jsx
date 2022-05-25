import React from 'react';
import moduleCarac from "./CaracDelDia.module.css"

const CaracDelDia = ({el}) => {
    console.log(el)
  return (
      <section className={moduleCarac.sectionCarac}>
        <div className={moduleCarac.divPrincipal}>
            <p>Wind Status</p>
            <div>
                <p className={moduleCarac.beforeSpan}><span  className={moduleCarac.span}>{el.wind_speed}</span>mph</p>
            </div>
        </div>
        <div className={moduleCarac.divPrincipal}>
            <p>Humidity</p>
            <div>
                <p className={moduleCarac.beforeSpan}><span className={moduleCarac.span}>{el.humidity}</span>%</p>
                <div className={moduleCarac.divProgresoHumedad}>
                    <div className={moduleCarac.divPorcentaje}>
                        <p>0</p>
                        <p>50</p>
                        <p>100</p>
                    </div>
                    <progress type="range" min="0" max="100" value={el.humidity} step="1" list="tickmarks" className={moduleCarac.progress}></progress>
                    <p>%</p>
                </div>
            </div>
        </div>
        <div className={moduleCarac.divPrincipal}>
            <p>Visibility</p>
            <div>
                <p className={moduleCarac.beforeSpan}><span className={moduleCarac.span}>{el.wind_speed}</span>miles</p>
            </div>
        </div>
        <div className={moduleCarac.divPrincipal}>
            <p>Air pressure</p>
            <div>
                <p className={moduleCarac.beforeSpan}><span className={moduleCarac.span}>{el.pressure}</span>mb</p>
            </div>
        </div>
      </section>
    
  )
}

export default CaracDelDia