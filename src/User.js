import { useEffect } from 'react';


function User (props){

useEffect(()=>{
    // console.log("use effect in user.js");
    alert("count is : "+ props.count)
    alert("count is : "+ props.data)

},[props.count, props.data])

  return (
    <div className="App">
    <h1>count props : {props.count}</h1>
    <h1>data props : {props.data}</h1>
    
    </div>
  )



}

export default User;
