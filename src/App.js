import "./App.css";
import React,{createRef} from "react";

class App extends React.Component{

  constructor(){
    super();
    this.inputRef=createRef();

  }
   componentDidMount(){
    //  console.log(this.inputRef.current.value="1000");
   }
   getVal(){
   console.log(this.inputRef.current.value);
   this.inputRef.current.style.color = "red"
   this.inputRef.current.style.backgroundColor = "black"

   }
    render(){
      return (
        <div className="App">
           <h1>Ref in React js</h1>
           <p>we can manipulate any element in dom by forecfully </p>
           <input type="text"  ref={this.inputRef}/>
           <button onClick={()=>this.getVal()}>check ref</button>
         
          
       
           </div>
          
         );

    }
   


 

}

export default App;
