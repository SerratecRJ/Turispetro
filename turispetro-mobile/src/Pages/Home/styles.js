import styled from 'styled-components/native';


export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;

  
`;

export const Header = styled.View`
  margin: 25px 0;
  flex-direction: row;
  align-items: center;
`


export const Title = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #212529;
`;
export const WeatherBox = styled.View`
  flex-direction: row;
  padding: 10px;
  border: 1px solid #a2a2a2;
  border-radius: 20px;
`

export const WeatherText = styled.Text`
  font-size: 24px;
  color: #D15B49;
`

export const WeatherDetail = styled.Text`
  font-size: 12px;
  color: #999;
`

export const SearchBar = styled.TextInput`
  flex: 1;
  margin-top: 50px;
  background-color: #DEDEDE;
  border-radius: 20px;
  height: 44px;
  padding-left: 30px;
  position: absolute;
  width: 100%;
`
export const IconArea = styled.ScrollView`
  margin: 25px 0px;
  flex-direction: row;
  
`
export const IconView = styled.View`
  justify-content: center;
  align-items: center;
  width: 65px;
`

export const Icon = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 10px;
  border: 1px solid #a2a2a2;
`

export const IconText = styled.Text`
  color: #D15B49;
  font-size: 10px;
`