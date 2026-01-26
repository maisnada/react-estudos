import { TituloFormulario } from "../TituloFormulario";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";

import "./formulario-evento.style.css";

export function FormularioEvento({ temas, aoSubmeter }) {
  function formSubmetido(formData) {
    console.log(formData);

    let evento = {
      capa: formData.get("capaEvento"),
      tema: temas.find((tema) => (tema.id = formData.get("tema"))),
      data: new Date(formData.get("dataEvento")),
      titulo: formData.get("nomeEvento"),
    };

    aoSubmeter(evento);
  }

  return (
    <form className="form-evento" action={formSubmetido}>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>

      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            name="nomeEvento"
            placeholder="Summer dev hits"
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada
            type="date"
            id="dataEvento"
            name="dataEvento"
            placeholder="Summer dev hits"
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="capaEvento">Capa do evento</Label>
          <CampoDeEntrada
            type="text"
            id="capaEvento"
            name="capaEvento"
            placeholder="https://..."
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="tema">Tema do evento</Label>
          <ListaSuspensa id="tema" name="tema" itens={temas} />
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  );
}
