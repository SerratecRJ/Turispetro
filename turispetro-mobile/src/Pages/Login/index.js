import React from 'react'
import { Button,Image, ImageBackground, Text } from 'react-native'

import {
    BoxLogin,
    FazerLogin,
    Cadastrar,
    Logo,
    Titulo
  } from "./styles";
  
  import FundoLogin from "../../assets/FundoLogin.png";
//   import BrasaoPetropolis from "../../assets/BrasaoPetropolis.png";

export default Login => {

    return (
        <ImageBackground source={FundoLogin} style = {{resizeMode: "cover", flex: 1}} >
            <Logo>
            <Text>Prefeitura de Petropolis</Text>
            </Logo>
            <BoxLogin>
                <Titulo> Seja bem-vindo a Petrópolis </Titulo>
                <Button onPress={() => handlePress()} title="Fazer Login"/>
                <Cadastrar onPress={() => navigation.navigate(Cadastrar)}>Cadastre-se</Cadastrar>
            </BoxLogin>
        </ImageBackground>
    )
}