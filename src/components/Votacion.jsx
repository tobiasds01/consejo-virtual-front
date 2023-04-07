import React, { Fragment } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Votacion = () => {
    return ( 
        <Fragment>
            <Container>
                <h3>Propuesta #1</h3>
                <Button type="button" class="btn btn-danger">Cerrar Votación</Button>
            </Container>
            <Container>
                <h3>Propuesta #1</h3>
                <Row>
                    <Col><h4>Positivos:</h4><h4>10</h4></Col>
                    <Col><h4>Abstenciones:</h4><h4>2</h4></Col>
                    <Col><h4>Negativos:</h4><h4>4</h4></Col>
                </Row>
                <Row>
                <Col><h4>No votaron:</h4><h4>0</h4></Col>
                </Row>
            </Container>
        </Fragment>
     );
}
 
export default Votacion;