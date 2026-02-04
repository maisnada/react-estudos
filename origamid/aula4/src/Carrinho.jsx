import React, { useContext } from "react";
import UserContext from "./UserContext";

const Carrinho = () => {
  const dados = useContext(UserContext);

  console.log(dados);

  return <div></div>;
};

export default Carrinho;
