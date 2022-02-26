import './App.css';
import React, { Component, useState } from "react"
import Student  from './Student';


class App extends Component{

  constructor(){
    super();
    console.log("constructor");
    this.state={
     show: true
    }
  }


render(){
  console.log("render");
  return (
    <div className="App">
    {
      this.state.show ?  <Student/>: <h1>child component removed</h1>
    }
   {/* not operator= use for toggle */}
   {/* jaise he child component remove hoga toh ComponentWillUnmount automatic call hoga */}
    {/* <h1>ComponentWillUnmount, life cycle method   </h1> */}
      {/* <p>when component will remove from then ComponentWillUnmount method will call, when we hide/show ,hide something then that will completely remove from dom</p> */}
     
      <button onClick={()=>{this.setState({show:!this.state.show}) 
      console.log("deleting")}}>Toogle child component</button>
    </div>
  )

}

 
    
 
}

export default App;
