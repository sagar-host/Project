import "./App.css";
import React, { useState } from "react";

function App() {

  return (
    <div className="App">
      <h1>HOC-high order component </h1>
         {/* <p>ek component jo dusra component ko as a prop leta ho or ek alag se component return krta ho</p>
         <p>ek single component hoga jo component he as a input lega or component he as a output dega</p> */}
        {/* <Counter/>
        <Counter/> */}

        <HOCRed cmp={Counter}/>
        <HOCGreen cmp={Counter}/>
        <HOCBlue cmp={Counter}/>


    </div>
  );
}

function HOCRed(props){
  return <h2 style={{backgroundColor:"red", width:"100px"}}>red<props.cmp/></h2>
}
function HOCGreen(props){
  return <h2 style={{backgroundColor:"green", width:"100px"}}>green<props.cmp/></h2>
}
function HOCBlue(props){
  return <h2 style={{backgroundColor:"blue", width:"100px"}}>blue<props.cmp/></h2>
}

function Counter(){
  //agar hume counter har ek counter ka color differnt chiyea toh uske liye hum component banayenge jo wrappeer ka kam karega
  const [count, setCount] = useState(0)
  return(
    <div>
      <h3>{count}</h3>
      <button onClick={()=>setCount(count+1)}>update</button>
    </div>
  )
}

export default App;
