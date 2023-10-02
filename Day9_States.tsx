import React from "react";
import { Fragment } from "react";
import { useState } from "react";

function ListGroup() {
    let items = ["Jakarta", "Bali", "Bandung", "Yogyakarta","Solo"];

    // Hook
    const [SelectedIndex, setSelectedIndex]= useState (-1) //  -1 means no item selected

    return(
        <Fragment>
        <h1>List</h1>
        { items.length === 0 && <p>No Item Found</p>}

        <ul className="list-group">
            { items.map((item, index) => (
                <li 
                className= {SelectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
                // if statement ? then/return : else then/return 
                key={item} 
                onClick={ () => { setSelectedIndex(index); }}
                >
                    {item}
                </li>
                ))} 
        </ul> 
        </Fragment>
    );
}

export default ListGroup;

// Click on one of the list, and they will be highlighted