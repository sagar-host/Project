import React,{Component} from "react"
import './App.css';


class  App extends Component {
  //define state= so first make constructor
    
constructor(){
  super();
  this.state={
    data:0
  }
}
apple(){
  this.setState({data: this.state.data+1})
}
//state is a data container like we use variables(let,var,const) in which we can store information(name,email,array,objects etc) same as state is also container and we can store any data in it
//diff between state and variables- when we update variable , the component cant update itself and cant re rendered itself and when we update state ,componenent will re render itself, and react understand that something is updated and it re render the new thing which is updated
 //we dont need
 //what if we use state outside a component? we can do this but it is not recommended= state is public or private? it is public
render(){
    return (
      <div className="App">
       <h1>State in Class Component {this.state.data}</h1>
      <button onClick={()=>this.apple()}>Update Data</button>
    
      </div>
    );
  }
  
}



export default App;
