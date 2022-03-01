import React from "react";
import {CommonContext} from './CommonContext'

function UpdateButton() {


    return (
      <div className="App">
        <CommonContext.Consumer  >
        {
            ({updateColor}) =>{
                <button onClick={()=>updateColor()}>Update Color</button>
            }
        }

        </CommonContext.Consumer>
                     
        </div>
        )
    
  }


export default UpdateButton;
