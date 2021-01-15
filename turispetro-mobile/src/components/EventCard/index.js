import React from 'react'
import { View } from 'react-native'

import { Card, Agenda, Local, Titulo } from './style'

export default ({ data }) => {

    return (
        <Card>
            <View>
                <Titulo>{data.titulo}</Titulo>
                <Local>{data.local}</Local>
                <Agenda>{data.data}</Agenda>
            </View>

        </Card>
    )
}