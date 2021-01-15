import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import { Card, Image, Categoria, Titulo, Descricao } from './style'

import HistoricoSVG from '../../assets/historicas.svg'
import CervejaSVG from '../../assets/cervejeiras.svg'
import ReligosoSVG from '../../assets/religiosas.svg'
import EcoSVG from '../../assets/eco.svg'
import AcessibilidadeSVG from '../../assets/acessibilidade-mini.svg'
import CriancasSVG from '../../assets/criancas.svg'

export default ({ data, categoryIcon }) => {

    const getData = () => {
        switch (data.categoria) {
            case "Histórico":
                return { color: '#FF296A', icon: <HistoricoSVG style={{margin: 3}}/> }
            case "Cervejeiro":
                return { color: '#FFDB29', icon: <CervejaSVG style={{margin: 3}}/> }
            case "Religioso":
                return { color: '#29A2FF', icon: <ReligosoSVG style={{margin: 3}}/> }
            case "Ecológica":
                return { color: '#5DD183', icon: <EcoSVG style={{margin: 3}}/> }
            default:
                return { color: '#000' }
        }
    }

    const styleData = getData()

    return (
        <Card>
            <Image source={{ uri: data.imagem }}></Image>
            <Descricao>
                <View>
                    <Categoria style={{ color: styleData.color }}>{data.categoria}</Categoria>
                    <Titulo>{data.titulo}</Titulo>
                </View>
                <View style={{flexDirection: 'row'}}>
                    {styleData.icon}
                    {data.acessibilidade && <AcessibilidadeSVG style={{margin: 3}}/>}
                    {data.criancas && <CriancasSVG style={{margin: 3}}/>}
                </View>

            </Descricao>


        </Card>
    )
}