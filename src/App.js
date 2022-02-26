import './App.css';
import React, { Component, useState } from "react"
// import User from "./User"


class App extends Component{

  constructor(){
    super();
    // console.log("constructor");
    this.state={
      name:"sagar"
    }
  }

componentDidMount(){
console.log("mount");
}

render(){
  console.log("render");
  return (
    <div className="App">
    <h1>{this.state.name}</h1>
     {/* <h1>componentDidMount, life cycle method</h1>
     <p>mount means when html css and dom all thing is ready then this fun call, it uses when we call api's,operations or any other method that depend on html </p>
    <p>no effect on state and props</p> */}
    <p>hum api call only call karenge jab page load hoga , bar bar api thoda na call karenge tabhi hum did mount use krte hai jo ki sirf ek he bar call hota hai jb page load hota hai only , tabhi props , state ka koi effect nhi pdta iske upar</p>
    <button onClick={()=>this.setState({name: "cccccc"})}>update name</button>
    </div>
  )

}

 
    
 
}

export default App;
