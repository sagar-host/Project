import './App.css';
import React,{useState} from "react"

function App(){
 
  const [data, setData] = useState(null)
  const [print, setPrint] = useState(false)


  function getData(val){
console.log(val.target.value);
setData(val.target.value)
setPrint(false)
  }
   

      return (
        <div className="App">
        
         {/* <h1>How to get value of input box? </h1>
         <h2>two ways-: onChange= jaise he mai type krta hu uske sath sath mujhe value mil jaye</h2>
         <h2>button ke click ke upar mai value kese get kr skta hu....we are not using forms here</h2>
          <h2>jaise he hum input ke andar kuch likhenge toh type toh ho gya but mai isko get kese kr skta hun react ke andar
          takki mai usko api ke andar bhej dun ya phir mai usko or khi use kr lu</h2>
          <h2>sabse phele hume onChange event dena padega or uske liye function bhi bnana padega or uske andar ek value/parameter pass krna padega</h2>
        <h2>jaise hum kuch lekenge to console mai wo har bar change hoga ...hume target lagana padega target mtlb jiske upar mai abhi target kr rha hun</h2>
        <h2>jaise he type krenge toh pura input field he print ho jayega console pe ..toh ab hume target input ke value pe krna hai..takii jo hum input field mai likh rhe hai wo console pe print ho jaye</h2>
         <h3>har ek point pe value mil jayegi jab jab hum type krenge toh onchange call hoga but hume print bhi krni hai value</h3>
         <h3>value print krne ke liye ek state le lete hai ,ap use state ko null bhi rakh skte ho ya phir koi value bhi de skte ho</h3>
        <h1>ab hume only button ke click ke upar he value ko print karwana hai toh ?</h1>
       <h1>ek state toh wo rakho jo onchange ke andar he mil jayege or dusri state wo rakho jo button ke click hone par fire hogi ya change hogi</h1>
        <h1>by default button ke state false rakho , jaise he app button click karoge toh apko set print true kar dena hai</h1>  */}
        <h1>can we send html through props? yes we can , class component=this.props.children., function component = this.children</h1>
         {/* <h1>{data}</h1> */}
         {print? <h1>{data}</h1>:null}
         <input type="text"  onChange={getData}/>
         <button onClick={()=>setPrint(true)}>Print value or data</button>

  
        </div>
      )
 
}



export default App;
