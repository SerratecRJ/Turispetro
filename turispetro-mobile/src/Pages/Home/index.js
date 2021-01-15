import React, { useState, useEffect, useCallback } from "react";

import axios from "axios";

import ScrollCards from "../../components/SidescrollCards";
import { View, Text } from "react-native";

import {
  Container,
  Header,
  Title,
  WeatherBox,
  WeatherText,
  WeatherDetail,
  SearchBar,
  IconArea,
  Icon,
  IconText,
  IconView,
} from "./styles";

import UserSVG from "../../assets/user.svg";
import QRCodeSVG from "../../assets/qr-code.svg";
import LocationSVG from "../../assets/location.svg";
import SunSVG from "../../assets/sun.svg";
import SearchSVG from "../../assets/search.svg";
import ComidaSVG from "../../assets/para-comer.svg";
import DormirSVG from "../../assets/para-dormir.svg";
import AtracoesSVG from "../../assets/atracoes.svg";
import CriancasSVG from "../../assets/para-criancas.svg";
import EventosSVG from "../../assets/eventos.svg";
import CircuitoSVG from "../../assets/circuitos";

import api from '../../services/api'


const Projetos = ({ navigation }) => {
  const [weather, setWeather] = useState("");
  const [data, setData] = useState([])

  const loadWeather = useCallback(async () => {
    const results = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=petropolis,br&appid=032e60cbafbe8333f3d6ee9c5a3309b3`
    );
    setWeather(results.data.main);
  }, []);

  const loadData = useCallback(async () => {
    const { data: results } = await api.get('atracoes')
    setData(results)
  }, [])

  useEffect(() => {
    loadWeather();
    loadData();
  }, [loadWeather, loadData]);

  return (
    <Container>
      <Header>
        <UserSVG onPress={() => navigation.navigate("Perfil")} />
        <View style={{ flexDirection: "row", marginLeft: "auto" }}>
          <QRCodeSVG />
          <LocationSVG style={{ marginLeft: 35 }} onPress={() => navigation.navigate("Mapa")} />
        </View>
      </Header>

      <WeatherBox>
        <SunSVG />

        <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
          <Title>Petrópolis, Rio de Janeiro</Title>
          <WeatherText>{Math.round(weather.temp - 273.15)}ºC</WeatherText>
          <WeatherDetail>Sem previsão de chuva</WeatherDetail>
        </View>
      </WeatherBox>

      <View>
        <SearchBar placeholder="Faça sua pesquisa" />
        <SearchSVG style={{ marginLeft: "auto", marginTop: 50 }} />
      </View>

      <IconArea
        horizontal={true}
        contentContainerStyle={{ alignItems: "flex-end" }}
        showsHorizontalScrollIndicator={false}
      >
        <IconView>
          <Icon onPress={() => 'navigation.navigate("Comer")'}>
            <ComidaSVG />
          </Icon>
          <IconText>Onde Comer</IconText>
        </IconView>

        <IconView>
          <Icon onPress={() => 'navigation.navigate("Dormir")'}>
            <DormirSVG />
          </Icon>
          <IconText>Onde dormir</IconText>
        </IconView>

        <IconView>
          <Icon onPress={() => navigation.navigate("Atracoes")}>
            <AtracoesSVG size={300} />
          </Icon>
          <IconText>Atrações</IconText>
        </IconView>

        <IconView>
          <Icon onPress={() => navigation.navigate("Eventos")}>
            <EventosSVG />
          </Icon>
          <IconText>Eventos</IconText>
        </IconView>

        <IconView>
          <Icon onPress={() => 'navigation.navigate("Circuitos")'}>
            <CircuitoSVG />
          </Icon>
          <IconText>Circuitos</IconText>
        </IconView>

        <IconView>
          <Icon onPress={() => navigation.navigate("Criancas")}>
            <CriancasSVG />
          </Icon>
          <IconText>Para crianças</IconText>
        </IconView>
      </IconArea>

      <ScrollCards data={data} title="Sugestões" navigation={navigation} />
    </Container>
  );
};

export default Projetos;
