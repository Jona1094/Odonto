import '../Nav/nav.css'
import React from 'react'

const Nav = () => {
  return (
    <nav className='navContainer'>
        <ul className='nav'>
            <li className='navLi'><a className='navLink' href=''>Home</a></li>
            <li className='navLi'><a className='navLink' href=''>Sobre Nosotros</a></li>
            <li className='navLi'><a className='navLink' href=''>Servicios</a></li>
            <li className='navLi'><a className='navLink' href=''>Contacto</a></li>
        </ul>
    </nav>
  )
}

export default Nav