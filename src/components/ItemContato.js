import React from 'react';

function ItemContato({ contato, removerContato }) {
  return (
    <li>
      <span>{contato.nome} - {contato.telefone} - {contato.email}</span>
      <button onClick={() => removerContato(contato.id)}>Remover</button>
    </li>
  );
}

export default ItemContato;
