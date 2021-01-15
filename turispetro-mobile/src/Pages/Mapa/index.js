import React, { useState, useEffect, useCallback } from 'react'
import { View, Image, Text, Button } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import HistoricoSVG from '../../assets/mapa-historico.svg'
import CervejaSVG from '../../assets/cervejeiras.svg'
import RestauranteSVG from '../../assets/mapa-restaurante.svg'
import DormirSVG from '../../assets/mapa-dormir.svg'
import ReligiosoSVG from '../../assets/religiosas.svg'

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Card from '../../components/ModalCard'

import api from '../../services/api'


export default ({ navigation }) => {
    const [current, setCurrent] = useState({})
    const [data, setData] = useState([])

    const loadData = useCallback(async () => {
        const { data: response } = await api.get('atracoes')
        setData(response)
    }, [])

    useEffect(() => {
        loadData()
    }, [loadData])

    const renderContent = () => (
        <View
            style={{
                backgroundColor: 'white',
                padding: 16,
                height: 150,
            }}
        >
            <Card data={current} navigation={navigation} />
        </View>
    );

    const sheetRef = React.useRef(null);

    const getIcon = (categoria) => {
        switch (categoria) {
            case "Cervejeiro":
                return <CervejaSVG />
            case "Histórico":
                return <HistoricoSVG />
            case "Dormir":
                return <DormirSVG />
            case "Religioso":
                return <ReligiosoSVG />
        }
    }

    return (
        <>
            <MapView
                style={{
                    flex: 1,
                    width: '100%',
                    borderRadius: 10,
                    overflow: 'hidden',
                    marginTop: 16,
                }}
                initialRegion={{
                    latitude: -22.5115212,
                    longitude: -43.1821934,
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.014,
                }}


            >
                {data.map(local =>

                    <Marker
                        onPress={() => { sheetRef.current.snapTo(250); setCurrent(local) }}
                        key={local.titulo}
                        coordinate={{
                            latitude: local.latitude,
                            longitude: local.longitude
                        }}
                    >
                        {getIcon(local.categoria)}

                    </Marker>

                )}


            </MapView >
            <View

            >
            </View>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[0, 150, 0]}
                borderRadius={50}
                renderContent={renderContent}
            />
        </>
    )
}