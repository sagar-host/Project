import "./App.css";
import React from "react";
import "./style.css";
import style from "./custom.module.css"

function App() {
  return (
    <div className="App">
      <h1 className="primary"> Style from css</h1>
      <p>Style type in reactjs </p>
      <h1 style={{color:"red",backgroundColor:"gray"}}>style in inline</h1>
      <h1 className={style.success}>modular css or custom css component</h1>
      <h1>styled component = external library</h1>
    </div>
  );
}

export default App;
