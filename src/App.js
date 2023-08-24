import ContactoNav from './components/Nav/ContactoNav';
import Nav from './components/Nav/Nav'
import Bienvenida from './components/Bienvenida/Bienvenida';
import SobreNosotros from './components/SobreNosotros/SobreNosotros'
import Servicios from './components/Servicios/Servicios'
import Testimonios from './components/Testimonios/Testimonios';
import ListaProfesionales from './components/Profesionales/ListaProfesionales';

function App() {
  
  return (
   <div>
    <ContactoNav/>
    <Nav/>
    <Bienvenida/>
    <SobreNosotros/>
    <Servicios/>
    <Testimonios/>
    <ListaProfesionales/>
   </div> 
  );
}

export default App;
