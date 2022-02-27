import "./App.css";
import React from "react";
import {Button,Alert} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <h1> Style by bootstrap</h1>
 <Button onClick={()=>alert("hello")}>Click me</Button>


 {
  <Alert variant="info">
    This is a warning alert—check it out!
  </Alert>
}
    </div>
  );
}

export default App;
