import React, { useState, useEffect } from 'react';
import './testimonios.css';

const Testimonios = () => {
    const testimonios = [
        'Gran servicio y atención al cliente. Son Muy amables.',
        'Resultados sorprendentes en poco tiempo. Grandes profesionales.',
        'Personal capacitado para cada situación. Han logrado que mi sonrisa este perfecta.',
    ];

    const [indiceTexto, setIndiceTexto] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndiceTexto((prevIndice) => (prevIndice + 1) % testimonios.length);
        }, 3000); // Cambiar cada 5 segundos

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className="testimoniosContenedor">
            <h2 className='testimoniosTitulo'>LO QUE DICEN NUESTROS PACIENTES</h2>
            <p className='testimoniosTexto'>{testimonios[indiceTexto]}</p>
        </div>
    );
};

export default Testimonios;
