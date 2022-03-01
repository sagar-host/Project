  import "./App.css";
  import React from "react";
  import User from "./User"
  
  function App() {
    const [count, setCount] = React.useState(0)
    return (
      <div className="App">
  
  
        {/* <h3>Previous Props with Hooks</h3> */}
        {/* <p>man lo apke pass ek counter hai or uske upar click kr rhe ho ..abhi ke liye wo 1,2,3,4,5  se increase ho rha hai...jab apne click kra toh apko current value dikh rhe hai 5 toh apka last yani previous prop hoga 4...toh usko hum kiss tareike se get kar skte hai.....iska use hota hai logics mai - ki humari last value or current value mai kitna difference hai..agar dono value same hai toh hume kuch bhi update nhi karana ..or agar dono different hai toh kuch OPERATION update karwana haI</p>
       <p>ye advance concept hai</p>
       <p>user js component banana pdega ...agar prop use krne hai toh child component ki jarrurat padegi he</p> */}
           
           <User count={count}/>

           <button onClick={()=>setCount(Math.floor(Math.random()*10))}>Update counter</button>
           {/* <p>yha par button lete hai ..or uss button ke upar ek prop send karunga user wale ke andar ..or iske andar dekhenge previous props kese get kar sakte hai</p> */}

        </div>
        )
   }




export default App;
