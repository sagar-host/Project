import React,{Component} from "react"


class User extends Component{
constructor(){
    super();
    this.state={
        email:"rebelsagarx@gmail.in"
    }
}



    render(){
        // console.log(this.props);
        console.log("render method" , this.state.email);
        return(
<div>
             {/* <h1>user component {this.props.name}</h1> */}
            <h1>user component  {this.state.email}</h1>
            <button onClick={()=>this.setState({email: "rebel@mail.com"})}>update email adress</button>
            </div>
        )
    }
}
export default User;