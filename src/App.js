  import "./App.css";
  import React,{useEffect, useState} from "react";
  import { Table } from 'react-bootstrap';
  
  function App() {
  
  const [users, setUser]=useState([])
  

  
  useEffect(()=>{
    getList()
  },[])
  console.log(users);

  function getList(){
    fetch("http://localhost:8000/users").then((result)=>{
      result.json().then((resp)=>{
        // console.log("response",resp);
        setUser(resp)
      })
    })
  }

  function deleteUser(id){
    fetch(`http://localhost:8000/users/${id}`,{
      method: 'DELETE'
    }).then((result)=>{
        result.json().then((resp)=>{
          console.log(resp);
          //jab humara result sucess aa jayega toh ek bar phir iss fun ko call kar denge
          getList();
        })
    })
  }
//for page not to refresh when delete button click - so we have to put the api in a function - getList and also call that function from use effect(ye to stating mai humari list lati hai ,wo ye kam karegi)
  
    return (
      <div className="App">
  
  
        <h3>Delete Data with API Call</h3>
  
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
          </tr>
    )
  }
  </tbody>
        </Table>
  
        </div>
        )
   }




export default App;
