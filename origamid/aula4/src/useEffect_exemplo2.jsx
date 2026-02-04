import React, { useEffect, useState } from "react";
import Item from "./Item";

function App() {
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    console.log("ativo atualizou");
  }, [ativo]);

  return (
    <div>
      {ativo && <Item />}
      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? "Ativo" : "Inativo"}
      </button>
    </div>
  );
}

export default App;
