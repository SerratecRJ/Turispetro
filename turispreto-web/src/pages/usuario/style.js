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
  padding: 2vh 2vw;
`;
export const Header = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Add = styled.button`
  width: 10vw;
  height: 6vh;
  border: none;
  background-color: #d15b49;
  margin-right: 2vw;
  padding: 0;
  border-radius: 1vw;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  :hover {
    background-color: #de614e;
    transition: background 0.3s;
  }
`;
export const Pesquisa = styled.div`
  display: flex;
  height: 6vh;
  flex: 1;
  flex-direction: row;
  background-color: #fff;
  align-items: center;
  justify-content: space-around;
  border-radius: 1vw;
  box-shadow: 0px 0px 10px gray;
  input {
    border-bottom: 1px solid #c4c4c4;
    font-size: 20px;
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    width: 30vw;
    height: 4vh;
  }
  button {
    width: 10vw;
    height: 4.5vh;
    border: none;
    background-color: #d15b49;
    border-radius: 1vw;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    :hover {
      background-color: #de614e;
      transition: background 0.3s;
    }
  }
`;

export const Components = styled.div`
  width: 100%;
  height: 76vh;
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  box-shadow: 0px 0px 10px gray;
  width: 100%;
  height: 16vh;
  background-color: white;
  border-radius: 1vw;
  margin: 1.5vh 0px;
`;

export const Text = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Junta = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Cabecalho = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-right: 2px;
`;
export const Descricao = styled.div`
  font-size: 20px;
`;

export const EditDel = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const Editar = styled.button`
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

export const Del = styled.button`
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

export const Paginacao = styled.div`
  width: 100%;
  height: 10vh;
`;
