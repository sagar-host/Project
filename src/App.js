import "./App.css";
import React from "react";
import {Table} from "react-bootstrap"



function App() {

const users = [
{name:"sagar" , email:"rebelsagarx@mail.com", contact:111},
{name:"peter" , email:"peter@mail.com", contact:786},
{name:"pinky" , email:"pinky@mail.com", contact:111},
{name:"zukerberg" , email:"zukerberg@mail.com", contact:111}


]




  return (
    <div className="App">
    {/* //unique key prop  actually need a unique key to identify a particular item otherwise its virtual dom not work properly*/}
      {/* how to show conditionally in table?only show contact who 111 only  = iss tarah filter apply kr skte hai */}
        <h1>List with Bootstrap and Uniue Key</h1>
        <Table striped bordered hover size="sm" variant="dark">
        <tbody>
        <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Contact</td>
              </tr>


          {
            users.map((item, i)=>
              item.contact === 111 ? <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
              </tr> :null
           )
          }
          </tbody>
          </Table>

    </div>
  );
}

export default App;
