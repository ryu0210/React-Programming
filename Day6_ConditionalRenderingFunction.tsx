import React from "react";
import { Fragment } from "react";

function ListGroup() {
    let items = ["Jakarta", "Bali", "Bandung", "Yogyakarta","Solo"];
    items = [];

    const ConstantFunction = () => {
        return items.length === 0 ? <p>No Item Found</p> : null;;
    }
    // if statement ? then/return : else then/return 
    

    return(
        <Fragment>
        <h1>List</h1>
        { ConstantFunction() };

        
        <ul className="list-group">
            { items.map(
                (item => <li>{item}</li>)
                )
            } 
        </ul> 
        </Fragment>
    );
}

export default ListGroup;