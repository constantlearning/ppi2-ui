import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import {FormControl} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import {HeaderComponent} from "../../components/header/HeaderComponent";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Avaria} from "../../model/Avaria";


export class AvariasPage extends Component {

    componentDidMount() {
        this.findAvarias();
        this.createAvaria()
    }

    private findAvarias() {
        fetch("http://localhost:8080/avarias")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                (error) => {
                    console.log(error);
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    private createAvaria() {
        fetch("http://localhost:8080/avarias", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                descricao: 'Something',
                valor: 2900.99,
            })
        })
    }

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

                    {this.newAvariaCard()}

                    <br/>

                    {this.listingAvariasCard()}
                </Container>
            </>
        );
    }

    private listingAvariasCard() {
        return <Card>
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
        </Card>;
    }

    private newAvariaCard() {

        return (
            <Form>
                <Card>
                    <Card.Header>Adicionar nova avaria</Card.Header>

                    <Card.Body>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridDescricao">
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control type="text" placeholder="Informe a descrição"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridValor">
                                <Form.Label>Valor</Form.Label>
                                <Form.Control type="number" placeholder="0.00"/>
                            </Form.Group>
                        </Form.Row>

                        <ButtonToolbar>
                            <Row>
                                <Col>
                                    <Button variant="success" type="submit">Salvar</Button>
                                </Col>
                                <Col>
                                    <Button variant="danger" type="reset">Cancelar</Button>
                                </Col>
                            </Row>
                        </ButtonToolbar>

                    </Card.Body>
                </Card>

            </Form>
        );
    }
}
