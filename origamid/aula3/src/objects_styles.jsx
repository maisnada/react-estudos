import React from "react";

const titulo = <h1>Apenas um teste</h1>;

const App = () => {
  const nome = "Marcelo";
  const idade = 8;

  function apresentarNome() {
    return `Nome: ${nome} - Idade: ${idade}`;
  }

  const styleTitulo = {
    color: "red",
  };

  /*return (
    <>
      {titulo}
      <p style={styleTitulo}>App React! {nome} ;D</p>
      <a href="#">Teste ;D</a>
      <p>{idade >= 18 ? "Maior de idade" : "Menor de idade"}</p>
      <p style={{ color: "blue" }}>{apresentarNome()}</p>
      <p>{new Date().toLocaleDateString()}</p>
    </>
  );*/

  //exercícios

  const luana = {
    cliente: "Luana",
    idade: 27,
    compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
    ],
    ativa: true,
  };

  const mario = {
    cliente: "Mario",
    idade: 31,
    compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
      { nome: "Guitarra", preco: "R$ 3500" },
    ],
    ativa: false,
  };

  const dados = mario;

  const formater = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const total = dados.compras.reduce(
    (subTotal, compra) => subTotal + parseFloat(compra.preco.split(" ")[1]),
    0
  );

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Status:
        <span style={dados.ativa ? { color: "green" } : { color: "red" }}>
          {dados.ativa ? " Ativa" : " Inativa"}
        </span>
      </p>
      <p>Quantidade de compras: {dados.compras.length}</p>
      <p>Total: R$ {formater.format(total)}</p>
      <p>{total > 10000 ? "Gasto excessivo!" : ""}</p>
    </>
  );
};

export default App;
