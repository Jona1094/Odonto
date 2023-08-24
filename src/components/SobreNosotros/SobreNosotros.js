import React from 'react'
import '../SobreNosotros/sobreNosotros.css'
import sobre from '../assets/sonriendo5.jpg'
import { useInView } from 'react-intersection-observer';

const SobreNosotros = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div className='sobreNosotros'>
      <div className='sobreNosotros__ContImg'>
        <img className='sobreNosotros__Img' src={sobre}/>
      </div>
        
        <div ref={ref} className={`sobreNosotros__Texto ${inView ? 'aparecer' : ''}`}>
          <h1 className='sobreNosotros__Titulo'>
            Bienvenido a Sonrisa Perfecta!
          </h1>
          <h2 className='sobreNosotros__Texto1'>
          Creemos que una sonrisa vale más que mil palabras, y estamos dedicados a brindar a nuestros pacientes atención dental de alta calidad. Ofrecemos una gama completa de servicios dentales, por lo que todas las necesidades de su familia se satisfacen bajo un mismo techo.
          Si está buscando iluminar y mejorar su sonrisa.
          </h2>
          <h2 className='sobreNosotros__Texto1'>
          Nuestro objetivo es que salga de nuestra oficina con una experiencia dental memorable y placentera, por lo que nuestro personal acogedor y compasivo hará todo lo posible para que se sienta como en casa.
          Si está buscando iluminar y mejorar su sonrisa.
          </h2>
        </div>
        
    </div>
  )
}

export default SobreNosotros