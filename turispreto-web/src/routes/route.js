import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/login";
import Hotel from "../pages/hotel";
import PontoTur from "../pages/pontoTur";
import Restaurante from "../pages/restaurante";
import Usuario from "../pages/usuario";
import AddHotel from "../pages/addHotel";
import AddPontoTur from "../pages/addPontoTur";
import AddRestaurante from "../pages/addRestaurante";
import addUsuario from "../pages/addUsuario";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/onde_dormir" component={Hotel} />
    <Route path="/atrativos" component={PontoTur} />
    <Route path="/onde_comer" component={Restaurante} />
    <Route path="/usuarios" component={Usuario} />
    <Route path="/cadastrar_onde_dormir" component={AddHotel} />
    <Route path="/cadastrar_atrativos" component={AddPontoTur} />
    <Route path="/cadastrar_onde_comer" component={AddRestaurante} />
    <Route path="/cadastrar_usuario" component={addUsuario} />
  </Switch>
);

export default Routes;
