import React, { useState } from "react";
import "./estilo.css";

function FormularioCadastro(props) {
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");
  
  const handleMudançaTitulo = (evento) => {
    evento.stopPropagation();
    setTitulo(evento.target.value);
  }
  const handleMudançaTexto = (evento) => {
    evento.stopPropagation();
    setTexto(evento.target.value);
  }

  const criarNota = (evento) =>  {
    evento.preventDefault();
    evento.stopPropagation();
    props.criarNota(titulo,texto);
  }

  return (
    <form className="form-cadastro " 
    onSubmit = {criarNota}
    >
      <input
        type="text"
        placeholder="Título"
        className="form-cadastro_input"
        onChange = {handleMudançaTitulo}
      />
      <textarea
        rows={15}
        placeholder="Escreva sua nota..."
        className="form-cadastro_input"
        onChange = {handleMudançaTexto}
      />
      <button className="form-cadastro_input form-cadastro_submit">
        Criar Nota
      </button>
    </form>
  );
}
export default FormularioCadastro;
