import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import Produto from "./Produto";
import Header from "./Button_";
import Button_ from "./Button_";

function App() {
  /*const [ativo, setAtivo] = useState(false);
  const [dados, setDados] = useState({ nome: "Marcelo", idade: "38" });

  const [modal, setModal] = useState(() => {
    const ativo = window.localStorage.getItem("ativo");

    return ativo;
  });

  function handleClick() {
    setAtivo(!ativo);

    setDados({ ...dados, trabalhando: "sim" });
  }

  return (
    <div>
      <p>{dados.trabalhando}</p>
      <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button>

      <Modal modal={modal} setModal={setModal} />

      <p>Modal: {modal ? "Ativo" : "Inativo"}</p>
      <Button setModal={setModal} />
    </div>
  );*/

  let [produto, setProduto] = useState(null);
  let [loading, setLoading] = useState(false);

  return (
    <div>
      <Button_
        nome="Tablet"
        setProduto={setProduto}
        setLoading={setLoading}
        link="https://ranekapi.origamid.dev/json/api/produto/tablet"
      />
      <Button_
        nome="Smartphone"
        setProduto={setProduto}
        setLoading={setLoading}
        link="https://ranekapi.origamid.dev/json/api/produto/smartphone"
      />
      <Button_
        nome="Notebook"
        setProduto={setProduto}
        setLoading={setLoading}
        link="https://ranekapi.origamid.dev/json/api/produto/notebook"
      />

      <p>{loading ? "Carregando..." : ""}</p>
      {produto && <Produto dados={produto} />}
    </div>
  );
}

export default App;
