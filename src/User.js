import React from "react"

function User(){
    return(
        <h1>hello from user {2*10}</h1>
    )
    //without jsx using react=its very complex 
    // return React.createElement('div', null , "without jsx!",React.createElement('h4',null,"child elements of div"))
}

export default User;