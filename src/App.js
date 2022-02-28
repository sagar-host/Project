import "./App.css";
import React, { useRef} from "react";

function App() {
  let inputRef = useRef(null);
  let inputRef2 = useRef(null);

  function submitForm(e){
   //form ko submit karne ke liye by default parameter hota hai jisko event khete hai , 
   e.preventDefault();
   console.log("input field 1 value controlled by ref", inputRef.current.value);
   console.log("input field 2 value controlled by ref", inputRef2.current.value);
   let input3 = document.getElementById("input3").value 

   console.log("input field 3 value controlled by ref", input3);

  }
  return (
    <div className="App">
      <h1>UnControlled components in Reactjs</h1>
      {/* <p>it is related to input field or in form there are 3-4 input fields </p>
                  <p>react ke andar jab hum input fields ko directly state ke through control nhi krte hai to unko khete hai UnControlled component</p>
                  <p>uncontrolled component wo hote hai jo ki directly dom ke through handle hote hai jaise ki jQuery or dom manipulation in javascript or Ref ke through control ho rhi hongi</p>
                 <p>value ko handle kese karnge?</p>
        
            */}

      <form onSubmit={submitForm}>
        <input ref={inputRef} type="text" />
        <br />
        <br />
        <input  ref={inputRef2} type="text" /> <br />
        <br />
        <input id="input3" type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
