import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import {FormControl} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import {HeaderComponent} from "../../components/header/HeaderComponent";


export class CategoriasPage extends Component {

    render() {
        return (
            <>
                <HeaderComponent/>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <h1>Categorias</h1>
                </div>
            </>
        );
    }

}
