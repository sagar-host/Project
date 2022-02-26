import './App.css';
import React, { useState } from "react"


function App (){
 
  const [data, setData] = useState("sagar")

  return (
    <div className="App">
         <h1>Hooks {data}</h1>
         {/* <p>why hooks? because hooks are used in functional component,but in functional component we use hooks to apply life cycle methods</p>
           <p>when we are using class component , inside class component they have inbuilt features like state,lifecycle methods,pure component,etc </p>
           <p>but in functional component there are not any bult in features , so with hook, we can use class component features in functional components such as state,life cycle,pure component,etc</p>
   <p>useState is a hook, just type use and vscode recommend hooks</p>
    
   <p>usestate can be use in destructuring method of javascript</p> */}
   <p>we use use effect hook because it contain all life cycle methods</p>
   <button onClick={()=>setData("xxxx")}>data</button>
    </div>
  )



}

export default App;
