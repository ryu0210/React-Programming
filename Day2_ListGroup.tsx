/// For this part, you will need to create a component through a folder
/// And replace last import with import 'bootstrap/dist/css/bootstrap.css' in the main.tsx

import React from "react";
import { Fragment } from "react";

function ListGroup() {
    return(
        <Fragment>
        <h1>List</h1>
        <ul className="list-group">
            <li className="list-group"> An item</li>
            <li className="list-group"> A 2nd item</li>
            <li className="list-group"> A 3rd item</li>
            <li className="list-group"> A 4th item</li>
            <li className="list-group"> A 5th item</li>
        </ul> 
        </Fragment>
    );
}

export default ListGroup;

/// React Fragment is a feature in React that allows you to return multiple elements from a "React component" by 
/// allowing you to group a list of children without adding extra nodes to the DOM