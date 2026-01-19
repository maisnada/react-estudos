import React from "react";
import UserContext from "./UserContext";
import Carrinho from "./Carrinho";

function App() {
  return (
    <UserContext.Provider value={{ nome: "marcelo" }}>
      <Carrinho />
    </UserContext.Provider>
  );
}

export default App;
