import "./App.css";
import React from "react";
import { BrowserRouter as Router,Link ,Route,Switch} from "react-router-dom";
import Nav from "./Nav"
import Home from "./Home"
import About from "./About"

function App() {
  return (
    <div className="App">
    {/* <h3>use react router wrapper in index.js</h3> */}
 
     <Nav/>
  

      <Route path="/" exact={true}> <Home /></Route>
      <Route path="/about"> <About /></Route>


       
      
    </div>
  );
}




export default App;
