import React from 'react'
import bienvenida from '../Bienvenida/bienvenida.css'
import riendo from '../assets/riendo.mp4'

const Bienvenida = () => {
  return (
    <div className='bienvenida'>
        <video autoPlay loop preload='auto' className='bienvenidaVideo' src={riendo}/>
        <div className='bienvenidaConsulta'>
          <h1 className='bienvenidaConsulta__Txt1'>¡Bienvenido!</h1>
          <a className='bienvenidaConsulta__Txt2' href=''>¡No dudes en contactarnos!</a>
        </div>
       
    </div>
  )
}

export default Bienvenida