import React,{PureComponent} from "react";

 class User extends PureComponent{
 

  render(){
console.log("user component check re rendring");
    return (
      <div className="App">
      <h1>user Component {this.props.count}</h1>
    
     
         </div>
        
       );

  }
 

}

export default User;
