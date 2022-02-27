import "./App.css";
import React,{useRef} from "react";

function App  (){
     
  let inputRef = useRef(null)

  function handleInput(){
console.log("calling");
// inputRef.current.value = "1000"
// inputRef.current.focus()
// inputRef.current.style.color ="gold"
inputRef.current.style.display= "none"
  }
      return (
        <div className="App">
           <h1>Ref in functional component- it is a hook</h1>
           <p>it is only use for emergency where props and state not work</p>
            <input type="text" ref={inputRef} />
            <button onClick={handleInput}>ref</button>
          
       
           </div>
          
         );



}

export default App;
