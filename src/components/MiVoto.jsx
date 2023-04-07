import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const MiVoto = () => {
    return ( 
        <Fragment>
            <h3>Propuesta #1</h3>
            <Container>
                
                <Row>
                    <Col><button type="button" class="btn btn-success">Positivo</button></Col>
                    <Col><button type="button" class="btn btn-warning">Abstención</button></Col>
                    <Col><button type="button" class="btn btn-danger">Negativo</button></Col>
                </Row>
            </Container>
            <Container>
                <h3>Tu voto fue:</h3>
                <h3>Positivo</h3>
                <button type="button" class="btn btn-danger">Cancelar</button>
            </Container>
        </Fragment>
     );
}
 
export default MiVoto;