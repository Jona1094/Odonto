import React from 'react'
import './profesionales.css'

const DatosProfesionales = ({ src, nombre, especialidad, experiencia }) => {
    return (
        <div className='datosProfesionales'>
            {<img className='profesionalImagen' src={src}/>}
            <h1 className='profesionalDato'>{nombre}</h1>
            <h1 className='profesionalDato'>{especialidad}</h1>
            <h1 className='profesionalDato'>{experiencia}</h1>
        </div>
    )
}

export default DatosProfesionales;