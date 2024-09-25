import React from "react";
import axios from 'axios';


//CRUD de Alunos

const listar = () => {
  axios.get('http://localhost:3005/alunos').then(resultado => {
    console.log(resultado.data);
  })
}

const ConsultarUnico = (id) => {
  axios.get(`http://localhost:3005/alunos/${id}`).then(resultado => {
    console.log(resultado.data);
  })
}

const Excluir = (id) => {
  axios.delete(`http://localhost:3005/alunos/${id}`).then(resultado => {
    console.log(resultado.status);
  })
}

const Inserir = () => {
  const aluno = { id: "4", nome: "Aluno 4", matricula: "4444" }
  axios.post(`http://localhost:3005/alunos/`, aluno).then(resultado => {
    console.log(resultado.status);
  })
}

const Alterar = (id) => {
  const aluno = { id: "4", nome: "Aluno NOVO", matricula: "4444" }
  axios.put(`http://localhost:3005/alunos/${4}`, aluno).then(resultado => {
    console.log(resultado.status);
  })
}

function App() {
  return (
    <div>
      <button onClick={listar}>Listar</button>
      <button onClick={() => { ConsultarUnico(2) }}>Consultar Único</button>
      <button onClick={() => { Inserir() }}>Inserir</button>
      <button onClick={() => { Alterar(4) }}>Alterar</button>
      <button onClick={() => { Excluir(4) }}>Excluir</button>
    </div>
  );
}

export default App;
