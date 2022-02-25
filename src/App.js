import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  function Apple(){
    return(<div>hello internal function component</div>)
  }
  return (
    <div className="App">
     <h1>Hello </h1>
     <Apple/>
     {/* {Apple()} */}
     < User/>
     < User/>
    



    </div>
  );
}



export default App;
