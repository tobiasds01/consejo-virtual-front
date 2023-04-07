import React , {Fragment} from 'react';
import { Container, Button, Form } from 'react-bootstrap';

const EnterName = ({setName, hideElement}) => {

    return (
        <Fragment>
            <Container id="enterName">
                <h1>Ingresar nombre:</h1>
                <Form.Control size="lg" type="text" placeholder="Large text" id="userName"/>
                <Button 
                variant="success"
                onClick={() => {
                    setName()
                    hideElement("enterName")
                }}
                >Ingresar</Button>
            </Container>
        </Fragment>
    )
};

export default EnterName;