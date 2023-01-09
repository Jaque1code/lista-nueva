
import { BaseColaboradores } from './Datos/BaseColaboradores.js';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from "./Componentes/Formulario.jsx"
import ListaColaboradores from "./Componentes/ListaColaboradores";
import Header from './Componentes/Header.jsx';




function App() {
  
  const [lstColaboradores, setLstColaboradores] = useState(BaseColaboradores); 
  const [valorDeLaCaja, setValorDeLaCaja] = useState('');


  return (      
    <div className="App">
      <Header  
         setValorDeLaCaja={setValorDeLaCaja}
      ></Header>
      <Formulario
          lstColaboradores={lstColaboradores}
          setLstColaboradores={setLstColaboradores}
          ></Formulario>
      <ListaColaboradores
           valorDeLaCaja={valorDeLaCaja}
           lstColaboradores={lstColaboradores}>


      </ListaColaboradores>
    </div>
  );
}

export default App;
