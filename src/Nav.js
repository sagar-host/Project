import React from "react"
import {Link} from "react-router-dom"

function Nav(){
    return(
        <div>
               <Link to="/">Home Page</Link>
               {/* <a href="/">home page</a> */}
               {/* we cant use anchor tag directly in react it causes reloading page */}
               <Link to="/about">About Page</Link>
        </div>
    )
}

export default Nav;