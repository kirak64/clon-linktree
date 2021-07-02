import React,{Fragment} from 'react'
import Navbar from './components/Navbar'
import Perfil from './components/Perfil';
import LinkLista from './components/LinkLista';

function App() {
 
  return (
    <Fragment>
        <Navbar/>
        <Perfil/>
        <LinkLista/>
    </Fragment>
    
  );
}

export default App;
