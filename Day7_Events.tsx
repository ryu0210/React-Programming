import React from "react";
import { Fragment } from "react";

function ListGroup() {
    let items = ["Jakarta", "Bali", "Bandung", "Yogyakarta","Solo"];

    return(
        <Fragment>
        <h1>List</h1>
        { items.length === 0 && <p>No Item Found</p>}

        <ul className="list-group">
            { items.map((item, index) => (
                <li 
                className="list-group-item" 
                key={item} 
                onClick={() => console.log(item, index)}
                >
                    {item}
                </li>
                ))} 
        </ul> 
        </Fragment>
    );
}

export default ListGroup;

// If you click Jogja, console log shows jogja

/** To Open Console, click "Ctrl +Shift +J" */