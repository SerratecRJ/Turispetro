import React, { useState, useEffect, useCallback } from 'react'
import { Text, ScrollView } from 'react-native'
import Scrollcards from '../../components/SidescrollCards'
import { Header, HeaderText, CardsView } from './style'
import CloseSVG from '../../assets/close.svg'
import HistoricoSVG from '../../assets/historicas.svg'
import ReligiosaSVG from '../../assets/religiosas.svg'

import api from '../../services/api'

export default ({ navigation }) => {
    const [dataCerveja, setDataCerveja] = useState([])
    const [dataHistorico, setDataHistorico] = useState([])
    const [dataReligioso, setDataReligioso] = useState([])
    const [dataEco, setDataEco] = useState([])

    const loadData = useCallback(async () => {
        const { data: cerveja } = await api.get('atracoes?categoria=Cervejeiro&criancas=true')
        const { data: historico } = await api.get('atracoes?categoria=Histórico&criancas=true')
        const { data: religioso } = await api.get('atracoes?categoria=Religioso&criancas=true')
        const { data: eco } = await api.get('atracoes?categoria=Eco&criancas=true')
        setDataCerveja(cerveja)
        setDataHistorico(historico)
        setDataReligioso(religioso)
        setDataEco(eco)
        console.log(cerveja, historico, religioso, eco)


    }, [])

    useEffect(() => {
        loadData()
    }, [loadData])


    return (
        <ScrollView style={{ margin: 10 }}>

            <Header>
                <CloseSVG onPress={() => navigation.goBack()} />
                <HeaderText>Para Crianças</HeaderText>
            </Header>
            {!!dataHistorico.length &&
                <CardsView>
                    <Scrollcards data={dataHistorico} title={"Históricas"} navigation={navigation} icon={<HistoricoSVG />} />
                </CardsView>}
            {!!dataCerveja.length &&
                <CardsView>
                    <Scrollcards data={dataCerveja} title={"Cervejarias"} navigation={navigation} icon={<CervejaSVG />} />
                </CardsView>}
            {!!dataReligioso.length &&
                <CardsView>
                    <Scrollcards data={dataReligioso} title={"Religioso"} navigation={navigation} icon={<ReligiosoSVG />} />
                </CardsView>}
            {!!dataEco.length &&
                <CardsView>
                    <Scrollcards data={dataEco} title={"Históricas"} navigation={navigation} icon={<HistoricoSVG />} />
                </CardsView>}


        </ScrollView>

    )
}