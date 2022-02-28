import "./App.css";
import React,{useState} from "react";

function App  (){
     let [val, setVal] = useState("000")
     let [item, setItem] = useState("")

      return (
        <div className="App">
           <h1>Controlled components in Reactjs</h1>
                  {/* <p>it is related to input field or in form there are 3-4 input fields </p>
                  <p>react ke andar jab hum input fields ko state ke through control krte hai to unko khete hai Controlled component</p>
                  <p>uncontrolled component wo hote hai jo ki directly dom ke through handle hote hai jaise ki jQuery or dom manipulation in javascript</p>
                 <p>value ko handle kese karnge?</p>
        
            */}
            {/* ye input field state ke through Controlled ho rha hai */}
           {/* hum value ko state se control kr rhe hai toh usme hum kya ek default value nhi lga skte ?hume default value ko apply krne ke liye val state ko hathana padega tabhi default value pass hogi but hum useState mai bhi default value initalize kr skte   hai = by default value set karne ke liye hum isme default value lga skte hai */}
          <input type="text" value={val}  onChange={(e)=>setVal(e.target.value)}/>
          {/* <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}/> */}

          <h3>Value : {val}</h3>
          <h3>Item : {item}</h3>

           </div>
          
         );



}

export default App;
