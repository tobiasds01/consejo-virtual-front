import { Fragment } from "react";

const Name = ({name}) => {
    return (  
        <Fragment className="showed">
            <h3>{name}</h3>
        </Fragment>
     );
}
 
export default Name;