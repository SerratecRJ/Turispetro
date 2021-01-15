import React from 'react';

import {
    Container,
    ContainerTop,
    ContainerBottom,
    BoxButton,
    Button,
    ButtonText,
    Header,
    BoxUsuario,
    NomeUsuario,
    CompleteCadastro,
    Menu,
  } from "./styles";

import AtracoesFavoritas from "../../assets/atracoes-favoritas.svg";
import Configuracoes from "../../assets/configuracoes.svg";
import Interrrogacao from "../../assets/interrogacao.svg";
import LocaisVisitados from "../../assets/locais-visitados.svg";
import MinhasRotas from "../../assets/minhas-rotas.svg";
import Notificacoes from "../../assets/notificacoes.svg";
import NumeroNotificacoes from "../../assets/numero-notificacoes.svg";
import Recompensas from "../../assets/recompensas.svg";
import Saida from "../../assets/saida.svg";
import Voltar from "../../assets/voltar.svg";
import MeuPerfil from "../../assets/meu-perfil.svg";
import User from "../../assets/user.svg";

const Perfil = () => {
    return (
        <Container>
            <ContainerTop>
                <Header>
                    <Voltar/>
                    <Saida/>
                </Header>

                <BoxUsuario>
                    <User width = {151} height = {151} style ={{justifyContent: 'center', marginRight:'auto', marginLeft:'auto'}}/>
                    <NomeUsuario>Carolina Vieira</NomeUsuario>

                    <CompleteCadastro>Complete seu cadastro e ganhe recompensas!</CompleteCadastro>
                    <Menu>MENU</Menu>
                </BoxUsuario>

            </ContainerTop>

            <ContainerBottom>
                <BoxButton>
                    <MeuPerfil/>
                    <Button>
                        <ButtonText>Meu Perfil</ButtonText>
                    </Button>
                </BoxButton>
                <BoxButton>
                    <Notificacoes/>
                    <Button>
                        <ButtonText>Notificações</ButtonText>
                    </Button>
                    <NumeroNotificacoes/>
                </BoxButton>
                <BoxButton>
                    <AtracoesFavoritas/>
                    <Button>
                        <ButtonText>Atrações Favoritas</ButtonText>
                    </Button>
                </BoxButton>
                <BoxButton>
                    <MinhasRotas/>
                    <Button>
                        <ButtonText>Minhas Rotas</ButtonText>
                    </Button>
                </BoxButton>
                <BoxButton>
                    <LocaisVisitados/>
                    <Button>
                        <ButtonText>Locais Visitados</ButtonText>
                    </Button>
                    <Interrrogacao/>
                </BoxButton>
                <BoxButton>
                    <Recompensas/>
                    <Button>
                        <ButtonText>Recompensas</ButtonText>
                    </Button>
                </BoxButton>
                <BoxButton>
                    <Configuracoes/>
                    <Button>
                        <ButtonText>Configurações</ButtonText>
                    </Button>
                </BoxButton>
            </ContainerBottom>
        </Container>
    )
}

export default Perfil;