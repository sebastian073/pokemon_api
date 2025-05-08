import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Listar from  './Componentes/Listar'
import Aleatorios from  './Componentes/Aleatorios'
import Detalle from  './Componentes/Detalle'
import Favoritos from './Componentes/Favoritos'
import Original from './Componentes/Original'
import Usuario from './Componentes/Usuario'
import Menu from './Componentes/Menu';
import { AppProvider } from './Componentes/contexto/contexto';


function App() {

  return (
    <AppProvider>
    <Router>
      <Menu />

      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/capturados" element={<Capturados />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/detalle/:name" element={<Detalle />} />
      </Routes>

    </Router>
    </AppProvider>
  );
}

export default App
