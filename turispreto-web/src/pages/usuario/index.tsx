import React, {useState, useEffect, ChangeEvent} from "react";
import makeRequest from '../../services/request';
import Pagination from '../../components/Pagination';
import { Link } from "react-router-dom";
import {
  Page,
  Navegador,
  Paginas,
  Body,
  Header,
  Add,
  Pesquisa,
  Components,
  Card,
  Text,
  Junta,
  Cabecalho,
  Descricao,
  EditDel,
  Editar,
  Del,
  Paginacao,
} from "./style";
import { UserResponse } from "../../components/Types/User";

const Usuario = () => {
  const [userResponse, setUserResponse] = useState<UserResponse>();
  const [activePage, setActivePage] = useState(0);
  const [name, setName] = useState('');
  const [refresh, setRefresh] = useState(true);
  
  useEffect(()=> {
    const params = {
      page : activePage,
      linesPerPage: 4
    }
 name === '' ?  makeRequest({ url: '/users' ,  params}).then(response => setUserResponse(response.data)) :    makeRequest({ url: `/users/filters/${name}` ,  params}).then(response => setUserResponse(response.data));
  }, [activePage, name, refresh])

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  const handleDeleteUsuario = async (id:number) => {
    await makeRequest({method:"DELETE", url:`/users/${id}`});
    setRefresh(!refresh);
  }

  console.log(userResponse);
  return (
    <Page>
      <Navegador>
        <div>
          <Link to="/onde_dormir">
            <Paginas>Onde dormir</Paginas>
          </Link>
        </div>
        <div>
          <Link to="/onde_comer">
            <Paginas>Onde comer</Paginas>
          </Link>
        </div>
        <div>
          <Link to="/atrativos">
            <Paginas>Atrativos</Paginas>
          </Link>
        </div>
        <div>
          <Link to="/usuarios">
            <Paginas>Usuários</Paginas>
          </Link>
        </div>
      </Navegador>
      <Body>
        <Header>
          <Link to="/cadastrar_usuario">
            <Add>Adicionar</Add>
          </Link>
          <Pesquisa>
          <input placeholder="Nome" 
                        name="name"
                        value={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}></input>
            <button>Pesquisar</button>
          </Pesquisa>
        </Header>
        <Components>
        {userResponse?.content.map(user => (
          <Card key={user.user_id}>
            <div
              style={{
                padding: "1vh 1vw",
                height: "87.5%",
                width: "97.5%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text>
                <Junta>
                  <Cabecalho>e-mail:</Cabecalho>
                  <Descricao>{user.login}</Descricao>
                </Junta>
                <Junta>
                  <Cabecalho>Tipo:</Cabecalho>
                  <Descricao>{user.userType}</Descricao>
                </Junta>
              </Text>
              <EditDel>
                <Link to="/cadastrar_usuario">
                  <Editar>Editar</Editar>
                </Link>
                <Del value={user.user_id} onClick={handleDeleteUsuario(user.user_id)}>Excluir</Del>
              </EditDel>
            </div>
          </Card>
        ))}
        </Components>
        <Paginacao>{userResponse && <Pagination totalPages={userResponse.totalPages} activePage={activePage} onChange={page => setActivePage(page)}/>}</Paginacao>
      </Body>
    </Page>
  );
};

export default Usuario;
