import React from "react";

function handleClick(event) {
  console.log(event.target);
}
const App = () => {
  return (
    <div>
      <button onClick={handleClick}>Com função</button>
      <button onClick={({ target }) => target.classList.toggle("ativa")}>
        Com função anônima
      </button>
    </div>
  );
};

export default App;
