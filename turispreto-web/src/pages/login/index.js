import React from "react";
import logo from "../../assets/images/logo.png";
import {Link} from 'react-router-dom'; 

import {
  Background,
  Container,
  ContainerLogin,
  Logo,
  CampoInput,
  BotaoLg,
} from "./style";

const Login = () => {
  return (
    <>
      <Background>
        <Container>
          <ContainerLogin>
            <Logo>
              <img src={logo} alt="Logo da turispetro" />
            </Logo>
            <CampoInput>
              <input placeholder="email" />
            </CampoInput>
            <CampoInput>
              <input placeholder="senha" type="password" />
            </CampoInput>
            <Link to="/onde_dormir">
              <BotaoLg>Entrar</BotaoLg>
            </Link>
          </ContainerLogin>
        </Container>
      </Background>
    </>
  );
};

export default Login;
