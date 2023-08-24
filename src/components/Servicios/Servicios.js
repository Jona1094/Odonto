import React, { useState } from 'react';
import './servicios.css';

const ServicioPrincipal = ({ imagen }) => (
    <div className="servicioPrincipal">
        <img className="servicioPrincipalImagen" src={imagen.src} alt={imagen.alt} />
        <p className='servicioPrincipalTexto'>{imagen.texto}</p>
    </div>
);

const ServicioMiniatura = ({ imagen, onClick }) => (
        <img className="serviciosMiniatura" src={imagen.src} alt={imagen.alt} onClick={() => onClick(imagen)} />
);

const Servicios = () => {
    const imagenes = [
        {
            id: 1,
            src: require('../assets/sonriendo1.jpeg'),
            alt: 'imagen 1',
            titulo: 'Odontología General',
            texto: 'Usted y su familia pueden aprovechar una gama completa de servicios dentales aquí en Miami Shores Dental Group. Durante cada visita, será atendido por profesionales capacitados que brindarán atención de primera calidad para prevenir problemas dentales y tratar las condiciones actuales.'
        },
        {
            id: 2,
            src: require('../assets/sonriendo4.jpg'),
            alt: 'imagen 2',
            titulo: 'Odontología Restauradora',
            texto: 'Miami Shores Dental Group se compromete a ofrecer una gama completa de servicios de odontología. Ya sea que haya tenido reparaciones o necesite un reemplazo completo, le recomendamos controles continuos para evaluar sus encías y la densidad ósea para evaluar las áreas circundantes asociadas con su implante.',
        },
        {
            id: 3,
            src: require('../assets/sonriendo3.jpg'),
            titulo: 'Odontología Cosmetica',
            alt: 'imagen 3',
            texto: 'Una hermosa sonrisa es una de las características cosméticas más buscadas en el mundo. Las personas de todos los orígenes y profesiones quieren una sonrisa brillante y recta, y estamos aquí para ayudar a convertir ese deseo en realidad. Ya sea a través de ajustes menores o planes de tratamiento importantes, nuestra práctica de odontología cosmética tiene como objetivo mejorar su sonrisa y ayudarlo a generar confianza en la apariencia de sus dientes.',
        },
        {
            id: 4,
            src: require ('../assets/sonriendo2.jpg'),
            titulo: ' Servicios Periodontales',
            texto: 'La periodoncia es una rama especializada de la odontología que se centra en la prevención, el diagnóstico y el tratamiento de la enfermedad periodontal, así como en el proceso de sustitución de dientes con implantes dentales. Los periodoncistas reciben hasta tres años de capacitación especializada adicional en el tratamiento de la enfermedad periodontal y otras afecciones. Los periodoncistas también son especialistas en el tratamiento de la inflamación oral y cualquier condición que requiera un tratamiento no quirúrgico o una cirugía plástica oral. A menudo, los periodoncistas tratan afecciones causadas por la enfermedad periodontal y sus efectos, como el mal aliento persistente o la recesión de las encías.'
        }
    ];

    const [servicioSeleccionado, setServicioSeleccionado] = useState(imagenes[0]);

    const cambiarServicioPrincipal = (imagen) => {
        setServicioSeleccionado(imagen);
    };

    return (
        <div className="serviciosContenedor">
            <div className='serviciosTitulo'>
                SERVICIOS
            </div>
            <ServicioPrincipal imagen={servicioSeleccionado} />
            <div className="serviciosMiniaturaCont">
                {imagenes.map((imagen) => (
                    <ServicioMiniatura key={imagen.id} imagen={imagen} onClick={cambiarServicioPrincipal} />
                ))}
            </div>
        </div>
    );
};

export default Servicios;
