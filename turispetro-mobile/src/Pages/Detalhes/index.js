import React from 'react'
import { Text, View, ScrollView, ImageBackground } from 'react-native'
import HomeStyle from './style'


import Seta from "../../assets/seta.svg";
import Localizacao from "../../assets/iconlocal.svg";
import Telefone from "../../assets/telefone.svg";
import Ticket from "../../assets/ticket.svg";
import Calendario from "../../assets/calendario.svg";
import LocalizPontos from "../../assets/ligacaopontos.svg";
import  Galeria from "../../assets/vergaleria.svg";
import Compartilhar from "../../assets/compartilhar.svg";
import Like from "../../assets/like.svg";
import Livro from "../../assets/livro.svg";
import Acessibilidade from "../../assets/acessibilidade.svg";
import Local from "../../assets/localizacao.svg";
import Qrcode from "../../assets/qr-code.svg";
import Star from "../../assets/star.svg"
export default ({ navigation }) => {

  
        
    return (        
        
        <ScrollView style={HomeStyle.fundo}>
            <View style={HomeStyle.body}>
                <View style={HomeStyle.header}>
                    <Seta onPress={() => navigation.goBack()}  />
            <View style={HomeStyle.div6}>
                        <Qrcode onPress={() => {
                            alert('You tapped the button!');
                        }} />
                        <Local style={{ marginLeft: 25 }} onPress={() => {
                            alert('You tapped the button!');
                        }}/>
                    </View>
                </View>
                < ImageBackground style={HomeStyle.img} source={require("../../assets/images/cervejariabohemia.jpg" )}>
                <View style={HomeStyle.div3}>
                        <Galeria onPress={() => {
                            alert('You tapped the button!');
                        }}/>
                        <Compartilhar style={{ marginLeft: 195 }} onPress={() => {
                            alert('You tapped the button!');
                        }}/>
                        <Like style={{ marginLeft: 10 }} onPress={() => {
                            alert('You tapped the button!');
                        }}/>
                </View>
                    
<View style={{flexDirection: "row"}}>
                <View style={HomeStyle.div4}>

                            <Text style={HomeStyle.txt4}>HISTÓRICO</Text>
                <Text style={HomeStyle.txt3}>Cervejaria Bohemia</Text>
                            <View style={HomeStyle.div7}>
                                <Star onPress={() => {
                                }}/>
                                <Star style={{ marginLeft: 14 }} onPress={() => {
                                }}/>
                                <Star style={{ marginLeft: 14 }} onPress={() => {
                                }}/>
                                <Star style={{ marginLeft: 14 }} onPress={() => {
                                }}/>
                                <Star style={{ marginLeft: 14 }} onPress={() => {
                                }}/>
                                <Text style={{ color: "#EEDC39", marginLeft: 10}}>(5,0)</Text>
                            </View>
                    </View>

                    <View style={HomeStyle.div5}>
                            <Livro style={{ marginLeft: 50 }} onPress={() => {
                                alert('You tapped the button!');
                            }}/>
                            <Acessibilidade style={{ marginLeft: 10 }} onPress={() => {
                                alert('You tapped the button!');
                            }}/>
                </View>
                    </View>

                       </ ImageBackground>
                       <View style={HomeStyle.div}>
                     
           
                       <Localizacao />
                       <View style={HomeStyle.txt}>
                                                  <Text>Rua Alfredo Pachá, 166</Text>
                    <Text style={{fontSize: 12}}>Centro</Text>
                    
                
 </View>
 <View style={HomeStyle.icon} >
                        <Calendario onPress={() => {
                            alert('You tapped the button!');
                        }}/> 
 <LocalizPontos style={HomeStyle.icon2} onPress={() => {
    alert('You tapped the button!');
  }}/>
 </View>

 </View>

 <View style={HomeStyle.div}>
                        <Telefone />
                       <View style={HomeStyle.txt}>
                                                  <Text>(24) 2020-9050</Text>
                
 </View>
 </View>

 <View style={HomeStyle.div}>
                        <Ticket />
                       <View style={HomeStyle.txt}>
                                                  <Text>R$ 10,00</Text>
                    <Text style={{fontSize: 12}}>Meia: R$ 5,00</Text>
                
 </View>
 </View>
 
                      
                       <View style={HomeStyle.txt2}>
                                                  <Text style={{marginTop: 15}}>Descrição</Text>
                    <Text style={{fontSize: 12}}>"A Cervejaria Bohemia é o maior centro de experiência cervejeira do país, ponto turístico de Petrópolis. Aqui você faz uma viagem pela história e a arte da fabricação de cerveja e pode aproveitar todo o nosso portfolio de cervejas no nosso restaurante e Bar Bohemia."</Text>
                
 </View>
                                         
 
            </View>
        </ScrollView>
    )
}


