import "./App.css";
import React from "react";
// import { NavItem, Table } from "react-bootstrap";
import Cols from "./Cols"

function App() {
 
  return (
 <div>
      <h1>React Fragments</h1>

    {/* it is a pattern to handle multiple component or multiple elements. it is use as wrapper
    elements= h1,p,button etc
    components = file = user.js, students.js 
    for removing extra div element in dom  or we can use in replace of fragment tag as <></> to wrap jsx*/}
          <table>
            <tbody>
              <tr>
              
              <Cols />
              </tr>
            </tbody>
          </table>
        
      

    </div>
   
  );
}

export default App;
