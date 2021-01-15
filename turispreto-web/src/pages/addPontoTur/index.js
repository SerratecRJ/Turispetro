import React from "react";
import { Link } from "react-router-dom";
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

const addPontoTur = () => {

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
            <Header>ATRATIVO</Header>
            <BodyCadastro>
              <Container>
                <input placeholder="Nome" />
                <input placeholder="Endereço" />
                <input placeholder="Telefone" />
                <input placeholder="URL da foto" />
              </Container>
              <Container>
                <input placeholder="Ingresso" />
                <input placeholder="Descrição" />
                <input placeholder="Latitude" type="number" />
                <input placeholder="Longitude" type="number" />
              </Container>
            </BodyCadastro>
            <CanSal>
              <Link to="/atrativos">
                <Cancelar>Cancelar</Cancelar>
              </Link>
              <Salvar>Salvar</Salvar>
            </CanSal>
          </div>
        </Cadastro>
      </Body>
    </Page>
  );
};

export default addPontoTur;
