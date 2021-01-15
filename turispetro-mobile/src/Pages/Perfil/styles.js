import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;
export const ContainerTop = styled.View`
  flex: 1;
  padding: 20px;
`;
  export const ContainerBottom = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;
export const Header = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
`;
export const BoxUsuario = styled.View`
justify-content: center;
text-align: center;
`;
export const NomeUsuario = styled.Text`
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: 15px;
`;
export const CompleteCadastro = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #959595;
  width: 188px;
  height: 40px;
  margin-left: 70px;
  margin-bottom: 70px
`;
export const Menu = styled.Text`
  font-size: 12px;
  color: #959595;
`;
export const BoxButton = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  `;
export const Button = styled.TouchableOpacity`
  width: 266px;
  height: 65px;
  border-bottom-color: #959595;
  border-style: solid;
`;
export const ButtonText = styled.Text`
  margin-left: 20px;
  font-size: 18px;
`;
