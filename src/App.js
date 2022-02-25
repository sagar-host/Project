import './App.css';
import React, { Component } from "react"
import Students from "./Students"

class App extends Component {
  constructor(){
    super();
    this.state={
      name:"$agar"
    }
  }


     render(){
      

      return (
        <div className="App">
         <h1>Props with Class component</h1>
  
         <Students  name={this.state.name} mobile="oneplus"/>
         <button onClick={()=>this.setState({name:"dollo"})}>Update name</button>
    
  
  {/* we can change props from app.js only */}
         {/* <Students  name="peterson" mobile="'apple'"/>
         <Students  name="lavy" mobile="micromax"/> */}
  
  
        </div>
      );

     }

 

  
}



export default App;
