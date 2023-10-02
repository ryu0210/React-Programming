import React from "react";
import { Fragment } from "react";
import { useState } from "react";

// { items: [], string: event}
interface SingleProp {
    items: string[];
    heading: string;
}

function ListGroup({items, heading}: SingleProp) {

    // Hook
    const [SelectedIndex, setSelectedIndex]= useState (-1) //  -1 means no item selected

    return(
        <Fragment>
        <h1>{heading}</h1>
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

/** App.tsx code here:
import ListGroup from "./assets/components/Day10_Props";
import React from "react";

function App(){
    let items = ["Jakarta", "Bali", "Bandung", "Yogyakarta","Solo"];

  return (
    <div>
        <ListGroup items={items} heading="Cities" />
    </div>
    );
  }

export default App;
 */