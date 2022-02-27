import "./App.css";
import React from "react";
import { Table } from "react-bootstrap";

function App() {
  const users = [
    {
      name: "sagar",
      email: "rebelsagarx@mail.com",
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
      <h1>Nest List with Nested Array</h1>
      {/* <p>
        ek list ke andar ek nested list and ek array ke andar ek nested array
      </p> */}
      <p>for address we again implement loop because it again nested object inside array</p>
      <Table striped variant="dark">
        <tbody>
        <tr>
           <td>S.no</td>
          <td>Name</td>
          <td>Email</td>
          <td>Address</td>
          </tr>
      
        {
          users.map((item,i)=>
            <tr key={i}>
            <td>{i+1}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>
            <Table variant="dark">
            <tbody>
            <tr>
            <td>S.no</td>
          <td>House no.</td>
          <td>City</td>
          <td>Country</td>
          </tr>
                {
                  item.address.map((data,i)=>
             <tr key={i}>
             <td>{i+1}</td>
          <td>{data.HN}</td>
          <td>{data.city}</td>
          <td>{data.country}</td>
          </tr>
                )}
              </tbody>
            </Table>
          </td>
          </tr>
          )
        }
        </tbody>
      </Table>


    </div>
  );
}

export default App;
