import React from "react";
import Form from "./FormProps/Form";
/* 
const Titulo = (props) => {
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
};

const App = () => {
  return (
    <div>
      <Titulo cor="red" texto="Título 1" />
      <Titulo cor="blue" texto="Título 2" />
      <Titulo cor="green" texto="Título 3" />
    </div>
  );
};
 */

/*
const Titulo = (props) => {
  return <h1>{props.children}</h1>;
};

const App = () => {
  return (
    <div>
      <Titulo>Apenas um teste</Titulo>
      <Titulo>
        <p>Subtítulo</p>
      </Titulo>
    </div>
  );
};
*/

const App = () => {
  return (
    <div>
      <Form />
    </div>
  );
};

export default App;
