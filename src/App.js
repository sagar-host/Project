import './App.css';
import React,{useState} from "react"

function App(){

const [name , setName] = useState("")
const [policy, setPolicy]=useState(false)
const [intrest , setIntrest] = useState("")


function getFormData(e){
  console.log(name,policy,intrest);
e.preventDefault()
}
   

      return (
        <div className="App">
         <h1>Handle Forms in React</h1> 
{/* to prevent not to refresh page on form submit , we should use event on form onsubmit() 
and make function and it take parameter , and write e.preventdefault - actually it is a functin , it stop the form to submit*/}
        
         <form onSubmit={getFormData}>
           <input type="text" placeholder='enter name' onChange={(e)=>setName(e.target.value)}/><br /> <br />
           <select onChange={(e)=>setIntrest(e.target.value)}>
           <option>select option</option>
             <option>Marvel</option>
             <option>Dc comics</option>
           </select><br /> <br />
           <input type="checkbox" onChange={(e)=>setPolicy(e.target.checked)} /> <span>Accept privacy policy</span><br /> <br />
           {/* checked takes true and false */}
           <button type='submit'>Submit</button>
           {/* we can also use value to control the form */}
           {/* how we can disable a particular field */}
         </form>
  
        </div>
      )
 
}



export default App;
