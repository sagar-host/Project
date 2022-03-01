
import React from "react";
import {CommonContext} from "./CommonContext"


class Main extends React.Component {



  render(){
    return (
  
        <CommonContext.Consumer  >
    
        {
            ({color}) =>(
                <h1 style={{backgroundColor:color}} >Hello this is main page</h1>
            )
        }
      
            
                <button >Update Color</button>
 
        
        

        </CommonContext.Consumer>
     
        )
    
  }

 }

export default Main;
