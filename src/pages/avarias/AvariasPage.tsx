import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import {FormControl} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import {HeaderComponent} from "../../components/header/HeaderComponent";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export class AvariasPage extends Component {

    render() {
        return (
            <>
                <HeaderComponent/>

                <Container>

                    <br/>

                    <h1 style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>Avarias</h1>

                    <br/>

                    <Card>
                        <Card.Header>Adicionar nova avaria</Card.Header>

                        <Card.Body>

                            <Card.Text>
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-sm">Descrição</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                                    <br/>
                                </InputGroup>
                            </Card.Text>

                            <Card.Text>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>R$</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Amount (to the nearest dollar)" type="number"/>
                                    <InputGroup.Append>
                                        <InputGroup.Text>.00</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Card.Text>

                            <Card.Text>
                                <ButtonToolbar>
                                    <Row>
                                        <Col>
                                            <Button variant="success" size="lg" active>Salvar</Button>
                                        </Col>
                                        <Col>
                                            <Button variant="danger" size="lg" active>Cancelar</Button>
                                        </Col>
                                    </Row>
                                </ButtonToolbar>
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <br/>

                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Card.Text>
                            <Card.Text>
                                <Table responsive>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Table heading</th>
                                        <th>Table heading</th>
                                        <th>Table heading</th>
                                        <th>Table heading</th>
                                        <th>Table heading</th>
                                        <th>Table heading</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </>
        );
    }

}
