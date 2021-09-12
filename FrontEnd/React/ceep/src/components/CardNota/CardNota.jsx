import React from "react";
import "./estilo.css";

function CardNota(props) {
  return (
    <section className="card-nota">
      <header className="card-nota_cabecalho">
        <h3 className="card-nota_titulo">{props.titulo}</h3>
      </header>
      <p className="card-nota_texto">{props.texto}</p>
    </section>
  )
}
  

export default CardNota;
