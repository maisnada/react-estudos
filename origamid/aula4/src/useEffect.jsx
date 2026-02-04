import React, { useEffect, useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import Produto from "./Produto";
import Header from "./Button_";
import Button_ from "./Button_";

function App() {
  const [count, setCount] = useState(0);
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    console.log("renderizou ou atualizou");

    fetch("https://ranekapi.origamid.dev/json/api/produto/tablet")
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, []);

  useEffect(() => {
    document.title = "Count " + count;

    console.log("count atualizou");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      {produto && <Produto dados={produto} />}
    </div>
  );
}

export default App;
