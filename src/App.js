import './App.css';
import Usuario from './componentes/Usuario';

import './style.css';
import imagenes from './img/imagenes';
import Contador from './componentes/Contador';



function App() {
  return (
    <div className="App">
      <Contador valor={0}/>
      
      <div className='contenedor-card'>
        <Usuario picture={imagenes.img1} nombre="Maria" cargo="Gerente General" conoceme="CV de Maria"/>
        <Usuario picture={imagenes.img2} nombre="Luis" cargo="Sub-gerente General" conoceme="CV de Luis"/>
        <Usuario picture={imagenes.img3} nombre="Pedro" cargo="Gerente geral" conoceme="CV de Pedro"/>
      </div>
    </div>
  );
}

export default App;
