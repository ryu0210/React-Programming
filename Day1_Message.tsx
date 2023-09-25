import React from "react";

function Day1_Message() {
    const name = "Ryufath" // If Empty string, it will not show the name, and return hello world instead
    if (name){
        return <h1>Hello {name}!</h1>;
    }
    return <h1>Hello World!</h1>;
}

export default Day1_Message;
