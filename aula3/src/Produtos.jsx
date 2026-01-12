import React from "react";

const Produtos = (props) => {
  const produtos = props.dados;

  return (
    <div>
      <h2 style={{ color: "green" }}>Produtos</h2>
      {produtos.map((produto) => (
        <section
          key={produto.nome}
          style={{
            border: "2px solid #000",
            marginBottom: "20px",
            padding: "10px",
          }}
        >
          <p>{produto.nome}</p>
          <ul>
            {produto.propriedades.map((propriedade) => (
              <li key={propriedade}>{propriedade}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Produtos;
