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

const addRestaurante = () => {
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
            <Header>ONDE COMER</Header>
            <BodyCadastro>
              <Container>
                <input placeholder="Nome" />
                <input placeholder="Endereço" />
                <input placeholder="Bairro" />
                <input placeholder="Telefone" />
                <input placeholder="URL da foto" />
              </Container>
              <Container>
                <select>
                  <option selected="selected" disabled="disabled">
                    Categoria
                  </option>
                  <option>Adega</option>
                  <option>Bar</option>
                  <option>Bistrô</option>
                  <option>Cafeteria</option>
                  <option>Casa de chá</option>
                  <option>Confeitaria</option>
                  <option>Delivery</option>
                  <option>Fast Food</option>
                  <option>Hamburgueria</option>
                  <option>Lanchonete</option>
                  <option>Pastelaria</option>
                  <option>Pizzaria</option>
                  <option>Restaurante</option>
                  <option>Sorveteria</option>
                </select>
                <input placeholder="Capacidade" />
                <input placeholder="Horário de atendimento" />
                <input placeholder="Latitude" type="number" />
                <input placeholder="Longitude" type="number" />
              </Container>
            </BodyCadastro>
            <CanSal>
              <Link to="/onde_comer">
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

export default addRestaurante;
