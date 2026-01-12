import React from "react";
import Titulo_ from "./Titulo_";
import Produto_ from "./Produto_";

const Produtos_ = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];
  return (
    <section>
      <Titulo_ nome="Produtos" />
      <p>Lista de Produtos</p>
      {produtos.map((produto) => (
        <Produto_ key={produto.nome} {...produto} />
      ))}
    </section>
  );
};

export default Produtos_;
