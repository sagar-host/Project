  import "./App.css";
  import React,{createContext, useState} from "react";
import Child from "./Child";
import OtherChild from "./OtherChild";

export const GlobalInfo = createContext();
function App(){
  const [color, setColor] = useState('red')

  const [day, setDay] = useState("Monday")

const getDay =(item)=>{
  console.log(item);
  setDay(item)
}

  return(
    // eslint-disable-next-line react/jsx-pascal-case
    <GlobalInfo.Provider value={{appColor: color , getDay:getDay}}>
    <div>
      {/* <h1>React Context API with Hooks</h1> */}
      <h1>App Component {day}</h1>
      {/* <p>its inbuild api system in react whereas redux is external library </p> */}
      <Child />
      <OtherChild/>
    </div>
    </GlobalInfo.Provider>
  )
}

export default App;











//   import "./App.css";
//   import React from "react";
//   import {CommonContext} from "./components/CommonContext"
// import Main from "./components/Main";
// import UpdateButton from "./components/UpdateButton";

//   class App extends React.Component {
//     constructor(){
//       super();
//       this.updateColor=()=>{
//         this.setState({
//           color:"red"
//         })
//       }
//       this.state={
//         color:"green",
//         updateColor:this.updateColor
//       }
    
//     }

//     render(){
//       return (
     
//           <CommonContext.Provider value={this.state} >
//           <h3>Context API</h3>
      
//         <Main />
//         <UpdateButton />
      
//           </CommonContext.Provider>
                  
      
//           )
      
//     }
 
//    }

// export default App;
