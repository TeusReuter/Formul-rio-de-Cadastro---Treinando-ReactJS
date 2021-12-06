import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" allign="center">
          Formulário de Cadastro
        </Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validaNome={validaNome} validaSobrenome={validaSobrenome} validaCpf={validaCpf} validaTelefone={validaTelefone} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validaNome(nome){
  if(nome.length <= 0){
    return {valido:false, texto:"Preencha o campo com seu nome."}
  }
  else{
    return {valido:true, texto:""}
  }
}

function validaSobrenome(sobrenome){
  if(sobrenome.length <= 0){
    return {valido:false, texto:"Você deve informar seu sobrenome."}
  }
  else{
    return {valido:true, texto:""}
  }
}

function validaCpf(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"O CPF deve conter 11 dígitos."}
  }
  else{
    return {valido:true, texto:""}
  }
}

function validaTelefone(telefone){
  if(telefone.length <= 0){
    return{valido:false, texto:"Por favor, informe seu telefone."}
  }
  else if(telefone.length < 11){
    return{valido:false, texto:"O telefone deve conter de 11 a 12 dígitos(DDD incluso, com o 0 na frente)."}
  }
  else if(telefone.length > 12){
    return{valido:false, texto:"O telefone não pode ter mais de 12 dígitos(DDD incluso, com o 0 na frente)."}
  }

  else{
    return {valido:true, texto:""}
  }
}

export default App;
