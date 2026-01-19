import React, { useEffect } from "react";
import UserContext from "./UserContext";
import Carrinho from "./Carrinho";
import useLocalStorage from "./useLocalStorage";
import useFetch from "./useFetch";

function App() {
  const [produto, setProduto] = useLocalStorage("produto", "");

  const { request, data, loading, error } = useFetch();

  useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto/"
      );

      console.log(response);
    }
    fetchData();
  }, []);

  console.log(data);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if (error) return <p>{error}</p>;

  if (loading) return <p>Carregando...</p>;

  if (data) {
    return (
      <div>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        <ul>
          {data && data.map((p) => <li key={p.nome + p.preco}>{p.nome}</li>)}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default App;
