import React from "react";

const Produto = (props) => {
  let produto = props.dados;

  return (
    <section>
      <p>Nome: {produto.nome}</p>
      <p>Preço: R${produto.preco}</p>
      <p>Vendido: {produto.vendido ? "Não dispovível" : "Disponível"}</p>
      <p>Usuário: {produto.usuario_id}</p>
      <p>Descrição: {produto.descricao}</p>
      <section>
        {produto.fotos.map((foto) => (
          <img src={foto.src} title={foto.titulo} key={foto.titulo} />
        ))}
      </section>
    </section>
  );
};

export default Produto;
