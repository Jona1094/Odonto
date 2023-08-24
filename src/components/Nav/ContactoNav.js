import React from "react";
import imgTel from '../assets/telefono.png'
import imgUbic from '../assets/ubicacion.png'
import imgInsta from '../assets/instagram.png'
import './nav.css'

const ContactoNav = () => {
    return (
        <div className="navContacto">
            <div className="navContacto__Container">
                <div className="navContacto__Tel">
                    <img className="imgTel" src={imgTel}/>
                    <h1 className="navContactoNum">11 -68401026</h1>
                </div>
                <div className="navContacto__Ubic">
                    <img className="imgTel" src={imgUbic}/>
                    <h1 className="navContactoNum">Nuestro consultorio se encuentra en</h1>
                    <h1 className="navContactoNum">Capital Federal, Argentina</h1>
                </div>
                <div className="navContacto__Redes">
                    <img className="imgTel" src={imgInsta}/>
                    <h1 className="navContactoNum">/sonrisaPerfecta</h1>
                </div>
            </div>
        </div>
    )
}

export default ContactoNav