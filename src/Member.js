import React from "react"


function Member(props){



    return(
                <div>
                <h1>Life cycle methods</h1>
                <h2>
                    three phases of life cycle
                    1.birth=mount  ===product load  ==componentDidMOUNT 
                    2.growth=update  ===product update  ==COMPONENTdidmount
                    3.death=unmount    ==product remove ==componentwillmount
                </h2>
                <button>call data function</button>

                </div>
        
            )
    }
    export default Member;