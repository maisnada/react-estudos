import React from "react";
import Header_ from "./Header_";
import Home_ from "./Home_";
import Produtos_ from "./Produtos_";

const App = () => {
  let Pagina = Home_;

  const { pathname } = window.location;

  if (pathname === "/Produtos") {
    Pagina = Produtos_;
  }

  return (
    <section>
      <Header_ />
      <Pagina />
    </section>
  );
};

export default App;
