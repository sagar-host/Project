import './App.css';
import React, { useEffect,useState} from "react"


function App (){
 
  const [count, setCount] = useState(0)

useEffect(()=>{
  console.log("use EFFECT");
})
  


  return (
    <div className="App">
        <p>Use effect hook- all method can handle {count} </p>
        <button onClick={()=>setCount(count+1)}>update counter</button>
    </div>
  )



}

export default App;
