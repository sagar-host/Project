
import React, { Component, useState } from "react"



class Student extends Component{
componentWillUnmount(){
    // alert("componentWillUnmount called")
    //we can cancel data loading , we can stop api from calling,remove set timeout ,any function which we want to remove from dom
console.log("componentWillUnmount called");
//this life cycle method will be inside class component

}


render(){
  console.log("render");
  return (
    <div className="App">
    <h1>Student Component</h1>
    </div>
  )

}

 
    
 
}

export default Student;
