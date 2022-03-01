import React,{useEffect,useRef} from "react"

function User(props){
//ye ref ka part rhega
    const lastVal =  useRef();
    useEffect(()=>{
        //jo current hai isko ap change nhi kr skte kyunki current isse ka pre defined property hota hai
       //jo hum useRef use kr rhe hai ..ye last value ko uthayaga dom se ..isko current value update hone se phele he ye useffect chl jayega or ye apni last value ko store krr lega..or badd mai count ke andar new wali value ayegi

        lastVal.current = props.count
    })
    const previousProps = lastVal.current

    return(
        <div>
            {/* <h1>User Component || current value:  {props.count}</h1>
            <h2>Previous value through props : {previousProps}</h2> */}
            {/* iski previous value ko easily guess kr skti hai  ..toh hum random use karenge takki hum easily se guess nah kr sake */}
             {/* previous value get karne ke liye hume useeffect ,useref import karna padega */}
       {/* to get difference */}
       <h1>Difference: {previousProps- props.count}</h1>
        </div>
    )
}

export default User;