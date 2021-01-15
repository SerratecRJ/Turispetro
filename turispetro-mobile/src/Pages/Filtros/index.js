import React from 'react'
import { Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Sugestion, SugestionText, SugestionHeader } from './style'
import FilterCard from '../../components/FilterCard'
import CloseSVG from '../../assets/close.svg'
import FiltroSVG from '../../assets/filtro.svg';

export default ({ route: { params: { title, data, navigation }} }) => {
    

    return (
        <Sugestion>

            <SugestionHeader>
                <CloseSVG onPress={() => navigation.goBack()} />
                <SugestionText>{title}</SugestionText>
                <FiltroSVG />
            </SugestionHeader>
            
            {data.map(item =>
                <FilterCard data={item}></FilterCard>

            )}
        </Sugestion>

    )
}