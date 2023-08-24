import React from 'react'
import DatosProfesionales from './DatosProfesionales'

const Profesionales = [
    {   
        id: 1,
        src: require('../assets/odon2.jpg'),
        nombre: 'Juan Martin Gomez',
        especialidad: 'Odontología General',
        experiencia: '8 años'
    },
    {   
        id: 2,
        src: require('../assets/odon1.jpg'),
        nombre: 'Mariana Esperanza',
        especialidad: 'Ortodoncista',
        experiencia: '7 años'
    },
    {   
        id: 3,
        src: require('../assets/odon4.jpg'),
        nombre: 'Sofia Gutierrez',
        especialidad: 'Odontología General y de Urgencias',
        experiencia: '10 años'
    },
    {   
        id: 4,
        src: require('../assets/odon3.jpg'),
        nombre: 'Daniel Farias',
        especialidad: 'Odontología General y Cosmetologa',
        experiencia: '5 años'
    }
]

const ListaProfesionales = () => {
    return (
        <div className='profesionalesContainer'>
            {Profesionales.map((profesional) => (
                <DatosProfesionales
                src={profesional.src}
                key={profesional.id}
                nombre={profesional.nombre}
                especialidad={profesional.especialidad}
                experiencia={profesional.experiencia}
                />
            ))}
        </div>
    )
}

export default ListaProfesionales;