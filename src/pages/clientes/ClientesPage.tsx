import React, {Component} from "react";
import {HeaderComponent} from "../../components/header/HeaderComponent";


export class ClientesPage extends Component {

    render() {
        return (
            <>
                <HeaderComponent/>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <h1>Clientes</h1>
                </div>
            </>
        );
    }

}
