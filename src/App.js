import "./App.css";
import React from "react";
// import { NavItem, Table } from "react-bootstrap";
import User from "./User"

function App() {

  function parentAlert(data){
    alert(data.name)
    console.log(data);
  }
 
  return (
 <div className="App">
      {/* <h1>Send Data child to parent component: in react js it is called "lifting state up"</h1> */}
         {/* send data from parent and from child to parent */}
         {/* we can use fragment anywhere, we cant take class in fragement but we can take key  */}

         <h2><User alert={parentAlert}/></h2>


    </div>
   
  );
}

export default App;
