import React, { useState, useRef, useEffect } from "react";

function App() {
  const [comentarios, setComentarios] = useState([]);

  const [input, setInput] = useState("");

  const [notificacao, setNotificacao] = useState(null);

  const inputElement = useRef();

  const timeoutRef = useRef();

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleClick() {
    setComentarios([...comentarios, input]);

    setInput("");

    inputElement.current.focus();

    setNotificacao("Obs adcionada com sucesso");

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => setNotificacao(null), 2000);
  }

  useEffect(() => inputElement.current.focus(), []);

  return (
    <div>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
        <br />
        <input
          type="text"
          ref={inputElement}
          value={input}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Enviar</button>
        <br />
        <p>{notificacao}</p>
      </ul>
    </div>
  );
}

export default App;
