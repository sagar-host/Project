
import React,{useContext} from "react";
import {GlobalInfo} from './App'

function SuperChild(){
    const {appColor, getDay} = useContext(GlobalInfo)
    // console.log(appColor);
    const day = "Sunday";
    //this data goes  to parent so we make a function in parent component to call to other child to get data
   
return(
  <div>
    <h1 style={{color:appColor}}>SuperChild component</h1>
    <button onClick={()=>getDay(day)}>click</button>
  </div>
)
}

export default SuperChild;
