import React from 'react'
import { Text, ImageBackground, View, TouchableOpacity } from 'react-native'
import { Name, Category, Card } from './style'
import StarRating from 'react-native-star-rating';


export default ({ data, navigation }) => {

    const getColor = (category) => {
        switch (category) {
            case "Histórico":
                return '#FF296A'
            case "Cervejeiro":
                return '#FFDB29'
            case "Religioso":
                return '#29A2FF'
            case "Ecológica":
                return '#5DD183'
            default:
                return '#fff'
        }
    }

    return (
        <Card>
            <TouchableOpacity
                onPress={() => navigation.navigate("Detalhes", { data })}

                style={{ marginRight: 20 }}
            >
                <ImageBackground
                    style={{
                        resizeMode: "contain",
                        height: 220,
                        width: 180
                    }} source={{ uri: data.imagem }}>

                    <View style={{ position: 'absolute', top: 0, left: 5, bottom: 5, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Category style={{ color: getColor(data.categoria) }}>{data.categoria}</Category>
                        <Name>{data.titulo}</Name>
                        <StarRating
                            containerStyle={{marginRight: 'auto'}}
                            disabled={true}
                            maxStars={5}
                            rating={data.rating}
                            emptyStarColor="white"
                            fullStarColor="orange"
                            starSize={16}
                            
                        />
                    </View>

                </ImageBackground>

            </TouchableOpacity>
        </Card>
    )
}