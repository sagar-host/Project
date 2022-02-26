import './App.css';
import React,{useState} from "react"

function App(){
    const [status, setStatus] = useState(true)
// initially it is true ternary operator on element = if status is true then show element else hide or null
   

      return (
        <div className="App">
        {
          status?  <h1>Hide and show , toggle</h1> : null
        }
       
{/*        
       <button onClick={()=>setStatus(false)}>hide</button>
       <button onClick={()=>setStatus(true)}>show</button> */}
       {/* with single button -toggle */}
       {/* not operator use in on click */}
       <button onClick={()=>setStatus(!status)}>Toggle</button>
  
        </div>
      )
 
}



export default App;
