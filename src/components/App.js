import React from "react";

const App = () => {

    const person = null;

    return <div style={{  margin: "50px", background: "lightgrey", textAlign: "center" }}>
            <h1>Person App</h1>
            {person.name}{ /* trying to access name propery from person which has null value will throw exception */ }
           </div>
}

export default App;