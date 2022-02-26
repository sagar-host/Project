import './App.css';
import React, { Component } from "react"
// import Member from './Member';

class App extends Component{

  constructor(){
    super()
    //why we call super in constructor? jo eska parent constructor hot hai jo component class hai ..usko call krne ke liye hum super ko call krte hai
   //ye constructor sabse phele ban jata ha tho hum state yji pe define krte hai,is se kya hoga state humari phele he ban jayegi html ready hone se phele,or easily hum print krwa skte hai with the help of state
   //esa nhi ho ki state humari ready hui nhi hai , or uss se phele humara html ready ho gya, toh problem aayegi tbhi hum constructor use krte hai state ko define krne ke liye
   //or kya nhi kr skte hai?yha pe kbhi apko api call nhi krni chiyea?kyunki humara constructor func and html ready nhi hota ,or uss se phele api ready ho jatti hai toh problem aa jati hai ...uske liye hum react mai component did mount method usse krte hai .api's ko call krne ke liye
   console.log("my name is constructor");
    this.state={
      data:"sagar"
    }
  }

   render(){
console.log("i am render");
    return (
      <div className="App">
        <h1>Constructor Life cycle methods  {this.state.data}</h1>
        <p>Constructor call first before any component</p>




      </div>
    )

   }

    
 
}



export default App;
