import "./App.css";
import React from "react";
import User from "./User"

 class App extends React.Component{
   constructor(){
     super();
     this.state={
       count:1
     }
   }

  render(){
// console.log("parent check re rendring");
    return (
      <div className="App">
      {/* <h1>Pure Component {this.state.count}</h1> */}
          {/* <p>pure component is a feature in react , we just import it and use it in react</p> */}
          {/* <p>this feature only works in class component, for functional we use memo</p> */}
          {/* <p>it stops re rendring , to execute again and again</p> */}
          {/* <p>eg- we make state of name , we make button , when button click pure component check if previus clicked name is same as now clicked , if same then it stop this for rendring</p> */}
           {/* state is same but its re render again and again on click, it is problem , so we are using pure component */}
       {/* it checks the state if state is same again on click button then it will not re render again */}
       {/* but how to check on props also? */}

            <User count={this.state.count}/>

        <button onClick={()=>this.setState({count:this.state.count+1})}>update count</button>
     
         </div>
        
       );

  }
 

}

export default App;
