import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState(0)

  function saveUser(){
    console.log({name,email,mobile});
    let data = {name,email,mobile}
    fetch("http://localhost:8000/users", {
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((result)=>{
      // console.log(result);
      result.json().then((resp)=>{
        console.log("resp", resp);
      })
    })
  }


  return (
    <div className="App">
      <h1>Post method with api's</h1>
      <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} name="name"/>
      <br /> <br/>
      <input type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email} name="email" />
      <br /><br/>
      <input type="text" onChange={(e)=>{setMobile(e.target.value)}}  value={mobile} name="mobile"/>
      <br /><br/>
      <br /><br/>
      <button onClick={saveUser} type="button">save new user</button>
    </div>
  );
}

export default App;
