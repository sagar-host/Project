import React from "react"


function Member(props){



    return(
                <div>
                <h1>Reusing function in Member.js</h1>
                <button onClick={props.data}>call data function</button>

                </div>
        
            )
    }
    export default Member;