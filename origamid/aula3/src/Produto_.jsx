import React from "react";

const Produto_ = ({ nome, propriedades }) => {
  return (
    <div
      style={{
        border: "2px solid #000",
        marginBottom: "20px",
        padding: "10px",
      }}
    >
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade) => (
          <li key={propriedade}>{propriedade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto_;
