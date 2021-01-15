import styled from "styled-components";
import imagem from "../../assets/images/imagem.jpg";

export const Background = styled.div`
  background-image: url(${imagem});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  min-height: 100vh;
  max-height: auto;
`;

export const Container = styled.div`
  width: 500px;
  height: 100vh;
  float: right;
  margin-right: 2vw;
  display: flex;
  align-items: center;
`;

export const ContainerLogin = styled.div`
  height: 80vh;
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 0px 10px gray;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.5vw;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 5vh 0 30vh 0;
`;

export const CampoInput = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 1.5vh;
  justify-content: center;
  display: flex;
  input {
    width: 100%;
    padding: 5px;
    font-size: 20px;
    border-radius: 5px;
    border-width: 1px;
    border-color: #c4c4c4;
  }
`;

export const BotaoLg = styled.button`
  width: 100%;
  height: 35px;
  background-color: #2633f5;
  margin: 0.5vw;
  padding: 5px;
  border-radius: 5px;
  border: none;
  max-height: 35px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  :hover {
    background-color: #4753f5;
    transition: background 0.3s;
  }
`;
