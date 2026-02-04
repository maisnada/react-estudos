import React from "react";

const Button = ({ setModal }) => {
  //   return <button onClick={() => setModal(true)}>Abrir</button>;

  function hadleClick() {
    setModal((ativo) => !ativo);
  }

  return <button onClick={hadleClick}>Abrir</button>;
};

export default Button;
