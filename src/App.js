import './App.css';

// alert("helo button")

function App() {
  let data = "sagar"
  function apple(){
data="peter"
    alert(data)
    //we want to change h1 data to peter when button clicked
    // it changes the data in alert but cant changes data on another function when button clicked thats why we use state and props
  //use less variables when change state of something
  }
  
  return (
    <div className="App">
     <h1>Event!{data} </h1>

  {/* <button onClick={apple}>Click Me</button> */}
  {/* if we want to call directly a fuction then we use arrow fun or may be call back fun */}
  {/* with the help of arrow fun the function cant call itself ,it call when clicking on button */}
  <button onClick={()=>apple()}>Click Me</button>

  {/* <button onClick={()=>alert("alert")}>Click Me</button> */}

  
    

    </div>
  );
}



export default App;
