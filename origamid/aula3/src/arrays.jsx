import React from "react";

const App = () => {
  /*const veiculos = ["Carro", "Moto", "Barco"];

  return (
    <>
      <ul>
        {veiculos.map((veiculo) => (
          <li key={veiculo}>{veiculo}</li>
        ))}
      </ul>
    </>
  ); */

  const livros = [
    { nome: "A Game of Thrones", ano: 1996 },
    { nome: "A Clash of Kings", ano: 1998 },
    { nome: "A Storm of Swords", ano: 2000 },
  ];

  return (
    <>
      <ul>
        {livros
          .filter(({ nome, ano }) => ano < 2000)
          .map((livro) => (
            <li key={livro.nome}>
              {livro.nome} - {livro.ano}
            </li>
          ))}
      </ul>
    </>
  );
};

export default App;
