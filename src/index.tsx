import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AvariasPage} from "./pages/avarias/AvariasPage";
import {MainPage} from "./pages/main/MainPage";
import {CategoriasPage} from "./pages/categorias/CategoriasPage";
import {ClientesPage} from "./pages/clientes/ClientesPage";
import {FuncionariosPage} from "./pages/funcionarios/FuncionariosPage";
import {LocacoesPage} from "./pages/locacoes/LocacoesPage";
import {MultasPage} from "./pages/multas/MultasPage";
import {VeiculosPage} from "./pages/veiculos/VeiculosPage";


const routing = (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path={"/"} component={MainPage}/>
                <Route path={"/avarias"} component={AvariasPage}/>
                <Route path={"/categorias"} component={CategoriasPage}/>
                <Route path={"/clientes"} component={ClientesPage}/>
                <Route path={"/funcionarios"} component={FuncionariosPage}/>
                <Route path={"/locacoes"} component={LocacoesPage}/>
                <Route path={"/multas"} component={MultasPage}/>
                <Route path={"/veiculos"} component={VeiculosPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
