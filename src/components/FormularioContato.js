import React, { useState } from 'react';

function FormularioContato({ adicionarContato }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !telefone || !email) return;
    adicionarContato({
      id: Date.now(),
      nome,
      telefone,
      email
    });
    setNome('');
    setTelefone('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
      />
      <input
        type="text"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        placeholder="Telefone"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Adicionar Contato</button>
    </form>
  );
}

export default FormularioContato;
