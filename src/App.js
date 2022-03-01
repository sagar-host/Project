  import "./App.css";
  import React,{useEffect, useState} from "react";
  import { Table } from 'react-bootstrap';
  
  function App() {
  
  const [users, setUser]=useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [userId, setUserId]  = useState(null)
  // baki jagaha mai bhi hum id lga denge


  
  useEffect(()=>{
    getList()
  },[])
  // console.log(users);

  function getList(){
    fetch("http://localhost:8000/users").then((result)=>{
      result.json().then((resp)=>{
        // console.log("response",resp);
        setUser(resp)
        // jaise he hamari users api call ho jati hai toh iske sath he mai us form ke value fir se submit karna chahunga
     //setName ko call karenge , isme apko zeroth array hoga usko data leke ana hai resp kai
       //zeroth array he kyun?
     setName(resp[0].name)
        setEmail(resp[0].email)
        setMobile(resp[0].mobile)
        setUserId(resp[0].id)
      })
    })
  }

  function deleteUser(id){
    fetch(`http://localhost:8000/users/${id}`,{
      method: 'DELETE'
    }).then((result)=>{
        result.json().then((resp)=>{
          // console.log(resp);
          //jab humara result sucess aa jayega toh ek bar phir iss fun ko call kar denge
          getList();
        })
    })
  }
//for page not to refresh when delete button click - so we have to put the api in a function - getList and also call that function from use effect(ye to stating mai humari list lati hai ,wo ye kam karegi)
  
function selectUser(id){
  //array mai -1 karenge kyunki array zero se start hota hai or humari id 1 se start hoti hai
  //ab hume input wala data table mai fill karwana hai jab update kare
  //jo upar state hai wo yha pe bhi set karni hai,ab humare pass kya data ana chiyea ,jo apka users wala data hoga wo wala -1 karke 
  console.log(users[id-1]);
 
 
  // setName(users[id-1].name)
  // setEmail(users[id-1].email)
  // setMobile(users[id-1].mobile)
  //toh hum data kha se leke ayenge = users ke behalf se leker ayaenge data
  //upar wale code ko simplified karne ke liye ap isko var mai store kr skte hai
  let item = users[id-1]
    setName(item.name)
  setEmail(item.email)
  setMobile(item.mobile)
  setUserId(item.id)


}

function updateUser(){
  // console.log(name,email,mobile,userId);
  //iss data ko variable mai legenge aur object mai le lenge kyunki bad ma isko strinfiy karenge
  let item = {name,email,mobile,userId}
  //updated data humko mil gaya ab humko isse api mai send karna hai,par hume pata kese chelega hume ki itne sare users se hume update konsa karna hai,
  //hume ek cheez krni padegi ki update ke click ke upar hume id bhi chiyea ek state ke andar,taki hum ek state se pata kr sake ki konsi wali id hai
//ab hum put api ko call bhi karenge yaha se
//or yha pr userid rhege ... kyunki userid humari state ke sath connewct hai,
fetch(`http://localhost:8000/users/${userId}`,{
  method: 'PUT',
  headers:{
    'Accept':'application/json',
    'Content-type':'application/json'
  },
  // stringify ka mtlb hai ye object ko string mai convert kar dega
  body:JSON.stringify(item)
}).then((result)=>{
    result.json().then((resp)=>{
      // console.log(resp);
      //jab humara result sucess aa jayega toh ek bar phir iss fun ko call kar denge
      getList();
    })
})

}

    return (
      <div className="App">
  
  
        <h3>Update Data with PUT Method</h3>
        {/* <p>hum table mai update ka button banayage or uss update ke button ke click ke upar jo form hoga nah uske andar hum data ko pre filled kar denge,update krne se phele he,or sath onload kese kr skte hai?wo bhi sikhenge</p> */}
  
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>mobile number</td>
            <td>email</td>
            <td>Operation</td>
          </tr>
          </thead>
          <tbody>
  {
    users.map((item,i)=>
  
              <tr key={i}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.mobile}</td>
            <td>{item.email}</td>
            <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
            {/* ab button ke click ke upar bhi inn chezoon ko pre filled karwate hai */}
            <td><button onClick={()=>selectUser(item.id)}>Update</button></td>
          </tr>
    )
  }
  </tbody>
        </Table>
            <div>
            {/* apko pata hai jo humara event(e) parameter hota hai jo yha se data leke ayega  */}
              <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}/> <br /> <br />
              <input type="text"  value={email}  onChange={(e)=>setEmail(e.target.value)}/> <br /> <br />
              <input type="text"  value={mobile}  onChange={(e)=>setMobile(e.target.value)}/> <br /> <br />
               <button onClick={updateUser}>Update</button>

            </div>

        </div>
        )
   }




export default App;
