import React from "react";
import Scrollcards from "../../components/SidescrollCards";
import CloseSVG from "../../assets/close.svg";
import { View, ScrollView, Text } from "react-native";
import EventCard from '../../components/EventCard';
import FiltroSVG from '../../assets/filtro.svg';
import { Container, Header, HeaderText, EventsTitle, NextEventsView } from "./style";

export default ({ navigation }) => {
    const dataEvents = [
        {
            imagem: 'https://www.oficinadanet.com.br/imagens/post/29809/330xNxcapa-google-maps-e-carnaval-2020_1400x875_5e4d7660adb6d.png.pagespeed.ic.8463f85684.png',
            categoria: 'Eventos Anuais',
            titulo: 'Carnaval',
            data: 'Fevereiro'
        },
        {
            imagem: 'http://www.viagenseandancas.com.br/wp-content/uploads/2016/07/pessoas-noite-deguste-feira-cerveja-artesanal-petropolis.jpg',
            categoria: 'Eventos Anuais',
            titulo: 'Expo Petrópolis',
            data: 'Maio'
        },
        {
            imagem: 'http://www.viagenseandancas.com.br/wp-content/uploads/2013/07/bauernfest-danca.jpg',
            categoria: 'Eventos Anuais',
            titulo: 'Bauernfest',
            data: 'Junho'
        }

    ]
    const dataCloseEvents = [
        {
            
            categoria: 'Eventos Próximos',
            titulo: 'Show dos Residentes',
            data: '08-11-2020',
            local: 'Evento Web'
        },
        {
            
            categoria: 'Eventos Próximos',
            titulo: 'Festival de Pizza do Fernando',
            data: '14-11-2020',
            local: 'Centro'
        },
        {
            
            categoria: 'Eventos Próximos',
            titulo: 'Festa da Democracia',
            data: '15-11-2020',
            local: 'Brasil'
        },
        {
            
            categoria: 'Eventos Próximos',
            titulo: 'Festa da Democracia',
            data: '15-11-2020',
            local: 'Brasil'
        }

    ]
    return (
    <Container>
      <Header>
        
          <CloseSVG onPress={() => navigation.goBack()} />
          <HeaderText>Eventos</HeaderText>
        
      </Header>

      <Scrollcards data={dataEvents} title='Eventos Anuais' navigation={navigation} />
      <NextEventsView>
        <EventsTitle>Próximos Eventos</EventsTitle>
        <FiltroSVG />
      </NextEventsView>
      
        <ScrollView>
        {dataCloseEvents.map(item =>
               <EventCard data={item}></EventCard>
            )}
        </ScrollView>
     
    </Container>
  );
};
