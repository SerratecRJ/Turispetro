import React, { useState } from 'react';
import { Container } from '../Home/styles';
import { DocsInput, Header } from './style'
import { TextInput, Button, Text } from 'react-native';


import Voltar from "../../assets/voltar.svg";
import { Autocomplete } from '@material-ui/lab';
const Cadastrar = () =>{

    const [nome, setNome] = useState ('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cidade, setCidade] = useState('');
    const [data, setData] = useState('');
   

    return (
        <Container>
            <Header>
                    <Voltar onPress={() => navigation.goBack()}/>
                    <Text style={{marginLeft: "auto", marginRight: "auto"}}> CADASTRO </Text>
                    </Header>
                    
            <DocsInput>
    <TextInput
                style={{borderColor: '#959595',borderBottomWidth: 0.3, marginBottom:20, marginTop:20 }}
                placeholder={'Nome'}
                onChangeText={nome => setNome(nome)}
                value={nome}/>
           </DocsInput>
            <DocsInput>
            <TextInput
                style={{borderColor: '#959595', borderBottomWidth: 0.3, marginBottom:20 }}
                placeholder={'E-mail'}
                onChangeText={email => setEmail(email)}
                value={email}/>
                </DocsInput>
            <DocsInput>
            <TextInput
                style={{borderColor: '#959595', borderBottomWidth: 0.3, marginBottom:20}}
                placeholder={'Senha'}
                secureTextEntry= {true}
                onChangeText={senha => setSenha(senha)}
                value={senha}/>
            </DocsInput>
            <DocsInput>
            <TextInput
                style={{borderColor: '#959595', borderBottomWidth: 0.3, marginBottom:20}}
                placeholder={'Cidade'}
                onChangeText={cidade => setCidade(cidade)}
                value={cidade}/>
                </DocsInput>
                <DocsInput>
            <TextInput
                style={{borderColor: '#959595', borderBottomWidth: 0.3, marginBottom:50 }}
                placeholder={'Data de Nascimento'}
                onChangeText={data => setData(data)}
                value={data}/>
                </DocsInput>
                <Text style={{marginBottom:20, justifyContent: "center" }}>Ao se cadastrar você concorda com os "Termos de Privacidade" do aplicativo.</Text>
                <Button onPress={() => handlePress()} title="Cadastrar"/>
        </Container>
        
    )
}

export default Cadastrar;