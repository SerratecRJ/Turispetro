import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import makeRequest from "../../services/request";
import {
  Page,
  Navegador,
  Paginas,
  Body,
  Cadastro,
  Header,
  BodyCadastro,
  Container,
  CanSal,
  Cancelar,
  Salvar,
} from "./style";

const AddUsuario = () => {
  const [ usuario, setUsuario ] = useState({
    login: '',
    password: '',
    user_type: 9
  });

  const history = useHistory();

  const handleAddUsuario = async (action) => {
    action.preventDefault();
    await makeRequest({method:"POST", url:"/users", data:usuario});
    alert('Cadastro realizado com sucesso!');
    history.push('/usuarios');
  };

  return (
    <Page>
      <Navegador>
        <div>
          <Link to="/onde_dormir">
            <Paginas>Onde dormir</Paginas>
          </Link>
        </div>
        <div>
          <Link to="/onde_comer">
            <Paginas>Onde comer</Paginas>
          </Link>
        </div>
        <div>
          <Link to="/atrativos">
            <Paginas>Atrativos</Paginas>
          </Link>
        </div>
        <div>
          <Link to="/usuarios">
            <Paginas>Usuários</Paginas>
          </Link>
        </div>
      </Navegador>
      <Body>
        <Cadastro>
          <div
            style={{
              padding: "4vh 4vw",
              height: "91.3%",
              width: "89.6%",
            }}
          >
            <Header>USUÁRIO</Header>
            <BodyCadastro>
              <Container>
                <input placeholder="e-mail" value={usuario.login} onChange={(texto) => { setUsuario({
                  ...usuario, login: texto.target.value }) }}/>
                <input placeholder="Senha" value={usuario.password} onChange={(texto) => { setUsuario({
                  ...usuario, password: texto.target.value }) }}/>
              </Container>
            </BodyCadastro>
            <CanSal>
              <Link to="/usuarios">
                <Cancelar>Cancelar</Cancelar>
              </Link>
              <Salvar onClick={handleAddUsuario}>Salvar</Salvar>
            </CanSal>
          </div>
        </Cadastro>
      </Body>
    </Page>
  );
};

export default AddUsuario;
