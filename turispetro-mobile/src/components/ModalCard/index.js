import React from 'react'
import { Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Container, Content, Name, Category, Card } from './style'
import StarRating from 'react-native-star-rating';

export default ({ data, navigation }) => {
    const imagem = data.imagem || null

    const getColor = (category) => {
        switch (category) {
            case "Histórico":
                return '#FF296A'
            case "Cervejeiro":
                return '#FFDB29'
            case "Religiosa":
                return '#29A2FF'
            case "Ecológica":
                return '#5DD183'
            case "Dormir":
                return '#385BE6'
        }
    }

    return (
        <Container onPress={()=> navigation.navigate("Detalhes", {data})}>

            <Image style={{ width: 100, height: 100 }} source={{ uri: imagem }} />
            <Content>
                <Category style={{ color: getColor(data.categoria) }}>{data.categoria}</Category>
                <Name>{data.titulo}</Name>
                <StarRating
                    containerStyle={{ marginRight: 'auto' }}
                    disabled={true}
                    maxStars={5}
                    rating={data.rating}
                    emptyStarColor="#888"
                    fullStarColor="orange"
                    starSize={16}

                />

            </Content>
        </Container>

    )
}