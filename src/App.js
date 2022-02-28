import "./App.css";
import React from "react";
import { BrowserRouter as Router,Link ,Route,Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Link to="/home">Home Page</Link>
      <Link to="/about">About Page</Link>
    
   <Switch>
   <Route path="/home"> <Home /></Route>
      <Route path="/about"> <About /></Route>
   </Switch>

  
 

   
       
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      {/* <h1>Routing setup </h1> */}
      <h1>Home Page</h1>
      <p>This is a Home Page</p>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is a About Page</p>
    </div>
  );
}

export default App;
