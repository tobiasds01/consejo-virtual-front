import React, { Fragment } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const CrearVotacion = () => {
    return ( 
        <Fragment>
            <Container>
                <h3>Ingresar nombre de la votación</h3>
                <Form.Control size="lg" type="text" placeholder="Large text" />
                <Button type="button" class="btn btn-success">Success</Button>
            </Container>
        </Fragment>
     );
}
 
export default CrearVotacion;