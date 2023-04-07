import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const ColaHablantes = () => {
    return ( 
        <Fragment>
            <h3>Fila Hablantes</h3>
            <ul class="list-group">
                <li class="list-group-item active" aria-current="true">User1</li>
                <li class="list-group-item">User2</li>
                <li class="list-group-item">User3</li>
            </ul>
            <Button type="button" class="btn btn-warning">Pasar al Siguiente</Button>
        </Fragment>
     );
}
 
export default ColaHablantes;