import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import EnterName from './components/EnterName.jsx'
import CrearOIngresarConsejo from './components/CrearOIngresarConsejo.jsx';
import ColaHablantes from './components/ColaHablantes.jsx';
import MiVoto from './components/MiVoto.jsx';
import CrearVotacion from './components/CrearVotacion.jsx';
import ListaNoVotaron from './components/ListaNoVotaron.jsx';
import Votacion from './components/Votacion.jsx';

import { Button, Col, Container, Row } from 'react-bootstrap';
import Name from './components/Name';
import { useEffect, useState } from 'react';

function App() {
  const [name, editName] = useState("");

  const setName = () => {
    editName(document.getElementById("userName").value);
    showElement("crearOIngresarConsejo")
  }

  const hideElement = (id) => {
    document.getElementById(id).className = "hidden"
  }

  const showElement = (id) => {
    document.getElementById(id).className = "showed"
  }

  return (
    <div className="App">
      <EnterName 
      setName={setName} 
      hideElement={hideElement}/>
      <Name 
      name={name}/>
      <CrearOIngresarConsejo
      hideElement={hideElement}
      showElement={showElement}/>
    </div>
  );
}

export default App;
