import React, { useState, useEffect } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
function App () {
  const [notas, setNotas] = useState([]);
  useEffect(()=>{
    console.log(notas)
  }, [notas])
  const criarNota = (titulo,texto)=>{
    const novaNota = {titulo,texto};
    const novoArrayNotas = [...notas,novaNota];
    setNotas(novoArrayNotas);
  }

  return (
    <section className="conteudo">
      <FormularioCadastro criarNota = {criarNota} />
      <ListaDeNotas notas = {notas}/>
    </section>
  );
}

export default App;
