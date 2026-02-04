import React, { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(nome);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        name="nome"
        id="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <label htmlFor="email">E-mail</label>
      <input
        type="text"
        name="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <p>
        Nome: {nome} - Email: {email}
      </p>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
