import "./App.css";
import React from "react";
// import { NavItem, Table } from "react-bootstrap";
import User from "./User"

function App() {
  const users = [
    {
      name: "sagar",
      email: "rebelsagarx@mail.com",
      contact: "007",
      address: [
        { HN: "10", city: "noida", country: "india" },
        { HN: "11", city: "delhi", country: "india" },
        { HN: "177", city: "gurgaon", country: "india" },
        { HN: "58", city: "cochin", country: "india" },
      ],
    },

    {
      name: "peter",
      email: "peter@mail.com",
      contact: "888",
      address: [
        { HN: "10", city: "noida", country: "india" },
        { HN: "11", city: "delhi", country: "india" },
        { HN: "177", city: "gurgaon", country: "india" },
        { HN: "58", city: "cochin", country: "india" },
      ],
    },
    {
      name: "pinky",
      email: "pinky@mail.com",
      contact: "111",
      address: [
        { HN: "10", city: "noida", country: "india" },
        { HN: "11", city: "delhi", country: "india" },
        { HN: "177", city: "gurgaon", country: "india" },
        { HN: "58", city: "cochin", country: "india" },
      ],
    },
    {
      name: "zukerberg",
      email: "zukerberg@mail.com",
      contact: "111",
      address: [
        { HN: "10", city: "noida", country: "india" },
        { HN: "11", city: "delhi", country: "india" },
        { HN: "177", city: "gurgaon", country: "india" },
        { HN: "58", city: "cochin", country: "india" },
      ],
    },
  ];

  return (
    <div className="App">
      <h1>Reuse Component</h1>
    
      {/* <p>component inside a loop, how to pass props in loop</p> */}
          
          {
            users.map((item, i)=>
         
          <User data={item}/>
            )
          }
      


    </div>
  );
}

export default App;
