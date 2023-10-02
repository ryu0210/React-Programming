/// For this part, you will need to create a component through a folder
/// And replace last import with import 'bootstrap/dist/css/bootstrap.css' in the main.tsx

/// jsx only allows html and/or other react elements

import React from "react";
import { Fragment } from "react";

function ListGroup() {
    let items = ["Jakarta", "Bali", "Bandung", "Yogyakarta","Solo"];
    items = [];

    if (items.length == 0)
        return (
            <Fragment>
                <h1>List</h1>
                <p>No Item Found</p>;
            </Fragment>
        );

    return(
        <Fragment>
        <h1>List</h1>
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

/** In React and TypeScript, the => symbol is often used to denote arrow functions, also known as "fat arrow" functions. 
 * Arrow functions are a concise way to define functions in JavaScript and TypeScript 
 * const add = (a, b) => {
  return a + b;
};*/