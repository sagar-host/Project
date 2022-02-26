import './App.css';
import React from "react"
import User from "./User"
import Member from './Member';

function App(){

  function getData(){
    alert("hello from app.js")
  }
   

      return (
        <div className="App">
         {/* why we pass function from parent component to child component?why we cant create function in child component? 
         because if we need or reuse that function on another child component so that we can use it from parent component
         creating another child component member.js to reuse that function which we are using in user.js*/}
         {/* can we call this function in super child component?if yes  then how ?if not why? */}
          <User data={getData}/>

          <div style={{ color:"salmon"}}>
          <Member data={getData}/>

          </div>

  
        </div>
      )
 
}



export default App;
