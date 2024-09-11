import React from 'react';
import ItemContato from './ItemContato';

function ListaContatos({ contatos, removerContato }) {
  return (
    <ul>
      {contatos.map(contato => (
        <ItemContato
          key={contato.id}
          contato={contato}
          removerContato={removerContato}
        />
      ))}
    </ul>
  );
}

export default ListaContatos;
