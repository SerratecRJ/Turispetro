import React, {useState, useEffect, ChangeEvent} from "react";
import makeRequest from '../../services/request';
import Pagination from '../../components/Pagination';
import {PartnerResponse} from '../../components/Types/Partner';
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
  Nome,
  Junta,
  Cabecalho,
  Descricao,
  EditDel,
  Editar,
  Del,
  Paginacao,
} from "./style";

const Restaurante = () => {
  const [partnerResponse, setPartnerResponse] = useState<PartnerResponse>();
  const [activePage, setActivePage] = useState(0);
  const [name, setName] = useState('');

  useEffect(()=> {
       const params = {
            page : activePage,
            linesPerPage: 4
       }
      name === '' ?  makeRequest({ url: "/partners/" ,  params}).then(response => setPartnerResponse(response.data)) : makeRequest({ url: `/partners/filters/${name}` ,  params}).then(response => setPartnerResponse(response.data));
  }, [activePage, name])

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  console.log(partnerResponse);
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
          <Link to="/cadastrar_onde_comer">
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
        { partnerResponse?.content.map(partner => (
          <Card key={ partner.id }>
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
              <Nome>{partner.corporateName}</Nome>
                <Junta>
                  <Cabecalho>Endereço:</Cabecalho>
                  <Descricao>{partner.street}</Descricao>
                </Junta>
                <Junta>
                  <Cabecalho>Telefone:</Cabecalho>
                  <Descricao>{partner.phone}</Descricao>
                </Junta>
                <Junta>
                  <Cabecalho>Capacidade:</Cabecalho>
                  <Descricao>{partner.capability}</Descricao>
                </Junta>
              </Text>
              <EditDel>
                <Link to="/cadastrar_onde_comer">
                  <Editar>Editar</Editar>
                </Link>
                <Del>Excluir</Del>
              </EditDel>      
            </div>
          </Card>
        ))};
        </Components>
        <Paginacao>{partnerResponse && <Pagination totalPages={partnerResponse.totalPages} activePage={activePage} onChange={page => setActivePage(page)}/>}</Paginacao>
      </Body>
    </Page>
  );
};

export default Restaurante;
