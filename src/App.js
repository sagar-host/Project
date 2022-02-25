import React,{useState} from "react"
import './App.css';


function App() {
  // let data = "sagar"
  // function updateData(){
  //      data="peter"
  //      alert(data)
  // }
  // console.log("_____________________");\

const [data, setData]=useState(4)
console.log(data);
function updateData(){
  setData(data/2);
}
console.log("this is re render again when button clicked and state changes again__________________________________________________");
// watch this log on console = it will update or re render again when we click on button
  return (
    <div className="App">
     <h1>State {data}</h1>
     <button onClick={updateData}>Update Data</button>


{/* useState IS a hook and it allows us to maintain state , update state= we can use this hook by destructure and define by variables*/}
    {/* <div className="App">
     <h1>State {data}</h1>
     <button onClick={updateData}>Update Data</button> */}
     {/* in state , component will re render again , or update , and it is for state only not for variables,and variable cant changes the state because it cant re rendered again , it stay in freeze */}
     {/* react not working this style , to  change data = props and state in react = it does not understand variable , it only understand state and props*/}
     {/* state is an object = in variable we can store data ..same as in state we can store data and print on when called
     state only use in react */}

  
    </div>
  );
}



export default App;
