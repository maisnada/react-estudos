import React from "react";

const Produto_ = (props) => {
  return (
    <div>
      <h2>{props.dados.nome}</h2>
      <p>R$ {props.dados.preco}</p>
    </div>
  );
};

export default Produto_;
