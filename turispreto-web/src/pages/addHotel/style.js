import styled from "styled-components";

export const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

export const Navegador = styled.div`
  height: 100vh;
  width: 20vw;
  background-color: white;
  }
`;
export const Paginas = styled.button`
  border-bottom: 1px solid #c4c4c4;
  border-top: 0px;
  border-right: 0px;
  border-left: 0px;
  padding: 1vh 1vw;
  width: 100%;
  height: 70px;
  flex: 1;
  background-color: white;
  font-size: 20px;
  :hover {
    font-weight: bold;
    cursor: pointer;
    background-color: #de614e;
    transition: background 0.3s;
    color: #fff;
  }
`;
export const Body = styled.div`
  width: 100%;
  padding: 4vh 4vw;
`;
export const Cadastro = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 1vw;
  box-shadow: 0px 0px 10px gray;
`;

export const Header = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
`;

export const BodyCadastro = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  input {
    height: 4vh;
    margin: 2vh 0px;
    padding: 1vh 1vw;
    font-size: 24px;
    border-radius: 5px;
    border-width: 1px;
    border-color: #c4c4c4;
  }
  select {
    height: 6.2vh;
    margin: 2vh 0px;
    padding: 1vh 1vw;
    font-size: 24px;
    border-radius: 5px;
    border-width: 1px;
    border-color: #c4c4c4;
  }
`;

export const CanSal = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

export const Cancelar = styled.button`
  width: 10vw;
  height: 5vh;
  border: none;
  background-color: #fff;
  border: 2px solid #d15b49;
  padding: 0;
  border-radius: 1vw;
  font-size: 20px;
  color: #d15b49;
  cursor: pointer;
  :hover {
    color: #fff;
    background-color: #de614e;
    transition: background 0.3s;
  }
`;

export const Salvar = styled.button`
  width: 10vw;
  height: 5vh;
  border: none;
  background-color: #fff;
  border: 2px solid #d15b49;
  padding: 0;
  border-radius: 1vw;
  font-size: 20px;
  color: #d15b49;
  cursor: pointer;
  :hover {
    color: #fff;
    background-color: #de614e;
    transition: background 0.3s;
  }
`;
