import React, { useState } from 'react';
import FormularioContato from './components/FormularioContato';
import ListaContatos from './components/ListaContatos';
import Header from './components/Header';
import './App.css';

function App() {
  const [contatos, setContatos] = useState([]);

  const adicionarContato = (contato) => {
    setContatos([...contatos, contato]);
  };

  const removerContato = (id) => {
    setContatos(contatos.filter(contato => contato.id !== id));
  };

  return (
    <div className="container">
      <Header>LISTA DE CONTATOS</Header>
      <FormularioContato adicionarContato={adicionarContato} />
      <ListaContatos contatos={contatos} removerContato={removerContato} />
    </div>
  );
}

export default App;
