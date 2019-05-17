import React, {Component} from "react";
import {HeaderComponent} from "../../components/header/HeaderComponent";


export class VeiculosPage extends Component {

    render() {
        return (
            <>
                <HeaderComponent/>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <h1>Veículos</h1>
                </div>
            </>
        );
    }

}
