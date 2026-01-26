import { useState } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { CardEvento } from "./components/CardEvento";
import { FormularioEvento } from "./components/FormularioEvento";
import { Tema } from "./components/Tema";

function App() {
  const temas = [
    { id: 1, nome: "front-end" },
    { id: 2, nome: "back-end" },
    { id: 3, nome: "devops" },
    { id: 4, nome: "inteligência artificial" },
    { id: 5, nome: "data science" },
    { id: 6, nome: "cloud" },
  ];

  const [eventos, setEvento] = useState([
    {
      capa: "https://picsum.photos/282/237",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no front",
    },
  ]);

  function isPossuiEventos(tema) {
    return eventos.some((evento) => evento.tema.id == tema.id);
  }

  function listarEventos(tema) {
    if (isPossuiEventos(tema)) {
      return (
        <section key={tema.id}>
          <Tema tema={tema} />
          <div className="eventos" key={tema.id}>
            {eventos
              .filter((evento) => evento.tema.id == tema.id)
              .map((evento) => (
                <CardEvento evento={evento} key={evento.id} />
              ))}
          </div>
        </section>
      );
    }

    return null;
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioEvento
        temas={temas}
        aoSubmeter={(evento) => setEvento([...eventos, evento])}
      />
      <section className="container">
        {temas.map((tema) => listarEventos(tema))}
      </section>
    </main>
  );
}

export default App;
