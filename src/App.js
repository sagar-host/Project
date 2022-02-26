import './App.css';
import React, { useState } from "react"
import User from "./User"


function App(){

// const [name, setName] = useState("sagar")


    return (
      <div className="App">
        {/* <h5>Render(execute krke represent krna)method in React = basically it is also a life cycle method</h5>
        <p> when state or prop update then render method itself run or automatically run 
        when render method calls?1.when component will ready for execution, 2.when props update and 3. when state channges
        </p>  for using state comment out button h1 and use contructor in user.js*/}
       {/* <h1><User name={name} /></h1> */}
       {/* <button onClick={()=>setName("xxx")}>update name</button> */}
     
       <h1><User/></h1>
      </div>
    )

    
 
}



export default App;
