import React, { useState } from "react";

const personagens = [
  "Jill Valentine",
  "Jack Baker",
  "Claire Redfield",
  "Ada Wong",
  "Chris Redfield",
  "Leon S. Kennedy",
  "Albert Wesker",
  "Lucas Baker"
];

const Personagens = () => {
  const [itens, setItens] = useState(personagens);

  function buscaRedfield() {
    const novosItens = personagens.filter((personagem) => {
      if (personagem.includes("Redfield")) {
        return true;
      }
      return false;
    });
    setItens(novosItens);
  }

  function buscaBaker() {
    const novosItens = personagens.filter((personagem) => {
      if (personagem.includes("Baker")) {
        return true;
      }
      return false;
    });
    setItens(novosItens);
  }

  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <ul>
        {itens.map((personagem) => (
          <li>{personagem}</li>
        ))}
      </ul>
      <button onClick={buscaRedfield}>Redfield</button>
      <button onClick={buscaBaker}>Baker</button>
    </div>
  );
};

export default Personagens;
