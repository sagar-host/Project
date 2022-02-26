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

componentDidUpdate(prevProps,prevState,snapshot){
console.log("update", prevState.count,this.state.count);
if(this.state.count<10){
  this.setState({count:this.state.count+1})
}
}

render(){
  console.log("render");
  return (
    <div className="App">
    <h1>componentDidUpdate, life cycle method {this.state.count}</h1>
     <p>it runs only when something update = state or props update , we should not update state directly in this,we use condition to update state inside the condition, if we cant use condition and directly use state inside then error will occur or may be infinete loop happen</p>
    <button onClick={()=>{this.setState({count:1})}}>update</button>
    we cant pass state in render because render call everytime when state change
    </div>
  )

}

 
    
 
}

export default App;
