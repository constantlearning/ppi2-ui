import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export class HeaderComponent extends Component {

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">PPI-2</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="avarias">Avarias</Nav.Link>
                        <Nav.Link href="categorias">Categorias</Nav.Link>
                        <Nav.Link href="clientes">Clientes</Nav.Link>
                        <Nav.Link href="funcionarios">Funcionários</Nav.Link>
                        <Nav.Link href="locacoes">Locações</Nav.Link>
                        <Nav.Link href="multas">Multas</Nav.Link>
                        <Nav.Link href="veiculos">Veículos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
