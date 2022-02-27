import "./App.css";
import React from "react";



function App() {

  // const students = ["sagar","anil","peter","sam"];


  //we use objects for seprate fields
const students = [
{name:"sagar" , email:"rebelsagarx@mail.com", contact:988222666621},
{name:"peter" , email:"peter@mail.com", contact:66522588416224},
{name:"pinky" , email:"pinky@mail.com", contact:78844661122},
{name:"zukerberg" , email:"zukerberg@mail.com", contact:786}


]


  //map is use for looping ...traverse elements in array

  // students.map((item)=>{
  //   console.log("My name is: ",item);
  // })

  // for(let i=0; i<students.length;i++){
  //     console.log("in for loop so name is", students[i]);
  // }

  //why we use map instead of for loop because inside return the for loop does not support at all but map function support it.

  return (
    <div className="App">
        
        <h1>Handle Array with list</h1>
        <p>map function vs for loop</p>
        map function
       
       <table border="2">
       <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
          </tr>

       {students.map((data)=>
          <tr>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.contact}</td>
          </tr>
      
       )}
       </table>


    </div>
  );
}

export default App;
