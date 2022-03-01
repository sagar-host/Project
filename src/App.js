  import "./App.css";
  import React,{ useState} from "react";
  
  function App() {

  const [count, setCount] = useState(1)

  function updateCounter(){
    //isme hum random value lenge
    // setCount(count+1)
    //ab mai chata hun ki mere previous value or current value ke andar mughe difference pata chale
    //previous value kese milegi= previous value mai rakh nhi sakta kyunki agar m ek variable m rakhta hun toh jaise he mai state update karunga toh variable phir se update kar jayega pechli wali value toh mai kisi bhi tarah rakh he nhi sakta but react ne iska khud se he ek tarika diya hua hai ,bhaut he easy solution diya hua hai 
    // setCount(Math.floor(Math.random()*10))
    // let rand = Math.floor(Math.random()*10)
    //toh mughe previous state ke liye yha rand direct use nhi karna ..isko hatha ke ye apne ap mai call back function bhi rwkhta hai
   //iske andar isko previous value milege, aga mai isko parameter de dun pre ,
   //consle mai previous value mil jayegi and page mai current value
   //ab mai difference find kr skta hun
//     setCount((pre)=>{
//       console.log(pre);
// if(pre<5){
//   alert("low value")
// }

//    return rand
//     })

// setCount(count+5)
//har bar 5 increase hoga lekin humare pass ek for loop hai
//for loop 1 ke sath increase kyu ho rha hai= jb tak ye count ke value increase hoti ha pechle wali uss se phele loop chal jata hai...toh ek he value milti hai jo current value hai, or uske bad ye har bar mai kya karega ki ye +1 he krta hai ..ye 5 bar chlme tk usko ye async value hai wo mil he nhi pati- last wali value ..uss se phele he loop chl jata hai async hone ki waja se ...
//toh iske liye bhi app usse tarah se use kr skte call back function
for(let i=0;i<5;i++){
  // setCount(count+1)
  setCount((prev)=>{ 
    console.log(prev)

    return prev+1
  })
 

}




  }

    return (
      <div className="App">
  
  
        <h3>Previous State in Functional Component  {count}</h3>
        {/* <p>hum table mai update ka button banayage or uss update ke button ke click ke upar jo form hoga nah uske andar hum data ko pre filled kar denge,update krne se phele he,or sath onload kese kr skte hai?wo bhi sikhenge</p> */}
  {/* <p>previous state k matlab hai jo mere current state hai iss se pheli wali state= jaise mere current state hai 0 ,jb button pe click karte hai toh 9 aa jata hai .. mujhe toh pata hai ki mere previus state 0 hai pr mere program ko nhi pta merte previous kya hai!agar mere previous state 5 se kam thi ya phir 5 se zyada thi toh mai usme condition lagana chata hun.....jo mere previous thi or jo last state hi toh isme hum difference kese find kar skte hai</p> */}
        <button onClick={updateCounter}>click me to update counter</button>

        </div>
        )
   }




export default App;
