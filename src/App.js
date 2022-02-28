import "./App.css";
import React,{useEffect, useState} from "react";
import { Table } from 'react-bootstrap';

function App() {

const [data, setData]=useState([])


//when we call api we have to use fetch method= we give url an afteer we resolve as promise
//when we use this data it basically return a promise , and we use then to return promise, then apko resolve kr ke de g is promise ko
//hum result as a paremeter pass karenge (takki hum data ko get kar saki ) fir likhenge result and .json or jb json likhte hai ye phir se promise return krta hai
//kabhi bhi ap api ko call krte ho apko iss tarah se nhi krna, hameha ap UseEffect mai call kro-ye functional component hai or agar class component hota toh usme component did mount mai api call krte
//ab useffect use karenge= ye apne mai ek callback function leta hai toh arrow function isko de deta hai
    
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
    result.json().then((resp)=>{
      // console.log("response",resp);
      setData(resp)
    })
  })
},[])
console.log(data);
//takki ek he bar chle toh isme blank array bhi pass kr dete hai = ye use effect ka method hai
//uske bad state le lete hai, by default hum blank array lenge usestate mai
//then we can  plot this data in table




    // fetch("https://fakestoreapi.com/products/1").then((result)=>{
    //   result.json().then((resp)=>{
    //     console.log("response",resp);
    //   })
    // })

  // let users = [
  //   { id: 1, name: 'sagar', email: 'sag@m.com'},
  //   { id: 2, name: 'preet', email: 'preet@m.com'},
  //   { id: 3, name: 'harpal', email: 'har@m.com'},
  //   { id: 4, name: 'anil', email: 'anil@m.com'},
  //   { id: 5, name: 'peter', email: 'peter@m.com'},
  //   { id: 14, name: 'sam', email: 'sam@m.com'},


  // ]


  return (
    <div className="App">
    

      <h3>Call Get Method API</h3>
      <p>node give api or data from database to react </p>

      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>mobile number</td>
          <td>email</td>
        </tr>
        </thead>
        <tbody>
{
  data.map((item)=>

            <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
        </tr>
  )
}
</tbody>
      </Table>
    
      </div>
      )
 }

export default App;
