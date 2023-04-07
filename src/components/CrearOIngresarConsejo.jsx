import React, { Fragment } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const CrearOIngresarConsejo = ({hideElement, showElement}) => {

    const ingresarAConsejo = () => {
        showElement("ingresarCodigo");
        hideElement("crearOIngresarConsejo")
    }

    return ( 
        <Fragment>
            <Container 
            id="crearOIngresarConsejo" 
            className="hidden">
                <Row>
                    <Col>
                        <Button 
                        type="button" 
                        class="btn btn-secondary"
                        >Crear Consejo
                        </Button>
                    </Col>
                    <Col>
                        <Button 
                        type="button" 
                        class="btn btn-secondary" 
                        onClick={ingresarAConsejo}
                        >Ingresar a un Consejo
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container id="ingresarCodigo" className="hidden">
                <h3>Ingresar código de consejo</h3>
                <Form.Control 
                size="lg" 
                type="text" 
                placeholder="Large text"/>
                <Button
                variant="success"
                >Ingresar                
                </Button>
            </Container>
        </Fragment>
     );
};
 
export default CrearOIngresarConsejo;