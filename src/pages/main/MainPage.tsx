import React, {Component} from "react";
import {HeaderComponent} from "../../components/header/HeaderComponent";

export class MainPage extends Component {


    render() {
        return (
            <>
                <HeaderComponent/>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <h1>Programação para Internet 2 - CRUD</h1>
                </div>
            </>
        );
    }
}
