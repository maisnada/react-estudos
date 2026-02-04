import React from "react";
import Home from "./Home";
import Link from "./Link";
import Produtos from "./Produtos";

const App = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  const { pathname } = window.location;

  function loadPage() {
    console.log(pathname);

    let path = pathname.replace("/", "");

    if (path === "Produtos") {
      return <Produtos dados={produtos} />;
    }
    return <Home />;
  }

  return (
    <>
      <ul>
        <li>
          <Link nome="Home" />
        </li>
        <li>
          <Link nome="Produtos" />
        </li>
      </ul>
      {loadPage()}
    </>
  );
};

export default App;
