import './App.css';
import React, { Component, useState } from "react"



class App extends Component{

  constructor(){
    super();
    console.log("constructor");
    this.state={
      count:0
    }
  }

shouldComponentUpdate(){
  console.log('shouldcomponentuupdate', this.state.count);
if (this.state.count>5 && this.state.count<10){
return true
}
}

render(){
  console.log("render");
  return (
    <div className="App">
    <h1>shouldComponentupdate, life cycle method {this.state.count}</h1>
       <p>it can stop component from updating, it stops rendering</p>
       <button onClick={()=>{this.setState({count: this.state.count+1})}}>update count</button>
    </div>
  )

}

 
    
 
}

export default App;
