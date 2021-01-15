import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Title, NavigateCategory } from './style'
import Card from '../LocationCard'

export default ({ data, title, navigation, icon}) => {

    return (
        <>
            <NavigateCategory
                onPress={() => navigation.navigate('Filtros', { title, data, navigation })}>
                {icon}
                {title + ' >'}
            </NavigateCategory>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {data.map(item => <Card key={Math.random()} data={item} navigation={navigation} />)}
            </ScrollView>
        </>
    )
}
