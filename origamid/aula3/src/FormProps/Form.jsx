import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  const tipos = ["Item 1", "Item 2"];

  return (
    <div>
      <Input label="Nome" id="nome" />
      <Input label="Password" type="password" id="password" required />
      <Button itens={tipos} />
    </div>
  );
};

export default Form;
