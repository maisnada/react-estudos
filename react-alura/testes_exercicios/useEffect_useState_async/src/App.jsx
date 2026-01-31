import { useEffect, useState } from "react";

function App() {
  const [racas, setRacas] = useState(null);
  const [nome, setNome] = useState("");

  async function dogService() {
    let url = nome
      ? `http://localhost:3000/doguinhos?nome=${nome}`
      : "http://localhost:3000/doguinhos";

    const response = await fetch(url);

    console.log(url);

    return response.json();
  }

  useEffect(() => {
    const busca = async () => {
      let lista = await dogService();

      setRacas(lista);
    };

    busca();
  }, []);

  useEffect(() => {
    const busca = async () => {
      if (nome && nome.length > 3) {
        let lista = await dogService();

        setRacas(lista);
      }
    };

    busca();
  }, [nome]);

  /* useEffect(() => {
    let url = nome
      ? `http://localhost:3000/doguinhos?nome=${nome}`
      : "http://localhost:3000/doguinhos";

    const buscar = async () => {
      const response = await fetch(url);
      setRacas(await response.json());
    };

    console.log(url);

    buscar();
  }, [nome]); */

  const handleChange = (event) => {
    setNome(event.target.value);
  };

  return (
    <div>
      <p>Doguinhos</p>

      <label htmlFor="nome">
        <input
          type="text"
          name="nome"
          id="nome"
          value={nome}
          onChange={handleChange}
        />
      </label>

      {!racas ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {racas.map((projeto) => (
            <li key={projeto.nome}>{projeto.nome}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
