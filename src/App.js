import "./App.css";
import React,{useRef} from "react";
import User from "./User"

function App  (){
     
  let inputRef = useRef(null)

  function updateInput(){
inputRef.current.value ="1000"
inputRef.current.style.color ="red"
inputRef.current.focus()


  }
      return (
        <div className="App">
           <h1>forward Ref</h1>
           {/* <p>if input is in child component and button is in parent component, and we want to change its dom , when button is clicked from parent component, so we use forward ref hook</p> */}
            <User ref={inputRef}/>
             <button onClick={updateInput}>update input box</button>

           </div>
          
         );



}

export default App;
