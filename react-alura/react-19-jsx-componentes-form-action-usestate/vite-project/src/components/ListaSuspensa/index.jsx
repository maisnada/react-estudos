import "./lista-suspensa.style.css";

export function ListaSuspensa({ itens, ...proriedades }) {
  return (
    <select className="lista-suspensa-form" defaultValue="" {...proriedades}>
      <option value="" disabled>
        Selecione uma opção
      </option>
      {itens.map((tema) => (
        <option value={tema.id} key={tema.id}>
          {tema.nome}
        </option>
      ))}
    </select>
  );
}
