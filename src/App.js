import "./App.css";
import React from "react";
import { BrowserRouter as Router,Link,Route,Switch } from "react-router-dom";
// import { NavItem } from "react-bootstrap";
import User from "./User"

function App() {

  let users = [
    { id: 1, name: 'sagar', email: 'sag@m.com'},
    { id: 2, name: 'preet', email: 'preet@m.com'},
    { id: 3, name: 'harpal', email: 'har@m.com'},
    { id: 4, name: 'anil', email: 'anil@m.com'},
    { id: 5, name: 'peter', email: 'peter@m.com'},
    { id: 14, name: 'sam', email: 'sam@m.com'},


  ]


  return (
    <div className="App">
    <Router>

      <h3>Dynamic Routing with params</h3>
      {/* <p>if we have no of iproducts, items ,pages !how to apply routing for that?we can use loop - map function,for loop based on id, name we can apply routing, when we click on item then uski routing he parameter ke andar chli jaye</p> */}
      
      {
        users.map((item)=>
        <div> <Link to={"/user/"+item.id+"/"+item.name}><h3>{item.name}</h3></Link></div>
        )
      }
      <Route path="/user/:id/:name"><User/></Route>
      </Router>
      </div>
      )
 }

export default App;
