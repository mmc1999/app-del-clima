import React from 'react'
import moduleFooter from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={moduleFooter.footer}>
        <p className={moduleFooter.info}>© UNTITLED | Sitio web creado por <a href='https://matiascentorbi.vercel.app/' className={moduleFooter.enlace} target="_blank">Matias centorbi</a> 
        </p>
    </footer>
  )
}

export default Footer