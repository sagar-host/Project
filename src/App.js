import "./App.css";
import React, { useState,useMemo } from "react";

function App  (){
   
const [count , setCount] = useState(0);
const [item , setItem] = useState(10)

const multiCountMemo = useMemo(function multiCount(){
  console.log("multicount fun callling");
  // this function calls even when set item button press , but multicount value not changing , so it create problems on performance
  return count*5
}, [count])
 

    return (
      <div className="App">
         <h1>Use Memo Hook in functional component</h1>
         <h2>count: {count}</h2>
         <h2>item: {item}</h2>
         <h2>multiCount function : {multiCountMemo}</h2>

         <button onClick={()=>setCount(count+1)}>update count</button>
         <button onClick={()=>setItem(item*10)}>update item</button>

     
         </div>
        
       );


 

}

export default App;
