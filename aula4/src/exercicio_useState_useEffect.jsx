import React, { useEffect, useState } from "react";
import Produto_ from "./Produto_";

function App() {
  // Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
  // Defina o produto clicado como uma preferência do usuário no localStorage
  // Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

  let [produto, setProduto] = useState(() => {
    let produtoPreferencial = localStorage.getItem("produto");

    return produtoPreferencial ? produtoPreferencial : null;
  });
  let [descricaoProduto, setDescricaoProduto] = useState(null);

  async function handleClick(event) {
    let produtoSelecionado = event.target.innerHTML;

    localStorage.setItem("produto", produtoSelecionado);

    let response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${produtoSelecionado.toLowerCase()}`
    );

    let json = await response.json();

    setDescricaoProduto(json);
  }

  useEffect(() => {
    if (produto) {
      fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${produto.toLowerCase()}`
      )
        .then((response) => response.json())
        .then((json) => setDescricaoProduto(json));
    }
  }, []);

  return (
    <div>
      <h1>
        Preferência: {descricaoProduto ? descricaoProduto.nome : "Não definido"}
      </h1>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      {descricaoProduto && <Produto_ dados={descricaoProduto} />}
    </div>
  );
}

export default App;
