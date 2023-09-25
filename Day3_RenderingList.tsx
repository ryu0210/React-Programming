/// For this part, you will need to create a component through a folder
/// And replace last import with import 'bootstrap/dist/css/bootstrap.css' in the main.tsx

/// jsx only allows html and/or other react elements

import React from "react";
import { Fragment } from "react";

function ListGroup() {
    const items = ["Jakarta", "Bali", "Bandung", "Yogyakarta","Solo"] 

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

// { items.map((item => <li>{item}</li>))} This map line of code is not permitted in jsx code, therefore you need to add a curly bracket to run it


            /**  the map function is often used to render a list of elements dynamically. 
            * It's a JavaScript method that allows you to iterate through an array and create a new array by applying a function to 
            * each element of the original array */

/// In Jsx or react, they do not have a "for loop" format like traditional programming, so it does not work that way