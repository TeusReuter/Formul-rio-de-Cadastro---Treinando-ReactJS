import React, { useState } from "react";
import { TextField, Switch, FormControlLabel, Button } from "@material-ui/core";

function FormularioCadastro({ aoEnviar, validaNome, validaSobrenome, validaCpf, validaTelefone }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erroNome, setErroNome] = useState({nome:{valido:true, texto:""}})
  const [erroSobrenome, setErroSobrenome] = useState({sobrenome:{valido:true, texto:""}})
  const [erroCpf, setErroCpf] = useState({cpf:{valido:true, texto:""}})
  const [erroTelefone, setErroTelefone] = useState({telefone:{valido:true, texto:""}})

  console.log(nome, sobrenome, cpf, promocoes, novidades);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades, telefone });
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        onBlur={(event)=>{
            const nomeValido = validaNome(nome);
            setErroNome({nome:nomeValido})
          }}
          error={!erroNome.nome.valido}
          helperText={erroNome.nome.texto}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        onBlur={(event)=>{
            const sobrenomeValido = validaSobrenome(sobrenome);
            setErroSobrenome({sobrenome:sobrenomeValido})
        }}
        error={!erroSobrenome.sobrenome.valido}
        helperText={erroSobrenome.sobrenome.texto}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event)=>{
            const cpfValido = validaCpf(cpf);
            setErroCpf({cpf:cpfValido})
        }}
        error={!erroCpf.cpf.valido}
        helperText={erroCpf.cpf.texto}
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={telefone}
        onChange={(event) => {
          setTelefone(event.target.value);
        }}
        onBlur={(event)=>{
            const telefoneValido = validaTelefone(telefone);
            setErroTelefone({telefone:telefoneValido}) 
        }}
        error={!erroTelefone.telefone.valido}
        helperText={erroTelefone.telefone.texto}
        id="telefone"
        label="Telefone"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"   
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="" variant="outlined" size="large" color="inherit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
