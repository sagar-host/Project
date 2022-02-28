import "./App.css";
import React from "react";
import { BrowserRouter as Router,Link,Route,Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <h3>404 - Page Not Found!</h3> */}
      <Router>
       <Link to="/">Home</Link><br />
       <Link to="/about">About</Link><br />
       {/* <Link to="/login">login</Link><br /> */}



      <Switch>
       <Route path="/" exact={true}><Home/></Route>

       <Route path="/about"><About/></Route>

       <Route path="*"><PageNotFound/></Route>

       </Switch>
{/* star tells if no route open then open 404 page only */}


      </Router>
    </div>
  );
}

function Home(){
  return(
    <div>
      <h1>Home page</h1>
      <p>
        This is home 
      </p>
    </div>
  )
}

function About(){
  return(
    <div>
      <h1>About page</h1>
      <p>
        This is about Us
      </p>
    </div>
  )
}


function PageNotFound(){
  return(
    <div>
      <h1>404 page</h1>
      <p>
        This Page Not Found!
      </p>
    </div>
  )
}

export default App;
