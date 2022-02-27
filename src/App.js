import './App.css';
import React, { useEffect,useState} from "react"
import User from "./User"


function App (){
 //how to use use effect through props , and for diffrent state

  const [data , setData] = useState(10)
  const [count, setCount] = useState(100)

  //we want that this useeffect can only run for data

// useEffect(()=>{
//   console.log("called with data state");
// }, [data])
  
//we want that this useeffect can only run for count

// useEffect(()=>{
//   console.log("called with count state is " + count);
// }, [count])


  return (
    <div className="App">
    {/* <h1>count: {count}</h1>
    <h1>data: {data}</h1> */}
    <User count={count} data={data}/>
    <button onClick={()=>setCount(count+1)}>update counter</button>
    <button onClick={()=>setData(data+1)}>update data</button>

        <p>Use effect hook with specific state and props </p>
    </div>
  )



}

export default App;
