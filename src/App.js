import './App.css';
import React,{useState} from "react"
import Students from "./Students"

function App() {

  const [name, setName] = useState("sagar")

//like we make function = with the help of parameter we pass data in function ,
//same as for prop = we make component and want to  pass data = so, we can do that with the help of props  = props(properties) is like parameter but it is not parameter

    return (
      <div className="App">
       <h1>Props with functional component</h1>

       <Students name={name} />
        {/* we want to change name sagar to desixxx when button clicked */}
        <button onClick={()=>{setName("desixxx")}}>updateName</button>
        {/* this way we can change values or name dynamically  */}
        {/* we cant use useState in class components because it uses constructor and super method  */}
        {/* what if we pass a function from props ?if yes how */}

         {/* <Students name="sagar"  email="rebelsagarx@gmail.com" other={{address:"delhi",mobile:"oneplus"}}/> */}
         {/* <Students name="peter"  email="peterstalion@gmail.com" other={{address:"russia",mobile:"nokia"}}/>
         <Students name="preeti"  email="pretti@gmail.com" other={{address:"banglore",mobile:"micromax"}}/> */}
      </div>
    );

  
}



export default App;
